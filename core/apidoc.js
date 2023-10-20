
const util = require('util')

const swaggerUi = require('swagger-ui-express');

let operation_id = 0;

class ApiDoc{

    constructor(ip, port){
        this.ip = ip;
        this.port = port;
    }
    capitalizar(text){
        return text[0].toUpperCase() + text.slice(1).toLowerCase();
    }

    convertirACamel(text) { 
        let texto = text;
        let letras = 'abcdefghijklmnopqrstuvwxyz';
        for (var i = 0; i < letras.length; i++) 
            texto = texto.replaceAll('_'+letras.charAt(i),letras.charAt(i).toUpperCase());
        return texto;
    }

    convertirASnake(text) { 
        let texto = text;
        let letras = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();
        for (var i = 0; i < letras.length; i++) 
            texto = texto.replaceAll(letras.charAt(i),'_'+letras.charAt(i).toLowerCase());
        return texto;
    }

    generarDoc(db){
        operation_id = 0;
        let db_name = db.db;
        let db_name_up = db.db.toUpperCase();
        let db_name_cap = this.capitalizar(db.db);
        let tags = [];
        let paths = {};
        let schemas = {};

        db.groups.forEach(group => {
           this.generarGrupos(group, tags, paths, schemas);
        });
        //console.log("tags",db.db , tags);
        //console.log("paths",db.db , paths);
        //console.log("tags",);
        //console.log(util.inspect(paths, {showHidden: false, depth: null, colors: true}));
        let apiDoc = {
            "openapi": "3.0.1",
            "info": {
              "title": db_name_up + " API",
              "description": db_name_cap + " Envrionment",
              "version": "v1"
            },
            "servers": [
              {
                "url": `http://${this.ip}:${this.port}/${db_name}`,
                "description": `Servicio de ${db_name_cap}`
              }
            ],
            "security": [
              {
                "oidc": []
              }
            ],
            "tags": tags,
            "paths": paths,
            "components": {"schemas": schemas}
        };
        return apiDoc;
    }
    generarUI(){        
        router.use('/swagger-ui', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
        return router;
    }
    generarGrupos(group, tags, paths, schemas){
        let tagName = group.name;
        let tagNameCap = this.capitalizar(group.name);
        
        let tag = { name : tagName, description : `Servicio de ${tagNameCap}` };
        tags.push(tag);
        //let path = [];
        group.apis.forEach( api => {
            let query_params = [];
            let api_route = this.formatRoute(api.route,query_params);
            let route = `/${tagName}${api_route==""?"":"/"+api_route}`;
            let summaryText = this.generarResumen(api,tagName);
            console.log("api parametrosOut ",api.route,schemas);
            let parametrosIn = this.generarParametrosIn(group,api,api_route,query_params,schemas);
            let parametrosOut = this.generarParametrosOut(group,api,api_route,query_params,schemas);
            console.log("---parametrosIn",parametrosIn);
            if (paths[route]==undefined) paths[route] = {};
            paths[route][api.method.toLowerCase()] = {
                tags: [tagName],
                summary: summaryText,
                operationId: `findAll_${operation_id}`,
                parameters: parametrosIn,
                responses:{
                    "200": {
                        "description" : "OK",
                        "content":{
                            "*/*":{
                                schema:parametrosOut
                            }
                        }
                    }
                }
            }
            console.log("paths", paths[route]);
            operation_id++;
        });
        console.log("---schemas",schemas);
    }

    generarParametrosIn(group, api, api_route, query_params, schemas){
        let parametros = [];
        console.log("------query_params",query_params);
        query_params.forEach(k => {
            let parameters_data = {
                "name": this.convertirACamel(k),
                "in": "path",
                "required": true,
                "schema":  {"type": "string", "format": "uuid"}
            }
            parametros.push(parameters_data);
        });
        console.log("------parametros",parametros);

        let data_schema  = [];
        if (api.in == null || api.in == '') return parametros;
        data_schema = group.data[api.in];
        console.log("api.in",api.in);
        console.log("data_schema",data_schema);
        let responseName = this.capitalizar(this.convertirACamel(group.name));
        

        Object.keys(data_schema).forEach(k => {
            var schema = {};
            let relation = this.obtenerRelacion(data_schema[k],k);
            if (relation == null){
                let parameters_data = {
                    "name": this.convertirACamel(k),
                    "in": "query",
                    "required": false,
                    "schema":  this.getType(data_schema[k])
                }
                parametros.push(parameters_data);
            }

            
        })
        
        //let propiedades = this.generarPropiedadesIn(data_schema);
        //console.log("propiedades",propiedades);

        
        return parametros;
    }
    generarParametrosOut(group, api, api_route, query_params, schemas){
        let parametros = [];

        let data_schema  = [];
        if (api.out == null || api.out == '') return {};
        data_schema = group.data[api.out];
        console.log("api.out",api.out);
        console.log("data_schema",data_schema);
        let responseName = this.capitalizar(this.convertirACamel(group.name));
        let nameOutSchema = `SingleResponse${responseName}Response`;
        
        let propiedades = this.generarPropiedades(data_schema);
        console.log("propiedades",propiedades);

        schemas[nameOutSchema] = {
            type : "object",
            properties : propiedades
        }
        
        
        return { 
            "$ref" : `#/components/schemas/${nameOutSchema}`
         };
    }
    generarPropiedades(dataSchema){
        var dataRet = {};
        Object.keys(dataSchema).forEach(k => {
            let relation = this.obtenerRelacion(dataSchema[k],k);
            if (relation == null)
                dataRet[this.convertirACamel(k)] = this.getType(dataSchema[k])
        })
        
        return dataRet;
    }
    generarPropiedadesIn(dataSchema){
        var dataRet = {};
        Object.keys(dataSchema).forEach(k => {
            let relation = this.obtenerRelacion(dataSchema[k],k);
            if (relation == null)
                dataRet[this.convertirACamel(k)] = this.getType(dataSchema[k])
        })
        
        return dataRet;
    }
    getType(dataSchema){
        let tipo = "";
        let dataProp = dataSchema.split("|");
        if (dataProp[0] == "uuid") return {"type": "string", "format": "uuid"}
        if (dataProp[0] == "string") return {"type": "string"}
        if (dataProp[0] == "boolean") return {"type": "boolean"}
        if (dataProp[0] == "number") return {"type": "number", "format": "float"}
        if (dataProp[0] == "integer") return {"type": "integer", "format": "int32"}

        return {"type": "string"};
    }
    obtenerRelacion(field,fieldName){
        let rel = null;
        if(field.includes("[")){
            let esArray = field.includes("[[");
            let dataRel = field.replaceAll("[","").replaceAll("]","").split("|");            
            rel = {                
                table : dataRel[0] ,
                field : dataRel[1] ,
                own_field : dataRel[2] ,
                array : esArray
            }
        }
        return rel;
    }
    generarResumen(api,tagName){
        let resumen = '';
        let method = api.method.toLowerCase();
        let type = api.type.toLowerCase();
        if (type == 'auto'){
            if (method == 'get')
                resumen = `Obtener ${tagName}`;
            if (api.method == 'post')
                resumen = `Crear ${tagName}`;
            if (api.method == 'put')
                resumen = `Actualizar ${tagName}`;
            if (api.method == 'delete')
                resumen = `Eliminar ${tagName}`;
        }else{
            if (method == 'get')
                resumen = `[CUSTOM] Obtener ${tagName}`;
            if (api.method == 'post')
                resumen = `[CUSTOM] Crear ${tagName}`;
            if (api.method == 'put')
                resumen = `[CUSTOM] Actualizar ${tagName}`;
            if (api.method == 'delete')
                resumen = `[CUSTOM] Eliminar ${tagName}`;
        }
        return resumen;
    }
    formatRoute(route, query_params){
        let regParam = /(?=\:)?[a-zA-Z\_]+[0-9]*/g;
        let params = route.match(regParam);
        console.log("params",params);
        if (params == null ) return route;
            params.forEach( p => {
                let pCamel = this.convertirACamel(p);
                route = route.replaceAll(`:${pCamel}`,`{${pCamel}}`);
                query_params.push(p);
            })
        //query_params = params;
        console.log("route",route);
        return route;
    }
}

module.exports = {ApiDoc};