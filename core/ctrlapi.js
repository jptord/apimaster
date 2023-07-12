const express = require('express')
const router = express.Router()

const { Database } = require('../core/database.js');

var cors = require('cors')
var corsOptions = {
    origin: ["http://localhost","http://172.20.50.60"],
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

class CtrlApi{

    toColumnName(column, value){

        let values = value.split("|");
        let name = values[0];
        let pk = values.includes("pk");
        if (name == "number" && pk==true) return `${column} INTEGER PRIMARY KEY AUTOINCREMENT`;
        if (name == "number" ) return `${column} FLOAT`;
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

    appendSubquerys(content,data_fields){
        let me = this;
        let relations = this.toRelations(data_fields);
        console.log("relations",relations);
        relations.forEach(r => {
            let idArr = [];
            content.forEach(c => idArr.push(`'${c[r.ownfield]}'`));
            //console.log("idArr",idArr);
            let relGroup = me.dbData.groups.filter( g => g.name == r.table)[0];
            //console.log("relGroup,",relGroup);
            let f = me.toFields(relGroup.data['select']);          
            //console.log("relGroup.f ",f);
            let res_temp = me.database.db.prepare(`select ${f} from ${relGroup.name} where ${r.field} in (${idArr.join(',')}) `).all();
            //console.log("res_temp ",res_temp);
            content.forEach(cc => {                
                cc[r.name] = res_temp.filter(rt => rt[r.field] == cc[r.ownfield] );
                if (!r.array)
                    cc[r.name] = cc[r.name].length>0?cc[r.name][0]:null;
            });
            //respuesta.content = me.database.db.prepare(`select ${f} from ${group.name} ORDER BY ${sort} ${descending} LIMIT ${offset},${size}`).all();
        });
        return content;
    }

    constructor(dbData,dbData_global=null){
        this.dbData = dbData;
        this.dbData_global = dbData_global;

        if(this.dbData!==undefined){
            console.log("db_name",this.dbData.db);
            this.database = new Database(this.dbData.db);
            console.log("this.database.getTables: ",this.database.getTables());
            this.dbData.groups.forEach(group => {
                if (this.database.existTable(group.name)) return ;
                console.log("CtrlApi.group: creando");
                
                let dataCreate =  Object.keys(group.data.create);
                console.log("list table.columns", dataCreate);
                let fieldsArr = [];
                dataCreate.forEach(c => {
                    if (!c,group.data.create[c].includes('[[') && !c,group.data.create[c].includes('[') ) return;
                        fieldsArr.push(this.toColumnName(c,group.data.create[c]));
                });
                let fieldStr = fieldsArr.join(",");
                console.log("fieldStr:",fieldStr);
                console.log(`CREATE TABLE ${group.name} ( ${fieldStr} ); `);
                this.database.writeSQL(` CREATE TABLE ${group.name} ( ${fieldStr} ); `);
                this.database.writeSQL(` CREATE TABLE ${group.name} ( ${fieldStr} ); `);
            });
        }
        else{
            console.log("db_name",null);
        }
    }
    searchInside(e,regx){
        if (typeof e === 'object' )
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
            group.apis.forEach(api => {
                if (api.method == "GET"){
                    console.log(`route GET /${group.alias===undefined?group.name:group.alias}/${api.route}`);
                    router.get(`/${group.alias===undefined?group.name:group.alias}/${api.route}`, async function (req, res){
                        res.setHeader('Content-Type', 'application/json');
                        let respuesta = {content: [],
                            pagination: { pages : 0, rowsNumber: 0 }
                        };
                        let f = me.toFields(group.data[api.out]);                        

                        if (req.query.page != undefined && req.query.size != undefined &&
                            req.query.sortBy != undefined && req.query.descending != undefined ){
                            let page = parseInt(req.query.page);
                            let size = parseInt(req.query.size);
                            let sort = req.query.sortBy;
                            let descending = req.query.descending=='false'?"ASC":"DESC" ;
                            let offset = (page ) * size;
                            let tot = me.database.db.prepare(`select count (*) as total from ${group.name}`).all();
                            let rowsNumber = tot[0]['total'];
                            respuesta.pagination.pages = ((rowsNumber - rowsNumber%size) / size )+1 ;
                            respuesta.pagination.rowsNumber = rowsNumber;
                            console.log("sel", `select ${f} from ${group.name} ORDER BY ${sort} ${descending} LIMIT ${offset},${size}`);
                            //respuesta.content = me.database.db.prepare(`select ${f} from ${group.name} ORDER BY ${sort} ${descending} LIMIT ${offset},${size}`).all();                            
                            respuesta.content = me.database.db.prepare(`select ${f} from ${group.name} ORDER BY ${sort} ${descending}  `).all();
                            me.appendSubquerys(respuesta.content,group.data[api.out]);

                            if (req.query.keyword != undefined){
                                if (req.query.keyword != ""){
                                    let regx = new RegExp("^.*"+req.query.keyword.toLowerCase()+".*$");
                                    respuesta.content = respuesta.content.filter( (e) => Object.keys(e).filter( f => { return me.searchInside(e[f],regx); } ).length>0 );
                                    respuesta.pagination.rowsNumber = respuesta.content.length;
                                }
                            }

                            respuesta.content = respuesta.content.slice(offset,offset+size);

                            
                        }else{
                            respuesta.content = me.database.db.prepare(`select ${f} from ${group.name} `).all();
                            me.appendSubquerys(respuesta.content,group.data[api.out]);
                        }                        
    

                        res.end(JSON.stringify(respuesta));
                        //res.end(f);
                    });
                }
                if (api.method == "POST"){
                    console.log(`route POST /${group.alias===undefined?group.name:group.alias}${api.route}`);
                    router.post(`/${group.alias===undefined?group.name:group.alias}/${api.route}`, async function (req, res){
                        res.setHeader('Content-Type', 'application/json');
                        let respuesta = {content: [],
                            pagination: { pages : 0, rowsNumber: 0 }
                        };
                        let f = me.toFields(group.data[api.in]);
                        let v = me.toValues(group.data[api.in],req.body);
                        me.database.db.prepare(`INSERT INTO  ${group.name} (${f}) values (${v})`).run();
                        respuesta.content = req.body;
                        console.log("req.body:",req);
                        res.end(JSON.stringify(respuesta));
                        //res.end(f);
                    });
                }
                if (api.method == "PUT"){
                    console.log(`route PUT /${group.alias===undefined?group.name:group.alias}/${api.route}`);
                    router.put(`/${group.alias===undefined?group.name:group.alias}/${api.route}`, async function (req, res){
                        res.setHeader('Content-Type', 'application/json');
                        let respuesta = {content: [],
                            pagination: { pages : 0, rowsNumber: 0 }
                        };
                        let f = me.toFields(group.data[api.in]);
                        let v = me.toValuesUpd(group.data[api.in],req.body);
                        let id = req.params.id;
                        me.database.db.prepare(`UPDATE ${group.name} SET ${v} WHERE id = '${id}'`).run();
                        respuesta.content = req.body;
                        res.end(JSON.stringify(respuesta));
                    });
                }
                if (api.method == "DELETE"){
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
            });
        });
        /*router.all('/',cors(corsOptions),async function (req, res){
            //res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify( await wsClass.operations[k].respuesta(req,res)));
        })*/
        return router;
    }

}

module.exports = {CtrlApi};