const express = require('express')
const router = express.Router()
var uuids = {};
const { Database } = require('../core/database.js');

var cors = require('cors');
const { forEach } = require('jszip');
var corsOptions = {
    origin: ["http://localhost","http://172.20.50.60","http://172.20.50.60"],
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

class CtrlApi{

    toColumnName(column, value){
        let values = value.split("|");
        let name = values[0];
        let pk = values.includes("pk");
        if (name == "number" && pk==true) return `${column} INTEGER PRIMARY KEY AUTOINCREMENT`;
        if (name == "uuid" && pk==true) return `${column} UUID PRIMARY KEY`;
        if (name == "number" || "integer" ) return `${column} INTEGER`;
        if (name == "float" ) return `${column} FLOAT`;
        if (name == "double" ) return `${column} FLOAT`;
        if (name == "date" ) return `${column} DATE`;
        if (name == "time" ) return `${column} TIME`;
        if (name == "boolean" ) return `${column} BOOLEAN DEFAULT false NOT NULL`;
        if (name == "string" ) return `${column} VARCHAR(255)`;
    }
    toFields(data){
        let strArr = [];
        Object.keys(data).forEach( c => {
            //evitar las subconsultas
            if (!data[c].includes('[[') && !data[c].includes('[') ) 
                strArr.push(c);
        });
        return strArr.join(",");
    }
    
    toValues(data,req){
        let strArr = [];
        Object.keys(data).forEach( c => {
            if (!data[c].includes('[[') && !data[c].includes('[') ) 
                if (req[c]==null)
                    strArr.push("null");
                else
                    strArr.push("'"+req[c]+"'");
        });
        return strArr.join(",");
    }

    toValuesUpd(data,req){
        let strArr = [];
        Object.keys(data).forEach( c => {
            if (!data[c].includes('[[') && !data[c].includes('[') ) 
                strArr.push(`${c} = '${req[c]}'`);
        });
        return strArr.join(",");
    }
    toRelations(data){
        let strArr = [];
        Object.keys(data).forEach( c => {
            //evitar las subconsultas
            if (data[c].includes("[[")) {
                let subArr = data[c].replace("[[","").replace("]]","").trim().split("|");
                console.log("data[c]",data[c]);
                strArr.push({name:c,table:subArr[0].trim(),field:subArr[1].trim(),ownfield:subArr[2].trim(),array:true});
                return;
            }
            if (data[c].includes("[")) {
                let subArr = data[c].replace("[","").replace("]","").trim().split("|");
                console.log("data[c]",data[c]);
                strArr.push({name:c,table:subArr[0].trim(),field:subArr[1].trim(),ownfield:subArr[2].trim(),array:false});
                return;
            }
        });
        return strArr;
    }
    toRelation(name,str){
            //evitar las subconsultas
        if (str.includes("[[")) {
            let subArr = str.replace("[[","").replace("]]","").trim().split("|");
            return {name:name,table:subArr[0].trim(),field:subArr[1].trim(),ownfield:subArr[2].trim(),array:true};
            
        }
        if (str.includes("[")) {
            let subArr = str.replace("[","").replace("]","").trim().split("|");
            return {name:name,table:subArr[0].trim(),field:subArr[1].trim(),ownfield:subArr[2].trim(),array:false};
        }
        return null;
    }
    
    uuidv4() {
        return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        );
    }

    toFieldSeed(fields,values){
        let me = this;
        let strArr = [];
//        var uuids = {};
        let counter_seed = 0;
        values.forEach((d,i) => {
            let regex = new RegExp('uuid\-[a-zA-Z_]+\-[0-9]{1,3}','gm');
            if ( regex.test(values[counter_seed]) == true ){
                let num = values[counter_seed].match(/(?=uuid\-)?[a-zA-Z_]+\-[0-9]{1,3}/gm);
                console.log("num",num);
                if (uuids[num[0]]===undefined){
                    console.log("new!");
                    uuids[num[0]] = me.uuidv4();
                }
                strArr.push("'"+uuids[num[0]]+"'");                    
            }else 
                strArr.push("'"+d+"'");               
                //strArr.push("'"+values[counter_seed]+"'");
            counter_seed++;
        });
        console.log("strArr",strArr);
        return strArr.join(',');
    }

    appendSubquerys(content,data_fields){
        let me = this;
        let relations = this.toRelations(data_fields);
        console.log("relations",relations);
        relations.forEach(r => {
            let idArr = [];
            content.forEach(c => idArr.push(`'${c[r.ownfield]}'`));
            //console.log("idArr",idArr);
            let relGroup = me.dbData.groups.filter( g => g.name == r.table)[0];
            console.log("relGroup,",relGroup,r.table);
            let f = me.toFields(relGroup.data['select']);          
            //console.log("relGroup.f ",f);
            let res_temp = me.database.db.prepare(`select ${f} from ${relGroup.name} where ${r.field} in (${idArr.join(',')}) `).all();
            //console.log("res_temp ",res_temp);
            content.forEach(cc => {                
                cc[r.name] = res_temp.filter(rt => rt[r.field] == cc[r.ownfield] );
                me.appendSubquerys(cc[r.name],f);
                if (!r.array)
                    cc[r.name] = cc[r.name].length>0?cc[r.name][0]:null;
            });
            
            //respuesta.content = me.database.db.prepare(`select ${f} from ${group.name} ORDER BY ${sort} ${descending} LIMIT ${offset},${size}`).all();
        });
        return content;
    }
    createTriggerUuid(database, group, uuid){
        let trigger = `
        CREATE TRIGGER AutoGenerate_${group.name}_${uuid}
        AFTER INSERT ON ${group.name}
        FOR EACH ROW
        WHEN (NEW.${uuid} IS NULL)
        BEGIN
           UPDATE ${group.name} SET ${uuid} = (select lower(hex( randomblob(4)) || '-' || hex( randomblob(2))
                     || '-' || '4' || substr( hex( randomblob(2)), 2) || '-'
                     || substr('AB89', 1 + (abs(random()) % 4) , 1)  ||
                     substr(hex(randomblob(2)), 2) || '-' || hex(randomblob(6))) ) WHERE rowid = NEW.rowid;
        END;`;
//console.log("trigger",trigger);
        database.writeSQL(trigger);
    }
    constructor(dbData,dbData_global=null){
        this.dbData = dbData;
        this.dbData_global = dbData_global;
        let me = this;

        if(this.dbData!==undefined){
            console.log("db_name",this.dbData.db);
            this.database = new Database(this.dbData.db);
            //console.log("this.database.getTables: ",this.database.getTables());
            this.dbData.groups.forEach(group => {
                
                if (!this.database.existTable(group.name)){
                    console.log("CtrlApi.group: creando");
                    
                    let dataCreate =  Object.keys(group.data.create);
                    console.log("list table.columns", dataCreate);
                    let fieldsArr = [];
                    let haveUuid = false;
                    let uuid = '';
                    dataCreate.forEach(c => {
                        if (!c,group.data.create[c].includes('[[') && !c,group.data.create[c].includes('[') ) return;
                        let colInsert = this.toColumnName(c,group.data.create[c]);
                        if (colInsert.includes("UUID")){
                            haveUuid = true;
                            uuid = c;
                        }
                        fieldsArr.push(colInsert);
                    });
                    let fieldStr = fieldsArr.join(",");
                    console.log("fieldStr:",fieldStr);
                    console.log(`CREATE TABLE ${group.name} ( ${fieldStr} ); `);
                    this.database.writeSQL(` CREATE TABLE ${group.name} ( ${fieldStr} ); `);

                    if (haveUuid) me.createTriggerUuid(this.database, group, uuid);
                    
                    group.seeder.forEach( (seed)=> {                        
                        let f = me.toFields(group.data[seed.data]);
                        console.log("f");
                        console.log(f);
                        let f_data = me.toFieldSeed(f,seed.values);
                        console.log("f_data");
                        console.log(f_data);
                        console.log(`INSERT INTO  ${group.name} (${f}) values (${f_data})`);                    
                        me.database.db.prepare(`INSERT INTO  ${group.name} (${f}) values (${f_data})`).run();      
                    });
                       
                }else{
                    let fields = this.database.getFields(group.name);
                    let dataCreate =  Object.keys(group.data.create);
                    let isDifferent = false;
                    fields.forEach( f => {
                        if (!dataCreate.includes(f.name)) { console.log("es diferente ", f.name); isDifferent = true;}
                    } );
                    dataCreate.forEach( c => {
                        if (!c,group.data.create[c].includes('[[') && !c,group.data.create[c].includes('[') ) return;
                        if ( fields.find( f => f.name == c)==null ) { console.log("es diferente ", c); isDifferent = true;}
                    } );           
                    if (isDifferent)         {
                        this.database.writeSQL(` DROP TABLE ${group.name}; `);                        
                        let fieldsArr = [];
                        let haveUuid = false;
                        let uuid = '';
                        dataCreate.forEach(c => {
                            if (!c,group.data.create[c].includes('[[') && !c,group.data.create[c].includes('[') ) return;
                            fieldsArr.push(this.toColumnName(c,group.data.create[c]));                            
                            let colInsert = this.toColumnName(c,group.data.create[c]);
                            if (colInsert.includes("UUID")){
                                haveUuid = true;
                                uuid = c;
                            }
                            fieldsArr.push(colInsert);
                        });
                        let fieldStr = fieldsArr.join(",");
                        console.log("fieldStr:",fieldStr);
                        console.log(`CREATE TABLE ${group.name} ( ${fieldStr} ); `);
                        this.database.writeSQL(` CREATE TABLE ${group.name} ( ${fieldStr} ); `);

                        if (haveUuid) me.createTriggerUuid(this.database, group, uuid);
                    }
                    /* si seeders son desiguales */
                        
                        let tot = me.database.db.prepare(`select count (*) as total from ${group.name} `).all();
                        let rowsNumber = tot[0]['total'];
                        if (rowsNumber < group.seeder.length ){
                            //this.database.writeSQL(`DELETE  ${group.name}`);
                            me.database.db.prepare(`DELETE FROM ${group.name}`).run();

                            group.seeder.forEach( (seed)=> {                        
                                let f = me.toFields(group.data[seed.data]);
                                console.log("f");
                                console.log(f);
                                let f_data = me.toFieldSeed(f,seed.values);
                                console.log("f_data");
                                console.log(f_data);
                                console.log(`INSERT INTO  ${group.name} (${f}) values (${f_data})`);                                  
                                    me.database.db.prepare(`INSERT INTO  ${group.name} (${f}) values (${f_data})`).run();      
                               
                            });
                        }

                }
            });
        }
        else{
            console.log("db_name",null);
        }
    }
    searchInside(e,regx){
        console.log("searchInside.e:",e);
        if (e==null) return false;
        if (typeof e === 'object'  )
            return Object.keys(e).filter( f => { return this.searchInside(e[f],regx); } ).length>0 ;
        
        if (Array.isArray( e ))
            return e.filter( f => { return this.searchInside(e,regx); } ).length>0 ;
        return e.toString().toLowerCase().match(regx);
    }
    publicar(){
        var me = this;
        router.all('/info',cors(corsOptions),async function (req, res){
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify( me.dbData ));
        })
        this.dbData.groups.forEach(group => {
            me.autoApiGen(group);
        });
        /*router.all('/',cors(corsOptions),async function (req, res){
            //res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify( await wsClass.operations[k].respuesta(req,res)));
        })*/
        return router;
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
    
    contentACamelCase(respuesta){
        let me = this;        
        let camel_data = [];
        
        if (Array.isArray(respuesta.content)){
            respuesta.content.forEach(data => {
                let data_fields = {};            
                Object.keys(data).forEach( f => {
                    data_fields[me.convertirACamel(f)] = data[f];
                });
                camel_data.push(data_fields);
                
            })
        }else{
                 
                let data_fields = {};            
                Object.keys(respuesta.content).forEach( f => {
                    data_fields[me.convertirACamel(f)] = respuesta.content[f];
                });
                camel_data.push(data_fields);
        }
        
        respuesta.content = camel_data;
    }
    contentASnakeCase(data_obj){
        let me = this;        
        let snake_data = [];
        let data_obj_temp = {... data_obj};        
        Object.keys(data_obj).forEach( f => {
            data_obj_temp[me.convertirASnake(f)] = data_obj_temp[f];
        });            
        return data_obj_temp;
    }
    autoApiGen(group){
        var me = this;
        group.apis.forEach(api => {
            let rel;
            if (api.type == "rel") rel = me.toRelation('',api.rel);
            if (api.method == "GET" && api.type == "auto"){
                console.log(`route GET /${group.alias===undefined?group.name:group.alias}/${api.route}`);
                router.get(`/${group.alias===undefined?group.name:group.alias}/${api.route}`, async function (req, res){
                    res.setHeader('Content-Type', 'application/json');
                    let respuesta = {content: [],
                        pagination: { pages : 0, rowsNumber: 0 }
                    };
                    let f = me.toFields(group.data[api.out]);                        

                    let findcondition = '';
                    console.log("findcondition:", req.params[api.route.replace(":","")]);
                    if (req.params[api.route.replace(":","")] !== undefined && req.params[api.route.replace(":","")] != "" )
                        findcondition = ` WHERE ${api.route.replace(":","")} = '${req.params[api.route.replace(":","")]}'`;

                    if (req.query.page != undefined && req.query.size != undefined &&
                        req.query.sortBy != undefined && req.query.descending != undefined ){

                        let page = parseInt(req.query.page);
                        let size = parseInt(req.query.size);
                        let sort = me.convertirASnake(req.query.sortBy);
                        let descending = req.query.descending=='false'?"ASC":"DESC" ;
                        let offset = (page ) * size;
                        let tot = me.database.db.prepare(`select count (*) as total from ${group.name} ${findcondition}`).all();
                        let rowsNumber = tot[0]['total'];
                        respuesta.pagination.pages = ((rowsNumber - rowsNumber%size) / size )+1 ;
                        respuesta.pagination.rowsNumber = rowsNumber;                        
                        console.log("sel", `select ${f} from ${group.name} ${findcondition} ORDER BY ${sort} ${descending} LIMIT ${offset},${size}`);
                        //respuesta.content = me.database.db.prepare(`select ${f} from ${group.name} ORDER BY ${sort} ${descending} LIMIT ${offset},${size}`).all();                            
                        respuesta.content = me.database.db.prepare(`select ${f} from ${group.name} ${findcondition} ORDER BY ${sort} ${descending}  `).all();
                        me.appendSubquerys(respuesta.content,group.data[api.out]);

                        if (req.query.keyword != undefined){
                            if (req.query.keyword != ""){
                                let regx = new RegExp("^.*"+req.query.keyword.toLowerCase()+".*$");
                                respuesta.content = respuesta.content.filter( (e) => Object.keys(e).filter( f => { return me.searchInside(e[f],regx); } ).length>0 );
                                respuesta.pagination.rowsNumber = respuesta.content.length;
                            }
                        }
                        if (size > 0) respuesta.content = respuesta.content.slice(offset,offset+size);
                        
                    }else{
                        console.log("GET query", `select ${f} from ${group.name} ${findcondition}` );
                        respuesta.content = me.database.db.prepare(`select ${f} from ${group.name}  ${findcondition}`).all();
                        me.appendSubquerys(respuesta.content,group.data[api.out]);
                    }
                    me.contentACamelCase(respuesta);
                    res.end(JSON.stringify(respuesta));
                });
            }
            if (api.method == "GET" && api.type == "rel"){
                console.log(`route GET /${group.alias===undefined?group.name:group.alias}/${api.route}`);
                router.get(`/${group.alias===undefined?group.name:group.alias}/${api.route}`, async function (req, res){

                    
                    res.setHeader('Content-Type', 'application/json');
                    let respuesta = {content: [],
                        pagination: { pages : 0, rowsNumber: 0 }
                    };
                    let f = me.toFields(group.data[api.out]);                        

                    let findcondition = '';
                    //console.log("findcondition:", req.params[api.route.replace(":","")]);
                    if (req.params[ rel.field ] !== undefined && req.params[ rel.field ] != "" ){
                        findcondition = ` WHERE ${rel.field} = '${req.params[ rel.field ]}'`;
                    }

                    if (req.query.page != undefined && req.query.size != undefined &&
                        req.query.sortBy != undefined && req.query.descending != undefined ){

                        let page = parseInt(req.query.page);
                        let size = parseInt(req.query.size);
                        let sort = req.query.sortBy;
                        let descending = req.query.descending=='false'?"ASC":"DESC" ;
                        let offset = (page ) * size;
                        let tot = me.database.db.prepare(`select count (*) as total from ${rel.table} ${findcondition}`).all();
                        let rowsNumber = tot[0]['total'];
                        respuesta.pagination.pages = ((rowsNumber - rowsNumber%size) / size )+1 ;
                        respuesta.pagination.rowsNumber = rowsNumber;
                        console.log("sel", `select ${f} from ${rel.table} ${findcondition} ORDER BY ${sort} ${descending} LIMIT ${offset},${size}`);
                        //respuesta.content = me.database.db.prepare(`select ${f} from ${group.name} ORDER BY ${sort} ${descending} LIMIT ${offset},${size}`).all();
                        respuesta.content = me.database.db.prepare(`select ${f} from ${rel.table} ${findcondition} ORDER BY ${sort} ${descending}  `).all();
                        me.appendSubquerys(respuesta.content,group.data[api.out]);

                        if (req.query.keyword != undefined){
                            if (req.query.keyword != ""){
                                let regx = new RegExp("^.*"+req.query.keyword.toLowerCase()+".*$");
                                respuesta.content = respuesta.content.filter( (e) => Object.keys(e).filter( f => { return me.searchInside(e[f],regx); } ).length>0 );
                                respuesta.pagination.rowsNumber = respuesta.content.length;
                            }
                        }
                        if (size > 0) respuesta.content = respuesta.content.slice(offset,offset+size);
                        
                    }else{
                        console.log("GET query", `select ${f} from ${rel.table} ${findcondition}` );
                        respuesta.content = me.database.db.prepare(`select ${f} from ${rel.table}  ${findcondition}`).all();
                        me.appendSubquerys(respuesta.content,group.data[api.out]);
                    }                        


                    me.contentACamelCase(respuesta);
                    res.end(JSON.stringify(respuesta));
                });
            }
            if (api.method == "POST" && api.type == "auto"){
                console.log(`route POST ${api.type} /${group.alias===undefined?group.name:group.alias}${api.route}`);
                router.post(`/${group.alias===undefined?group.name:group.alias}/${api.route}`, async function (req, res){
                    res.setHeader('Content-Type', 'application/json');
                    let respuesta = {content: [],
                        pagination: { pages : 0, rowsNumber: 0 }
                    };
                    let f = me.toFields(group.data[api.in]);
                    let v = me.toValues(group.data[api.in],me.contentASnakeCase(req.body));
                    console.log(`INSERT INTO  ${group.name} (${f}) values (${v})`);
                    let db_data = me.database.db.prepare(`INSERT INTO  ${group.name} (${f}) values (${v})`).run();                    
                    respuesta.content = req.body;
                    respuesta.content.id = db_data.lastInsertRowid;
                    me.contentACamelCase(respuesta);
                    res.end(JSON.stringify(respuesta));
                    //res.end(f);
                });
            }
            if (api.method == "POST" && api.type == "rel"){
                console.log(`route ${api.type} POST /${group.alias===undefined?group.name:group.alias}${api.route}`);
                router.post(`/${group.alias===undefined?group.name:group.alias}/${api.route}`, async function (req, res){
                    res.setHeader('Content-Type', 'application/json');
                    let respuesta = {content: [],
                        pagination: { pages : 0, rowsNumber: 0 }
                    };
                    group.data[api.in][rel.field] = "number";
                    req.body[rel.field] = req.params[rel.field];
                    let f = me.toFields(group.data[api.in]);
                    let v = me.toValues(group.data[api.in],me.contentASnakeCase(req.body));
                    console.log(`${api.type} INSERT INTO  ${rel.table} (${f}) values (${v})`);
                    me.database.db.prepare(`INSERT INTO  ${rel.table} (${f}) values (${v})`).run();
                    respuesta.content = req.body;
                    me.contentACamelCase(respuesta);
                    res.end(JSON.stringify(respuesta));
                    //res.end(f);
                });
            }
            if (api.method == "PUT" && api.type=="auto" ){
                console.log(`route PUT /${group.alias===undefined?group.name:group.alias}/${api.route}`);
                router.put(`/${group.alias===undefined?group.name:group.alias}/${api.route}`, async function (req, res){
                    res.setHeader('Content-Type', 'application/json');
                    let respuesta = {content: [],
                        pagination: { pages : 0, rowsNumber: 0 }
                    };
                    let f = me.toFields(group.data[api.in]);
                    let v = me.toValuesUpd(group.data[api.in],me.contentASnakeCase(req.body));
                    let id = req.params.id;
                    me.database.db.prepare(`UPDATE ${group.name} SET ${v} WHERE id = '${id}'`).run();
                    respuesta.content = req.body;
                    res.end(JSON.stringify(respuesta));
                });
            }
            if (api.method == "PUT" && api.type=="rel" ){
                console.log(`route PUT /${group.alias===undefined?group.name:group.alias}/${api.route}`);
                router.put(`/${group.alias===undefined?group.name:group.alias}/${api.route}`, async function (req, res){
                    res.setHeader('Content-Type', 'application/json');
                    let respuesta = {content: [],
                        pagination: { pages : 0, rowsNumber: 0 }
                    };
                    group.data[api.in][rel.field] = "number";
                    req.body[rel.field] = req.params[rel.field];
                    let f = me.toFields(group.data[api.in]);
                    let v = me.toValuesUpd(group.data[api.in],req.body);
                    let id = req.params.id;
                    me.database.db.prepare(`UPDATE ${rel.table} SET ${v} WHERE id = '${id}'`).run();
                    respuesta.content = req.body;
                    res.end(JSON.stringify(respuesta));
                });
            }
            if (api.method == "DELETE" && api.type=="auto" ){
                console.log(`route DELETE /${group.alias===undefined?group.name:group.alias}/${api.route}`);
                router.delete(`/${group.alias===undefined?group.name:group.alias}/${api.route}`, async function (req, res){
                    res.setHeader('Content-Type', 'application/json');
                    let respuesta = {content: [],
                        pagination: { pages : 0, rowsNumber: 0 }
                    };
                    let id = req.params.id;
                    me.database.db.prepare(`DELETE FROM ${group.name} WHERE id = '${id}'`).run();
                    respuesta.content = req.body;
                    res.end(JSON.stringify(respuesta));
                });
            }
            if (api.method == "DELETE" && api.type=="rel" ){
                console.log(`route DELETE /${group.alias===undefined?group.name:group.alias}/${api.route}`);
                router.delete(`/${group.alias===undefined?group.name:group.alias}/${api.route}`, async function (req, res){
                    res.setHeader('Content-Type', 'application/json');
                    let respuesta = {content: [],
                        pagination: { pages : 0, rowsNumber: 0 }
                    };
                    let id = req.params.id;
                    me.database.db.prepare(`DELETE FROM ${rel.table} WHERE id = '${id}'`).run();
                    respuesta.content = {message:"deleted"};
                    res.end(JSON.stringify(respuesta));
                });
            }
        });
    }
}

module.exports = {CtrlApi};