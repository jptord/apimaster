const { Database } = require('./core/database.js');
const { CtrlApi } = require('./core/ctrlapi.js');
const bodyParser = require('body-parser');
const express = require('express');
var fs = require('fs');
const vm = require('vm');
var cors = require('cors')
const app = express();
const path = require('path');

const database = new Database();
const ctrlApi = new CtrlApi();
database.iniciar();
//console.log("runSQL:",database.runSQL(`SELECT * FROM sharks `));
/*database.sql(`SELECT * FROM sharks`).then((data)=>{
    console.log("data",data);
    console.log("end");
});
*/
const port = 9988;
var public = path.join(__dirname, 'public');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); 
//app.use(express.multipart());
//app.use(express.bodyParser());
app.use('/', express.static(public));

app.post("/test", (req,res) => {
  console.log("req",req.body);
  res.end();
})

app.listen(port, () => { console.log(`Servidor iniciado en puerto ${port}`) });

var dbscript = "./dbscript/";
var dataPath = "./data/";
let db_array = [];



fs.readdirSync(dbscript).forEach(file => {
  console.log(file);
  const content = fs.readFileSync(`${dbscript}${file}`, 'utf8');
  // const obj = vm.runInNewContext(code + ';obj');
  //vm.runInNewContext(content );
  //let db_var= eval(content)[0];
  //let db_varx= eval(content);
  let db_array = eval(content);
  
  //db_array.push(db_var);
  console.log(db_array);

  db_array.forEach( (db_var) => {
    let ctrlapi = new CtrlApi(db_var);
    app.use(`/${ctrlapi.dbData.db}`, ctrlapi.publicar());
  } );
  


  //console.log("db_var-:",db_array[0] );
  //console.log("db_var.length:",db_varx[] );


  app.get("/db_all", (req,res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(db_array));
  })
  

  app.post("/save_all", (req,res) => {
    res.setHeader('Content-Type', 'application/json');

    let db_array = JSON.parse(req.body.content);

    fs.writeFileSync(`${dbscript}dbs.js`, JSON.stringify(db_array, null, 4), function(err) {
      if(err) {
        console.log(err);
      } else {
        console.log("JSON saved to " + `${dbscript}dbs.js`);
      }
    }); 

    res.end(JSON.stringify({mesage:'ok'}));
  })
  

  //console.log("content:",content); 
/*
  fs.writeFileSync(`${dbscript}dbs_array.js`, JSON.stringify(db_array, null, 4), function(err) {
    if(err) {
      console.log(err);
    } else {
      console.log("JSON saved to " + `${dbscript}dbs_array.js`);
    }
  }); */
});
