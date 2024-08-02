const express = require('express')
const util = require('util')
const http = require('http');
const URL = require('url');

var JSZip = require("jszip");

const fs = require('fs');
const decompress = require('decompress');

var uuids = {};
const { Database } = require('../core/database.js');
const { ApiDoc } = require('../core/apidoc.js');

var cors = require('cors');
//const { forEach } = require('jszip');
var corsOptions = {
    origin: ["http://localhost","http://172.20.50.60","http://172.20.50.60"],
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

function nanoUuid(){
	return (Math.round(Date.now())).toString(36);
}
class CtrlApi{

    toColumnName(column, value){
        let values = value.split("|");
        let name = value.trim();
        if (values.length>1)
            name = values[0].trim();
        let pk = values.includes("pk");
        if (name == "number" && pk==true) return `'${column}' INTEGER PRIMARY KEY AUTOINCREMENT`;
        if (name == "uuid" && pk==true) return `'${column}' UUID PRIMARY KEY`;
		if (name == "string" && pk==true) return `'${column}' STRING PRIMARY KEY`;
        if (name == "number" || name == "integer" ) return `'${column}' INTEGER`;
        if (name == "float" ) return `'${column}' FLOAT`;
        if (name == "double" ) return `'${column}' FLOAT`;
        if (name == "date" ) return `'${column}' DATE`;
        if (name == "time" ) return `'${column}' DATETIME`;
        if (name == "boolean" ) return `'${column}' BOOLEAN DEFAULT false NOT NULL`;
        if (name == "string" ) return `'${column}' TEXT`;
        if (name == "b64" ) return `'${column}' TEXT`;
        if (name == "b64zip" ) return `'${column}' TEXT`;
        if (name == "b64img" ) return `'${column}' TEXT`;
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
    //incluye relaciones y campos, solo para subquerys, como el out de api
    toFieldsAll(data){
        let strArr = [];
        Object.keys(data).forEach( c => {
                strArr.push(c);
        });
        return strArr.join(",");
    }
    
    toValues(data,req){
        let strArr = [];
        Object.keys(data).forEach( c => {
            if (!data[c].includes('[[') && !data[c].includes('[') ) 
                if (req[c]==null || req[c]=='null')
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
				if (req[c]==null || req[c]=='null')
					strArr.push(`${c} = null`);
				else
                	strArr.push(`${c} = '${req[c]}'`);
        });
        return strArr.join(",");
    }
    toRelations(data){
        let strArr = [];
        //console.log("data", data);
        Object.keys(data).forEach( c => {
            //evitar las subconsultas
            if (data[c].includes("[[")) {
                let subArr = data[c].replace("[[","").replace("]]","").trim().split("|");
                //console.log("data[c]",data[c]);
                strArr.push({name:c,table:subArr[0].trim(),field:subArr[1].trim(),ownfield:subArr[2].trim(),array:true});
                return;
            }
            if (data[c].includes("[")) {
                let subArr = data[c].replace("[","").replace("]","").trim().split("|");
                //console.log("data[c]",data[c]);
                strArr.push({name:c,table:subArr[0].trim(),field:subArr[1].trim(),ownfield:subArr[2].trim(),array:false});
                return;
            }
        });
        return strArr;
    }
    toRelation(name,str){
            //evitar las subconsultas
            console.log("name,str",name,str);
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
    getB64zip(data_fields){
        let fields = [];
        Object.keys(data_fields).forEach( k=> {
            if (data_fields[k] == 'b64zip')
                fields.push(k);
        });
        return fields;        
    }

    getB64img(data_fields){
        let fields = [];
        Object.keys(data_fields).forEach( k=> {
            if (data_fields[k] == 'b64img')
                fields.push(k);
        });
        return fields;
    }
    getApiLink(data_fields,group){
        let apilinks = [];
        let me = this;
        //console.log("getApiLink.data_fields:",data_fields);
		if (!group.hasOwnProperty("apilink")) return apilinks;
        group.apilink.forEach( (apilink)=>{
            let haveLink = false;
            apilink.filterin.split(",").forEach( f => {
                if ( Object.keys(data_fields).includes( f )!=null)
                    haveLink = true;           
            });
            if (  Object.keys(data_fields).includes( apilink.addfield )!=null)
                haveLink = true;
            if (haveLink){
                if ( me.dbData.apiconn[apilink.con]!=null)
                    apilink['url'] = me.dbData.apiconn[apilink.con].url;
                apilinks.push(apilink);
            }
        });
        return apilinks;
    }
	b64ToImage(id, b64){	
		try{
            
			let interal_path = `public/_images/${id}.jpg`;
			let external_path = `/_images/${id}.jpg`;
			if (!fs.existsSync(interal_path)) {
                if (b64 == "") return "";    
                let b64x = b64.replace(/^data:image\/png;base64,/,"");
                b64x = b64x.replace(/^data:image\/jpg;base64,/,"");
                b64x = b64x.replace(/^data:image\/jpeg;base64,/,"");                
                let buff = Buffer.from(b64x, 'base64');
				fs.writeFileSync(interal_path, buff);
                
			}
			return external_path;
		}
		catch {
			return "";
		}
		//resolve(path);
	}
	
	unzip(b64) {
		return new Promise((resolve, reject) => {
			const zip = JSZip();
			try{
				zip.loadAsync(b64, { base64: true }).then( (zipfile) => {
					Object.keys(zipfile.files).forEach( f => {
						resolve(zipfile.files[f].async("string"));
					});
				}, function (e) {
					resolve("");
				});
			}catch(e){
				resolve("");
			}
		});
	}
	transformTxt (txt){
		let lines = txt.split("\n");		
		return lines.map(l=>{
			let sp = l.split("\t");
			return {t:Number(sp[0]),lat:Number(sp[1]),lon:Number(sp[2]),bat:Number(sp[3]),acc:Number(sp[5])}
		});
	}

	getLinkDataTemp(row_content, apilink){
		return new Promise((resolve, reject) => {
			//let adr = 'http://192.168.100.7:9987/tre_personal/persons?code[equal]=P23RZ5';
            if (apilink.url == undefined)
                throw "getLinkData: apilink.url undefined";

            let adr = apilink.url;
			let address = URL.parse(adr, true);
			var options = {
				host: address.hostname,
				port: address.port,
				path: address.path,
                timeout: 100,
				};
		
				var req = http.get(options, function(res) {
					//console.log('STATUS: ' + res.statusCode);//console.log('HEADERS: ' + JSON.stringify(res.headers));
					var bodyChunks = [];
					res.on('data', function(chunk) {
						bodyChunks.push(chunk);
					}).on('end', function() {
						var body = Buffer.concat(bodyChunks);
						resolve(JSON.parse(body).content);
					})
				});
		
				req.on('error', function(e) {
					console.log('ERROR: ' + e.message);
					//row_content['link'] = 'ERROR ' + e.message;
					resolve(e.message);
				});
                req.on('timeout', () => {
                    req.destroy();
					resolve("timeout");
                });
		});		
	}
	getLinkData(row_content, apilink){
		return new Promise((resolve, reject) => {
			//let adr = 'http://192.168.100.7:9987/tre_personal/persons?code[equal]=P23RZ5';
            if (apilink.url == undefined)
                throw "getLinkData: apilink.url undefined";

            let adr = apilink.url;
			let address = URL.parse(adr, true);
            let path = address.path;

            let filter_api = apilink.filter.split(",");
            let filter_in = apilink.filterin.split(",");
            if (filter_api.length != filter_in.length) throw "getLinkData.filter fields are different";
            for (let ij = 0; ij <= filter_api.length; ij++ ){
                if (row_content.hasOwnProperty(filter_in[ij])){
                    path = path.replaceAll("$"+filter_api[ij],row_content[filter_in[ij]]);
                    //console.log(`replaceAll $`+filter_api[ij] + " with " + row_content[filter_in[ij]]);
                }
            }
            console.log("getLinkData.path",path, filter_api, row_content, apilink.type);
            
			var options = {
				host: address.hostname,
				port: address.port,
				path: path,
                timeout: 100,
				};
		
				var req = http.get(options, function(res) {					
					var bodyChunks = [];
					res.on('data', function(chunk) {
						bodyChunks.push(chunk);
					}).on('end', function() {
						let body = Buffer.concat(bodyChunks);
                        let json = JSON.parse(body);
                        if (json == null) throw "getLinkData: json is null";
                        let content_link = json.content;
                        if (content_link == null) throw "getLinkData: content_link is null";
                        if (content_link.length == 0) {
                            resolve(row_content);                            
                        }else{
                            let first_content = content_link[0];
                            if (apilink.type == "mix"){
                                Object.keys(first_content).forEach( (k) => {
                                    row_content[k] = first_content[k];
                                });
                            }
                            if (apilink.type == "add"){
                                let addField = apilink.addfield;
                                if (addField == null) throw "getLinkData: addField is null";
                                row_content[addField] = first_content;                                
                            }
                            if (apilink.type == "exc"){//exclude
                                //fields_content = Object.keys(row_content);
                                Object.keys(first_content).forEach( (k) => {
                                    if (row_content.hasOwnProperty(k))
                                        row_content[k] = first_content[k];
                                });                                
                            }
                            resolve(row_content);
                        }
					})
				});
		
				req.on('error', function(e) {
					console.log('ERROR: ' + e.message);
					//row_content['link'] = 'ERROR ' + e.message;
					resolve(row_content);
				});
                req.on('timeout', () => {
                    req.destroy();
					resolve(row_content);
                });
		});		
	}
	
    async appendSubquerys(content,data_fields,req,parent_data_name,query_parent,typerel, parent_group){
        //console.log("-----appendSubquerys.req:",req);    
        //console.log("--start---parent_data_name:",parent_data_name);    
        let me = this;
        
        let relations = this.toRelations(data_fields);
        const special_b64zip = this.getB64zip(data_fields);
        const special_b64img = this.getB64img(data_fields);
        const special_apilink = this.getApiLink(data_fields,parent_group);


        //console.log("appendSubquerys.data_fields",data_fields);
        //console.log("relations.length",relations.length);
		content = await Promise.all( content.map( r => {
			return new Promise( async (resolve,reject)=>{
				for (let i = 0; i < special_b64zip.length; i++){
					r[special_b64zip[i]] = await me.unzip(r[special_b64zip[i]]);
					r[special_b64zip[i]] = me.transformTxt(r[special_b64zip[i]]);
					r['coords'] = r[special_b64zip[i]].map(s=>[s.lon, s.lat]);
				}
				resolve(r);
			} );
		}));
		content = await Promise.all( content.map( r => {
			return new Promise( async (resolve,reject)=>{
				for (let i = 0; i < special_b64img.length; i++){
					//console.log("special_b64img[i]",special_b64img[i]);
					r['path'] = await me.b64ToImage(r.id, r[special_b64img[i]]);
					r[special_b64img[i]] = ''
					
				}
				resolve(r);
			} );
		}));
		
		content = await Promise.all( content.map( r => {
			return new Promise( async (resolve,reject)=>{
				for (let i = 0; i < special_apilink.length; i++){
                    r = await me.getLinkData(r,special_apilink[i]);                    
                }				
				resolve(r);
			});
		}));

      /*  content.forEach( c=>{
            special_b64zip.forEach( async sk =>{
                c[sk] = await this.unzip(c[sk]);
				//console.log( c[sk]);
            } );
        } );*/
		//relations.forEach(async r => {
			//console.log("typerel",typerel);
            if (typerel=="customrel")
				parent_data_name = "__no_chain__";
        for(let ij = 0; ij < relations.length; ij++){
			let r = relations[ij];
            let idArr = [];

           // console.log("---content:",content);
            //console.log("---r:",r);
            let findcondition = '';

            content.forEach(c => idArr.push(`'${c[r.ownfield]}'`));
            //console.log("idArr",idArr);
            let relGroup = me.dbData.groups.filter( g => g.name == r.table)[0];
            //console.log("relGroup,",relGroup,r.table);

            let chain_data = false;
            //console.log("r.table",r.table);
            //console.log("relGroup",relGroup);
            if ( relGroup.data.hasOwnProperty(parent_data_name)){
				chain_data=true;               
            }
            //console.log("is_chain_",chain_data, data_fields);
            //console.log("parent_data_name",parent_data_name);
            let f, fr;
            if (chain_data){
                f = me.toFields(relGroup.data[parent_data_name]);
                fr = relGroup.data[parent_data_name];
            }else{
                f = me.toFields(relGroup.data['select']);
                fr = relGroup.data['select'];
            }
             /*

            console.log("relGroup.f ",f);
            console.log("---fr:",fr);
            console.log("---r:",r);
            console.log("---req.query:",req.query);*/
            let req_query_rel = typeof req.query !='undefined' ? {query:req.query[r.name]}:{query:{}};
			
            //console.log("---r.name:",r.name);
            //console.log("---req_query_rel:",req_query_rel);
			let tableAlias = "r"+nanoUuid();
            findcondition = me.buildQueryApiFilter(findcondition,relGroup,f,req_query_rel.query);
			let findconditionAlias = me.buildQueryApiFilter('',relGroup,f,req_query_rel.query,tableAlias);

			//let tableAlias = "t"+nanoUuid();
			//let query_parent = `select ${tableAlias}.::parent_id:: from ${group.name} as ${tableAlias} ${findcondition} group by ${tableAlias}.::parent_id::`;
			let query_parent_build = query_parent.replaceAll("::parent_id::",r.ownfield);
            //console.log("findconditionAlias",findconditionAlias);
			let parent_rel_query = `select ${tableAlias}.::parent_id:: from ${relGroup.name} as ${tableAlias} where ${tableAlias}.${r.field} in (${query_parent_build}) ${findconditionAlias.replaceAll('WHERE',' AND ')} group by ${tableAlias}.::parent_id::`;
//			console.log ("parent_rel_query",parent_rel_query);
            let relQuery = `select ${f} from ${relGroup.name} where ${r.field} in (${query_parent_build}) ${findcondition.replaceAll('WHERE',' AND ')}`;

            //console.log("----relQuery: " , relQuery);
           // throw console.log("here");
			if(idArr.length == 0)
				return content;
				
            let res_temp = me.database.db.prepare(relQuery).all();
           // console.log("res_temp ",res_temp);
            //console.log("---content ",content);
            for (let i = 0; i< content.length; i++){  
                if (Object.keys(content[i]).length == 0 ) continue;
                let cc = content[i];
                cc[r.name] = res_temp.filter(rt => rt[r.field] == cc[r.ownfield] );
			/*	console.log("cc[r.name] r.name:",r.name);
				console.log("r.array ",r.array);		
				console.log("--f ",f);				
                console.log("--fr ",fr);		
                console.log("--chain_data ",chain_data);	
                console.log("--data_fields ",data_fields);		
                console.log("--req_query_rel ",req_query_rel);			
              */  
                let subcontent;
			    if (chain_data || req_query_rel.query != undefined ) 
                    subcontent = await me.appendSubquerys(cc[r.name],fr,req_query_rel,parent_data_name,parent_rel_query,typerel, relGroup);
				else
					subcontent = await me.appendSubquerys(cc[r.name],this.noFieldRel(fr),req_query_rel,parent_data_name,parent_rel_query,typerel, relGroup);
                cc[r.name] = subcontent;
                //console.log("subcontent:", subcontent);
                if (!r.array){
                    cc[r.name] = cc[r.name].length>0?cc[r.name][0]:undefined;                    
                }
                if ((subcontent.length ==0 ) && req_query_rel.query != undefined ){
                    //console.log("no valid req_query_rel",req_query_rel);
                    content[i] = {};                     
                }
            };
			//if (req_query_rel == undefined) return;                        

            //respuesta.content = me.database.db.prepare(`select ${f} from ${group.name} ORDER BY ${sort} ${descending} LIMIT ${offset},${size}`).all();
        }
        //for (let i = 0; i< content.length; i++){
        let tempContent = [...content];
        content.splice(0,content.length);
        tempContent.forEach(cc =>{
           if (Object.keys(cc).length > 0 ) 
               content.push(cc);
        });
		//console.log("--content.length",content.length);
        return content;
    }
    noFieldRel(fr){
		let noRelAr = {};
		Object.keys(fr).forEach( k => { if (!fr[k].includes("[")) noRelAr[k]=fr[k] });
		return noRelAr;
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
            console.log("groupParent.name=",groupParent.name);
            if (group.name != groupParent.name)
                group['foreignRelationsWeight'] += this.weightCalc(groupParent,gps)  ;
        });
        console.log("group.name:",group.name, " ", group['foreignRelationsWeight']);
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
						relations.push({field: `FOREIGN KEY (${rel.ownfield}) REFERENCES ${rel.name}(${rel.field}) ON DELETE CASCADE`,rel:rel});
				});
				group['foreignRelations'] = relations;
				group['foreignRelationsCount'] = relations.length;
				group['foreignRelationsWeight'] = relations.length;
			});
			//foreign weight Calc
