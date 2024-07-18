//const sqlite3 = require('sqlite3').verbose();
const sqlite3 = require("better-sqlite3");

class Database{
    constructor(name_db='local'){
        this.db = new sqlite3(`databases/${name_db}.db`);
        //console.log("dbbbbbb");
        //this.db = new sqlite3(`../databases/${name_db}.db`);
    }

    getTables(){
        let rows = this.db.prepare("select name from sqlite_master where type='table'").all();
        return rows;
    }


    getFields(table){
        let fields = this.db.prepare(`PRAGMA table_info(${table});`).all();
        return fields;
    }

    compareTable(table){        
        let fields = this.db.prepare(`PRAGMA table_info(${table});`).all();
        return fields;
    }

    existTable(tableName){
        try{
            this.db.prepare(`SELECT * FROM ${tableName}`).all();
            return true;
        } catch(e){
            return false;
        }
        
        
    }

    getConnection(){
        return this.db;
    }
    iniciar(){
        console.log("iniciando");
    }
    writeSQL(sql){
        try{
            this.db.exec(sql);
            return 'database=ok';
        }catch(e){
            return '';
        }
    }
    runSQL(sql,param=[]){
        try{
            return this.db.run(sql,param);        
        }catch(e){
            return e;
        }  
    }
    sql(sql,param=[]){
       /* const r = new Promise((resolve,reject)=>{
            try{
                resolve(this.db.serialize(
                this.db.each(sql,(error, row) => {
                    if (error) {
                      throw new Error(error.message);
                    }
                    //console.log(row);
                  })));        
            }catch(e){
                return e;
            }  
        });
        return r;*/
        const r = new Promise((resolve,reject)=>{
        const me = this;
            this.db.serialize(function (){
                me.db.all(sql,(error, rows) => {
                    resolve(rows);
                });        
            });
        });
        return r;
    }
    
}

module.exports = {Database};