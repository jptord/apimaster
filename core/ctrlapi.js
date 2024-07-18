const express = require('express')
const util = require('util')


var uuids = {};
const { Database } = require('../core/database.js');
const { ApiDoc } = require('../core/apidoc.js');

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

    appendSubquerys(content,data_fields,req){
        let me = this;
        let relations = this.toRelations(data_fields);
        console.log("relations",relations);
        relations.forEach(r => {
            let idArr = [];

            let findcondition = '';
            content.forEach(c => idArr.push(`'${c[r.ownfield]}'`));
            //console.log("idArr",idArr);
            let relGroup = me.dbData.groups.filter( g => g.name == r.table)[0];
            console.log("relGroup,",relGroup,r.table);
            let f = me.toFields(relGroup.data['select']);          
            //console.log("relGroup.f ",f);
            console.log("---r:",r);
            console.log("---req.query:",req.query);
            let req_query_rel = req.query[r.name];
			
            console.log("---req_query_rel:",req_query_rel);
            findcondition = me.buildQueryApiFilter(findcondition,relGroup,f,req_query_rel);
            let relQuery = `select ${f} from ${relGroup.name} where ${r.field} in (${idArr.join(',')}) ${findcondition.replaceAll('WHERE',' AND ')}`;
            console.log("----relQuery: " , relQuery);
            let res_temp = me.database.db.prepare(relQuery).all();
            console.log("res_temp ",res_temp);
            console.log("---content ",content);
            
            content.forEach(cc => {                
                cc[r.name] = res_temp.filter(rt => rt[r.field] == cc[r.ownfield] );
				console.log("cc[r.name] ",cc[r.name]);
				console.log("r.array ",r.array);				
                let subcontent = me.appendSubquerys(cc[r.name],f,req_query_rel);
                console.log("subcontent:", subcontent);
                if (subcontent == null  ){
                    content = undefined;
                    return;
                }
                if (!r.array){         
                    cc[r.name] = cc[r.name].length>0?cc[r.name][0]:undefined;
                    
                }
            });
			//if (req_query_rel == undefined) return;
            content.forEach(cc => {                
                if ( cc[r.name] ==  null && req_query_rel != undefined) {content.splice(content.indexOf(cc),1);};
            });
            

            //respuesta.content = me.database.db.prepare(`select ${f} from ${group.name} ORDER BY ${sort} ${descending} LIMIT ${offset},${size}`).all();
        });
        
        //let contentTemp = me.contentACamelCaseContent(content);
        //console.log("contentTemp",contentTemp);
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
	weightCalc = function(group, gps){
//		console.log("groups",groups);
			group['foreignRelations'].forEach(fr => {
			let groupParent = gps.find( g=> g.name== fr.rel.name);
			group['foreignRelationsWeight'] += this.weightCalc(groupParent,gps);
		});
		return group['foreignRelationsWeight'];
	}
    constructor(dbData,dbData_global=null){
        this.dbData = dbData;
        this.dbData_global = dbData_global;
        this.router = express.Router();
        let me = this;

        if(this.dbData!==undefined){
            console.log("db_name",this.dbData.db);
            console.log("groups", this.dbData.groups.length);
            this.database = new Database(this.dbData.db);

			/* ADD RELATIONS FOREIGN */	
			
			let testX = "";
			let clase = [];
			this.dbData.groups.forEach(group => {
				let relations = [];
				let data_create = group.data.select;
				let campos = [];
				data_create = group.data.select;
				Object.keys(data_create).forEach( d =>{
					let rel = me.esRelacion(data_create,d);
					if (rel == null )
						campos.push(`\t${data_create[d]} ${d}`);
					else if (rel.array==false)
						relations.push({field: `FOREIGN KEY (${rel.ownfield}) REFERENCES ${rel.name}(${rel.field})`,rel:rel});
				});
				group['foreignRelations'] = relations;
				group['foreignRelationsCount'] = relations.length;
				group['foreignRelationsWeight'] = relations.length;
				//console.log(group.name+"['foreignRelations']:" , group['foreignRelations']);
				//console.log(group.name+"['foreignRelationsCount']:" , group['foreignRelationsCount']);
				//testX += campos.join("\n");
				//testX += `\n}\n`; 
			});
			//foreign weight Calc
			this.dbData.groups = this.dbData.groups.sort( (a,b) => {
				if (a.foreignRelationsWeight > b.foreignRelationsWeight) return -1;
				else if (a.foreignRelationsWeight < b.foreignRelationsWeight) return 1;
				return 0;
			});
			this.dbData.groups.forEach(group => {
				console.log("group['foreignRelations']",group['foreignRelations']);
			});
			this.dbData.groups.forEach(group => {
				let gps = this.dbData.groups;				
				group['foreignRelationsWeight'] += me.weightCalc(group,gps);
			});
			
			this.dbData.groups = this.dbData.groups.sort( (a,b) => {
				if (a.foreignRelationsWeight < b.foreignRelationsWeight) return -1;
				else if (a.foreignRelationsWeight > b.foreignRelationsWeight) return 1;
				return 0;
			});
			this.dbData.groups.forEach(group => {
				console.log(group.name+"['foreignRelationsWeight']",group['foreignRelationsWeight']);
			});
			
			/*
			relations.forEach(r => {
				let tTest = `FOREIGN KEY (${r.ownfield}) REFERENCES ${r.reltable}(${r.field})`
				testX += `${tTest}\n`;
			});
			console.log("FOREIGN KEY GEN:" + testX);
			*/
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
					group.foreignRelations.map(f=>f.field).forEach(fr => {
						fieldsArr.push(fr);
					});
                    let fieldStr = fieldsArr.join(",");
                    console.log("fieldStr:",fieldStr);
                    console.log(`CREATE TABLE ${group.name} ( ${fieldStr} ); `);
                    this.database.writeSQL(` CREATE TABLE ${group.name} ( ${fieldStr}  ); `);

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
                            if (!fieldsArr.includes(c,group.data.create[c]))
                                fieldsArr.push(colInsert);
                        });
                        let fieldStr = fieldsArr.join(",");
                        console.log("fieldStr:",fieldStr);
                        console.log(`-CREATE TABLE ${group.name} ( ${fieldStr} ); `);
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
	
	esRelacion(campos,d){
		if (campos[d].includes("[[")){
			let val_clean = campos[d].replaceAll("[","").replaceAll("]","").split("|");
			return { name:val_clean[0].trim(),field:val_clean[1].trim(),ownfield:val_clean[2].trim(),array:true };;
		}
		if (campos[d].includes("[")){
			let val_clean = campos[d].replaceAll("[","").replaceAll("]","").split("|");
			return { name:val_clean[0].trim(),field:val_clean[1].trim(),ownfield:val_clean[2].trim(),array:false };;
		}
		return null;
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
        const router = this.router;
        router.all('/info',cors(corsOptions),async function (req, res){
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify( me.dbData ));
        })
        const db_actual = this.dbData;
        router.use('/api-docs', (req,res)=>{
            res.setHeader('Content-Type', 'application/json');
            let apiDoc = new ApiDoc('172.20.50.148','9988');
            let swaggerDocument = apiDoc.generarDoc(db_actual);
            //console.log(JSON.stringify( swaggerDocument ));
            //console.log(util.inspect(swaggerDocument, {showHidden: false, depth: null, colors: true}));
            //res.write(JSON.stringify( util.inspect(swaggerDocument, {showHidden: false, depth: null, colors: true}) ));
            res.write(JSON.stringify(swaggerDocument));
            res.end();
        });

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
    
    contentACamelCase(respuesta,pos='A'){	/// java o angular
		return respuesta;
        let me = this;        
        let camel_data = [];
        if (respuesta.content == null) return null;
        console.log("respuest-",respuesta,pos);
        if (Array.isArray(respuesta.content)){
            respuesta.content.forEach(data => {
                let data_fields = {};            
                Object.keys(data).forEach( f => {

                    //data_fields[me.convertirACamel(f)] = data[f];
                    console.log("data[f]",data[f]);
                    console.log("isObject", typeof data[f] === 'object');
                    console.log("isArray", Array.isArray(data[f]));
                    let isArray = Array.isArray(data[f]);
                    let isObject = typeof data[f] === 'object';
                    let isNull = data[f] === null;
                    if ( !isNull && isObject && !isArray)
                        data_fields[me.convertirACamel(f)] = me.contentACamelCase({"content" :data[f]},'OBJ');
                    else if ( !isNull && isArray )
                        data_fields[me.convertirACamel(f)] = me.contentACamelCase({"content" :data[f]},'ARR');
                    else
                        data_fields[me.convertirACamel(f)] = data[f];
                });
                camel_data.push(data_fields);                
            })
        }else{                
                let data_fields = {};            
                Object.keys(respuesta.content).forEach( f => {
                    let isArray = Array.isArray(respuesta.content[f]);
                    let isObject = typeof respuesta.content[f] === 'object';
                    let isNull = respuesta.content[f] === null;
                    if ( !isNull && isObject )
                        data_fields[me.convertirACamel(f)] = me.contentACamelCase({"content" :respuesta.content[f]},'OBJ');
                    else if ( !isNull && isArray )
                        data_fields[me.convertirACamel(f)] = me.contentACamelCase({"content" :respuesta.content[f]},'ARR');
                    else
                        data_fields[me.convertirACamel(f)] = respuesta.content[f];
                });
                camel_data.push(data_fields);
        }
        
        respuesta.content = camel_data;
        if (pos == "OBJ")
            if ( camel_data.length > 0 )
                return camel_data [0];
        return camel_data;
    }
    contentACamelCaseContent(content){
        let me = this;        
        let camel_data = [];
        
        if (Array.isArray(content)){
            content.forEach(data => {
                let data_fields = {};            
                Object.keys(data).forEach( f => {
                    data_fields[me.convertirACamel(f)] = data[f];
                });
                camel_data.push(data_fields);
                
            })
        }else{
                 
                let data_fields = {};            
                Object.keys(content).forEach( f => {
                    data_fields[me.convertirACamel(f)] = content[f];
                });
                camel_data.push(data_fields);
        }
        
        content = camel_data;
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
    buildQueryApi(findcondition, api_query, req_query){
        //let regParam = /\:[a-zA-Z\_\-]+/g;
        //let getParamApi = api.route.match(regParam);
        if (api_query===undefined || req_query=="") return findcondition;
        if (req_query===undefined || req_query=="") return findcondition;
        let api_query_array = api_query.split(",");
        let where_array = []; 
        api_query_array.forEach( query => {
            if (req_query[query] !== undefined)
                where_array.push(`${query} = '${req_query[query]}'`);
        });
        let sql_conditions = where_array.join(" AND ");
        console.log("sql_conditions", sql_conditions);
        console.log("buildQueryApi.findcondition", findcondition);
		if (sql_conditions == "") return `${findcondition} ${sql_conditions}`;
        if (findcondition.includes("WHERE"))
            return `${findcondition} ${sql_conditions}`;
        else
            return `WHERE ${findcondition} ${sql_conditions}`;
    }
    buildQueryApiFilter(findcondition, group, fields, req_query){
        if (req_query == null) return  findcondition;
        var me = this;        
        let fields_array = fields.split(",");;
        let sql_conditions = '';
        let where_and_conditions = [];
        Object.keys(req_query).forEach( (fieldQuery) => {
            
            let fieldFilter = req_query[fieldQuery];
            console.log('buildQueryApiFilter.fields_array:',fields_array);
            console.log('buildQueryApiFilter.fieldQuery:',fieldQuery);
            
            console.log('buildQueryApiFilter.fieldFilter:',fieldFilter);
            

            fields_array.forEach( query => {            
                let where_or_like = []; 
                let where_or_equal = []; 
                let where_or_between = []; 
                let where_or_like_sql = ''; 
                let where_or_equal_sql = ''; 
                let where_or_between_sql = ''; 
                    if (fieldQuery == query){
                        let fieldInfo = group['fields'].find(f=>f.name==fieldQuery);
                        console.log('------fieldInfo : ',fieldInfo );

                        console.log('------query:',query);
                        let value_like = fieldFilter['like'];
                        let value_equal = fieldFilter['equal'];
                        let value_betweeen = fieldFilter['between'];
                        console.log('------value_like:',value_like);
                        console.log('------value_equal:',value_equal);
                        console.log('------value_betweeen:',value_betweeen);
                        console.log('------value_like.type:',me.getTypeParam(value_like));
                        console.log('------value_equal.type:',me.getTypeParam(value_equal));
                        console.log('------value_betweeen.type:',me.getTypeParam(value_betweeen));
                        if (me.getTypeParam(value_like)=='array'){
                            value_like.forEach(v=>{
                                where_or_like.push(`(${query} like '%${v}%')`);
                            });                        
                        }else{
                            if (value_like!==undefined)
                                where_or_like.push(`(${query} like '%${value_like}%')`);
                        }
                        if (me.getTypeParam(value_equal)=='array'){
                            value_equal.forEach(v=>{
                                where_or_equal.push(`(${query} = '${v}')`);
                            });                        
                        }else{
                            if (value_equal!==undefined)
                                where_or_equal.push(`(${query} = '${value_equal}')`);
                        }
                        if (me.getTypeParam(value_betweeen)=='object'){
                            if (value_betweeen['from']!=undefined && value_betweeen['to']!=undefined ){
                                //strftime('%Y-%m-%d %H:%M:%S',datetime(create_date,'unixepoch','localtime'))
                                if (fieldInfo.value=='date')
                                    where_or_between.push(`(strftime('%Y-%m-%d %H:%M:%S',datetime(${query},'unixepoch','localtime')) between '${value_betweeen['from']}' and '${value_betweeen['to']}')`);
                                else
                                    where_or_between.push(`(${query} between '${value_betweeen['from']}' and '${value_betweeen['to']}')`);
                            };
                        }else{
                        }
                    }
                    
                where_or_like_sql = where_or_like.join(" OR ");
            //    console.log("where_or_like_sql", where_or_like_sql);
                where_or_equal_sql = where_or_equal.join(" OR ");
            //    console.log("where_or_equal_sql", where_or_equal_sql);
                where_or_between_sql = where_or_between.join(" OR ");
            //    console.log("where_or_between_sql", where_or_between_sql);
                if (where_or_like.length>0) where_and_conditions.push(`(${where_or_like_sql})`);
                if (where_or_equal.length>0) where_and_conditions.push(`(${where_or_equal_sql})`);
                if (where_or_between.length>0) where_and_conditions.push(`(${where_or_between_sql})`);
            });
        });
        //console.log("buildQueryApi.findcondition", findcondition);
        sql_conditions = where_and_conditions.join(' AND ');
        console.log("where_and_conditions : ", where_and_conditions.join(' AND '));
		if (sql_conditions == "") return `${findcondition} `;
        if (findcondition.includes("WHERE"))
            return `${findcondition} ${sql_conditions}`;
        else
            return `WHERE ${findcondition} ${sql_conditions}`;
    }
    getTypeParam(queryParam){
        if (((typeof queryParam == 'string')?queryParam == '' :false)) return 'empty';
        if (Array.isArray(queryParam) ) return 'array';
        if ( ((typeof queryParam === 'object' ) && !Array.isArray(queryParam)) ) return 'object';
        if ( ((typeof queryParam === 'object') || Array.isArray(queryParam))?false:!isNaN(queryParam) ) return 'number';
        if ( ((isNaN(queryParam)) && !isNaN( Date.parse(queryParam)) ) ) return 'date';
        if ( (((typeof queryParam === 'object') || Array.isArray(queryParam))?false:isNaN(queryParam) ) ) return 'string';
        return undefined;
    }

    autoApiGen(group){
        var me = this;        
        const router = this.router;

        group.apis.forEach(api => {
            let rel;
            if (api.type == "rel") rel = me.toRelation('',api.rel);
            if (api.method == "GET" && (api.type == "auto" || api.type == "custom" )){
                console.log(`route ${api.type} GET /${group.alias===undefined?group.name:group.alias}/${api.route}`);
                router.get(`/${group.alias===undefined?group.name:group.alias}/${api.route}`, async function (req, res){
                    console.log(`-route ${api.type} `);
                    console.log("-route:",`/${group.alias===undefined?group.name:group.alias}/${api.route}`);
                    res.setHeader('Content-Type', 'application/json');
                    let respuesta = {content: [],
                        pagination: { pages : 0, rowsNumber: 0 }
                    };
                    let f = me.toFields(group.data[api.out]);

                    console.log("-query",req.query);
                    console.log("-Object.keys(req.query)", Object.keys(req.query));
                    let filterCondition = '';
                    let conditionsSql = [];
                    let findcondition = '';

                    findcondition = me.buildQueryApiFilter(findcondition,group,f,req.query);

                    //console.log("getParamApi",getParamApi);
                    console.log("findcondition:", req.params[api.route.replace(":","")]);
                    if (req.params[api.route.replace(":","")] !== undefined && req.params[api.route.replace(":","")] != "" )
                        findcondition = ` WHERE ${api.route.replace(":","")} = '${req.params[api.route.replace(":","")]}'`;                    
                        

                        findcondition = me.buildQueryApi(findcondition, api.query, req.query);//` WHERE ${api.query.replace(":","")} = '${req.query[api.query]}'`;
                        
                        console.log("---- findcondition:", findcondition);
                        console.log("--req.query:",req.query );
                        console.log("--api.query:",api.query );
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
                        me.appendSubquerys(respuesta.content,group.data[api.out],req);

                        if (req.query.keyword != undefined){
                            if (req.query.keyword != ""){
                                let regx = new RegExp("^.*"+req.query.keyword.toLowerCase()+".*$");
                                respuesta.content = respuesta.content.filter( (e) => Object.keys(e).filter( f => { return me.searchInside(e[f],regx); } ).length>0 );
                                respuesta.pagination.rowsNumber = respuesta.content.length;
                            }
                        }
                        if (size > 0) respuesta.content = respuesta.content.slice(offset,offset+size);
                        console.log(" ----- NOT HERE -----");
                    }else{
                        console.log("GET query", `select ${f} from ${group.name} ${findcondition}` );
                        respuesta.content = me.database.db.prepare(`select ${f} from ${group.name}  ${findcondition}`).all();
						console.log(" ----- HERE -----");
                        me.appendSubquerys(respuesta.content,group.data[api.out],req);
						console.log(" ----- HERE -----",respuesta.content);
                    }
                    me.contentACamelCase(respuesta);
                    res.end(JSON.stringify(respuesta));
                });
            }
            if (api.method == "GET" && api.type == "rel"){
                console.log(`route ${api.type} GET /${group.alias===undefined?group.name:group.alias}/${api.route}`);
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
                        me.appendSubquerys(respuesta.content,group.data[api.out],req);
                    }                        


                    me.contentACamelCase(respuesta);
                    res.end(JSON.stringify(respuesta));
                });
            }
            if (api.method == "POST" && (api.type == "auto" || api.type == "custom" )){
                console.log(`route ${api.type} POST /${group.alias===undefined?group.name:group.alias}${api.route}`);
                router.post(`/${group.alias===undefined?group.name:group.alias}/${api.route}`, async function (req, res){
                    res.setHeader('Content-Type', 'application/json');
                    let respuesta = {content: [],
                        pagination: { pages : 0, rowsNumber: 0 }
                    };
                    let f = me.toFields(group.data[api.in]);
					console.log("req",req);
					console.log("req.body",req.body);
					console.log("me.contentASnakeCase(req.body):",me.contentASnakeCase(req.body));
					let v;
					if (Object.keys(req.body).length === 0)
						v = me.toValues(group.data[api.in],me.contentASnakeCase(req.query));
					else
                    	v = me.toValues(group.data[api.in],me.contentASnakeCase(req.body));
					
					let idIndex ="";
					try{
						console.log(`INSERT INTO  ${group.name} (${f}) values (${v})`);					
						let db_data = me.database.db.prepare(`INSERT INTO  ${group.name} (${f}) values (${v})`).run();                    
						respuesta.content = req.body;
						respuesta.content.id = db_data.lastInsertRowid;
						//let rs = me.database.db.executeQuery("SELECT last_insert_rowid() as id;");					
						let resultLast = me.database.db.prepare("SELECT last_insert_rowid() as id;").all();
						idIndex = resultLast[0]['id'];
					}catch(e){						
						console.log("ctrlapi.post.catch ",e);
						respuesta.content = req.body ;
						respuesta.content['id'] = -1;
						me.contentACamelCase(respuesta);
						res.end(JSON.stringify(respuesta));
						return;
					}
					//rs1 = me.database.db.executeQuery(`SELECT id FROM ${group.name} WHERE ROWID = ${idIndex}"`);
					console.log("autoApiGen.POST:" + `SELECT id FROM ${group.name} WHERE ROWID = ${idIndex}`);
					let resultLastId = me.database.db.prepare(`SELECT id FROM ${group.name} WHERE ROWID = ${idIndex}`).all();
					let iduuid = resultLastId[0]['id'];
					respuesta.content.id = iduuid ;
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
                console.log(`route ${api.type} PUT /${group.alias===undefined?group.name:group.alias}/${api.route}`);
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
                console.log(`route ${api.type} PUT /${group.alias===undefined?group.name:group.alias}/${api.route}`);
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
                console.log(`route ${api.type} DELETE /${group.alias===undefined?group.name:group.alias}/${api.route}`);
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
                console.log(`route ${api.type} DELETE /${group.alias===undefined?group.name:group.alias}/${api.route}`);
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