/*
			this.dbData.groups = this.dbData.groups.sort( (a,b) => {
				if (a.foreignRelationsWeight > b.foreignRelationsWeight) return -1;
				else if (a.foreignRelationsWeight < b.foreignRelationsWeight) return 1;
				return 0;
			});
			this.dbData.groups.forEach(group => {
				let gps = this.dbData.groups;				
				group['foreignRelationsWeight'] += me.weightCalc(group,gps);
			});
           // throw console.log("end");           
			this.dbData.groups = this.dbData.groups.sort( (a,b) => {
				if (a.foreignRelationsWeight < b.foreignRelationsWeight) return -1;
				else if (a.foreignRelationsWeight > b.foreignRelationsWeight) return 1;
				return 0;
			});*/
      
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
                            let query_del =`DELETE FROM ${group.name}`;
                            console.log("query_del", query_del);
                            me.database.db.prepare(query_del).run();

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
           
			
		router.get(`/`, async function (req, res){
			res.setHeader('Content-Type', 'application/json');
			let respuesta = {"response":"ok"};
			res.end(JSON.stringify(respuesta));
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
    buildQueryApi(findcondition, api_query, req_query,table_alias=''){
		if (table_alias.length!='') table_alias=table_alias+".";
        //let regParam = /\:[a-zA-Z\_\-]+/g;
        //let getParamApi = api.route.match(regParam);
        if (api_query===undefined || req_query=="") return findcondition;
        if (req_query===undefined || req_query=="") return findcondition;
        let api_query_array = api_query.split(",");
        let where_array = []; 
        api_query_array.forEach( query => {
            if (req_query[query] !== undefined)
                where_array.push(`${table_alias}${query} = '${req_query[query]}'`);
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
    buildQueryApiFilter(findcondition, group, fields, req_query, table_alias=''){
		if (table_alias.length!='') table_alias=table_alias+".";
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
                                where_or_like.push(`(${table_alias}${query} like '%${v}%')`);
                            });                        
                        }else{
                            if (value_like!==undefined)
                                where_or_like.push(`(${table_alias}${query} like '%${value_like}%')`);
                        }
                        if (me.getTypeParam(value_equal)=='array'){
                            value_equal.forEach(v=>{
                                where_or_equal.push(`(${table_alias}${query} = '${v}')`);
                            });                        
                        }else{
                            if (value_equal!==undefined)
                                where_or_equal.push(`(${table_alias}${query} = '${value_equal}')`);
                        }
                        if (me.getTypeParam(value_betweeen)=='object'){
                            if (value_betweeen['from']!=undefined && value_betweeen['to']!=undefined ){
                                //strftime('%Y-%m-%d %H:%M:%S',datetime(create_date,'unixepoch','localtime'))
                                if (fieldInfo.value=='date')
									where_or_between.push(`(datetime(${table_alias}${query}/ 1000,'unixepoch','localtime') between '${value_betweeen['from']}' and '${value_betweeen['to']}')`);
                                    //where_or_between.push(`(strftime('%Y-%m-%d %H:%M:%S',datetime(${query}/ 1000,'unixepoch','localtime')) between '${value_betweeen['from']}' and '${value_betweeen['to']}')`);
                                else
                                    where_or_between.push(`(${table_alias}${query} between '${value_betweeen['from']}' and '${value_betweeen['to']}')`);
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
            console.log("api",api);

			/* GENERATE _IMAGES SOURCE */
			router.get(`/_images/:file`,function (req, res){
				if (fs.existsSync(`public/_images/${req.params.file}`)) {
					var fileStream = fs.createReadStream(`public/_images/${req.params.file}`);
					fileStream.on('open', function () {
						fileStream.pipe(res);
					});
				}
				else{
					res.write(`<html>IMAGE NOT FOUND</html>`);
					res.end();
				}
				
			});

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

                    //console.log("-query",req.query);
                    //console.log("-Object.keys(req.query)", Object.keys(req.query));
                    let filterCondition = '';
                    let conditionsSql = [];
                    let findcondition = '';
                    let findconditionAlias = '';
					let tableAlias = "t"+nanoUuid();

                    findcondition = me.buildQueryApiFilter(findcondition,group,f,req.query);

                    //console.log("getParamApi",getParamApi);
                    console.log("findcondition:", req.params[api.route.replace(":","")]);
                    if (req.params[api.route.replace(":","")] !== undefined && req.params[api.route.replace(":","")] != "" ){
                        findcondition = ` WHERE ${api.route.replace(":","")} = '${req.params[api.route.replace(":","")]}'`;                    
						findconditionAlias = ` WHERE ${tableAlias}.${api.route.replace(":","")} = '${req.params[api.route.replace(":","")]}'`;
					}

                        findcondition = me.buildQueryApi(findcondition, api.query, req.query);//` WHERE ${api.query.replace(":","")} = '${req.query[api.query]}'`;
						findconditionAlias = me.buildQueryApi(findconditionAlias, api.query, req.query, tableAlias);//` WHERE ${api.query.replace(":","")} = '${req.query[api.query]}'`;
                        
                        console.log("---- findcondition:", findcondition);
                        console.log("--req.query:",req.query );
                        //console.log("--api.query:",api.query );
                    if (req.query.page != undefined && req.query.size != undefined &&
                        req.query.sortBy != undefined && req.query.descending != undefined ){

                        let page = parseInt(req.query.page);
                        let size = parseInt(req.query.size);
                        let sort = me.convertirASnake(req.query.sortBy);
                        let descending = req.query.descending=='false'?"ASC":"DESC" ;
                        let offset = (page ) * size;
                        let tot = me.database.db.prepare(`select count (*) as total from ${group.name} ${findcondition}`).all();
                        let rowsNumber = tot[0]['total'];
                        respuesta.pagination.pages = ((rowsNumber - rowsNumber%size) / size ) ;
                        respuesta.pagination.rowsNumber = rowsNumber;                        
                        console.log("--sel--", `select ${f} from ${group.name} ${findcondition} ORDER BY ${sort} ${descending} LIMIT ${offset},${size}`);
                        //respuesta.content = me.database.db.prepare(`select ${f} from ${group.name} ORDER BY ${sort} ${descending} LIMIT ${offset},${size}`).all();                            
                        respuesta.content = me.database.db.prepare(`select ${f} from ${group.name} ${findcondition} ORDER BY ${sort} ${descending} `).all();
                        
						let query_parent = `select ${tableAlias}.::parent_id:: from ${group.name} as ${tableAlias} ${findconditionAlias} group by ${tableAlias}.::parent_id:: LIMIT ${offset},${size}`;
						
                        respuesta.content = await me.appendSubquerys(respuesta.content, group.data[api.out], req, api.route, query_parent,null, group);
                        
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
                        //throw console.log("herex");
                        console.log("GET query", `select ${f} from ${group.name} ${findcondition}` );
                        respuesta.content = me.database.db.prepare(`select ${f} from ${group.name} ${findcondition}`).all();
						let query_parent = `select ${tableAlias}.::parent_id:: from ${group.name} as ${tableAlias} ${findconditionAlias} group by ${tableAlias}.::parent_id::`;
						console.log(" ----- GET ALL -----");
                        let deep = req.query['deep'] != undefined ? req.query['deep']:0;
			

                        respuesta.content = await me.appendSubquerys(respuesta.content,group.data[api.out],req, api.route,query_parent,null, group);
						console.log(" ----- GET ALL END -----");
                    }
                    me.contentACamelCase(respuesta);
                    res.end(JSON.stringify(respuesta));
                });
            }
            if (api.method == "GET" && api.type == "rel"){
                console.log(`route ${api.type} GET /${group.alias===undefined?group.name:group.alias}/${api.route}`);
                router.get(`/${group.alias===undefined?group.name:group.alias}/${api.route}`, async function (req, res){

					let tableAlias = "t"+nanoUuid();
                    
                    res.setHeader('Content-Type', 'application/json');
                    let respuesta = {content: [],
                        pagination: { pages : 0, rowsNumber: 0 }
                    };
                    let f = me.toFields(group.data[api.out]);                        

                    let findcondition = '';
                    let findconditionAlias = '';

                    //console.log("findcondition:", req.params[api.route.replace(":","")]);
                    if (req.params[ rel.field ] !== undefined && req.params[ rel.field ] != "" ){
                        findcondition = ` WHERE ${rel.field} = '${req.params[ rel.field ]}'`;
                        findconditionAlias = ` WHERE ${tableAlias}.${rel.field} = '${req.params[ rel.field ]}'`;
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

                        let query_parent = `select ${tableAlias}.::parent_id:: from ${rel.table} as ${tableAlias} ${findconditionAlias} group by ${tableAlias}.::parent_id:: ORDER BY ${tableAlias}.${sort} ${descending} LIMIT ${offset},${size}`;

						let isCustomrel = group.apicustom.find(aaa=> aaa.type=="customrel" && aaa.out.includes(api.out));
						let typeApi = "";
						if (isCustomrel!=null) typeApi = "rel";
						else typeApi = "customrel";
                        
                        respuesta.content = me.database.db.prepare(`select ${f} from ${rel.table} ${findcondition} ORDER BY ${sort} ${descending}  `).all();
                        respuesta.content = await me.appendSubquerys(respuesta.content,group.data[api.out], api.out, query_parent, typeApi, group );


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
                        let customroute = group.apicustom.find( aa => aa.relroute==api.route );
                        console.log("customroute",customroute);
                        
                        let query_parent = `select ${tableAlias}.::parent_id:: from ${rel.table} as ${tableAlias} ${findconditionAlias} group by ${tableAlias}.::parent_id::`;
                        console.log("query_parent",query_parent);
                        console.log("api.out",api.out);

						let isCustomrel = group.apicustom.find(aaa=> aaa.type=="customrel" && aaa.out.includes(api.out));
						let typeApi = "";
						if (isCustomrel!=null) typeApi = "rel";
						else typeApi = "customrel";
						//console.log("isCustomrel",isCustomrel);

                        respuesta.content = me.database.db.prepare(`select ${f} from ${rel.table}  ${findcondition}`).all();
                        respuesta.content = await me.appendSubquerys(respuesta.content,group.data[api.out],req, api.out, query_parent, typeApi, group );
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
					let sqlUpdate = `UPDATE ${rel.table} SET ${v} WHERE id = '${id}'`;
					console.log("sqlUpdate: ", sqlUpdate);
                    me.database.db.prepare(sqlUpdate).run();
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
					let sqlDelete = `DELETE FROM ${rel.table} WHERE id = '${id}'`;
					console.log("sqlDelete",sqlDelete);
                    me.database.db.prepare(sqlDelete).run();
                    respuesta.content = {message:"deleted"};
                    res.end(JSON.stringify(respuesta));
                });
            }
        });
    }
}

module.exports = {CtrlApi};