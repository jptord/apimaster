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
            strArr.push(c);
        });
        return strArr.join(",");
    }
    toValues(data,req){
        let strArr = [];
        Object.keys(data).forEach( c => {
            strArr.push("'"+req[c]+"'");
        });
        return strArr.join(",");
    }
    toValuesUpd(data,req){
        let strArr = [];
        Object.keys(data).forEach( c => {
            strArr.push(`${c} = '${req[c]}'`);
        });
        return strArr.join(",");
    }

    constructor(dbData){
        this.dbData = dbData;
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
                    fieldsArr.push(this.toColumnName(c,group.data.create[c]));
                });
                let fieldStr = fieldsArr.join(",");
                console.log("fieldStr:",fieldStr);
                this.database.writeSQL(` CREATE TABLE ${group.name} ( ${fieldStr} ); `);
            });
        }
        else{
            console.log("db_name",null);
        }
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
                    console.log(`route GET /${group.name}${api.route}`);
                    router.get(`/${group.name}/${api.route}`, async function (req, res){
                        res.setHeader('Content-Type', 'application/json');
                        let respuesta = {content: [],
                            pagination: { pages : 0, rowsNumber: 0 }
                        };
                        let f = me.toFields(group.data[api.out]);

                        if (req.query.page != undefined && req.query.size != undefined &&
                            req.query.sortBy != undefined && req.query.descending != undefined
                             ){
                            let page = parseInt(req.query.page);
                            let size = parseInt(req.query.size);
                            let sort = req.query.sortBy;
                            let descending = req.query.descending=='false'?"ASC":"DESC" ;
                            let offset = (page ) * size;
                            let tot = me.database.db.prepare(`select count (*) as total from ${group.name}`).all();
                            let rowsNumber = tot[0]['total'];
                            respuesta.pagination.pages = ((rowsNumber - rowsNumber%size) / size )+1 ;
                            respuesta.pagination.rowsNumber = rowsNumber;

                            respuesta.content = me.database.db.prepare(`select ${f} from ${group.name} ORDER BY ${sort} ${descending} LIMIT ${offset},${size}`).all();
                        }else
                            respuesta.content = me.database.db.prepare(`select ${f} from ${group.name} `).all();

                        res.end(JSON.stringify(respuesta));
                        //res.end(f);
                    });
                }
                if (api.method == "POST"){
                    console.log(`route POST /${group.name}${api.route}`);
                    router.post(`/${group.name}/${api.route}`, async function (req, res){
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
                    console.log(`route PUT /${group.name}/${api.route}`);
                    router.put(`/${group.name}/${api.route}`, async function (req, res){
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
                    console.log(`route DELETE /${group.name}/${api.route}`);
                    router.delete(`/${group.name}/${api.route}`, async function (req, res){
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