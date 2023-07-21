const { Database } = require("./core/database.js");
const { CtrlApi } = require("./core/ctrlapi.js");
const bodyParser = require("body-parser");
const express = require("express");
var fs = require("fs");
const vm = require("vm");
var cors = require("cors");
const app = express();
const path = require("path");
const { exec } = require('child_process');


const JSZip = require ("jszip");

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
var public = path.join(__dirname, "public");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(express.multipart());
//app.use(express.bodyParser());
app.use("/", express.static(public));

app.post("/test", (req, res) => {
  console.log("req", req.body);
  res.end();
});

app.listen(port, () => {
  console.log(`Servidor iniciado en puerto ${port}`);
});

var dbscript = "./dbscript/";
var dataPath = "./data/";
let db_array = [];

fs.readdirSync(dbscript).forEach((file) => {
  console.log(file);
  const content = fs.readFileSync(`${dbscript}${file}`, "utf8");
  // const obj = vm.runInNewContext(code + ';obj');
  //vm.runInNewContext(content );
  //let db_var= eval(content)[0];
  //let db_varx= eval(content);
  let db_array = eval(content);

  //db_array.push(db_var);
  console.log(db_array);

  db_array.forEach((db_var) => {
    let ctrlapi = new CtrlApi(db_var, db_array);
    app.use(`/${ctrlapi.dbData.db}`, ctrlapi.publicar());
  });

  //console.log("db_var-:",db_array[0] );
  //console.log("db_var.length:",db_varx[] );

  app.get("/db_all", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(db_array));
  });

  app.post("/save_all", (req, res) => {
    res.setHeader("Content-Type", "application/json");

    let db_array = JSON.parse(req.body.content);

    fs.writeFileSync(
      `${dbscript}dbs.js`,
      JSON.stringify(db_array, null, 4),
      function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log("JSON saved to " + `${dbscript}dbs.js`);
        }
      }
    );
    createPlant(toPlants(db_array));
    res.end(JSON.stringify({ mesage: "ok" }));
  });

  app.get("/getfrontend", (req, res) => {
    if (req.query.framework == "angulartemplate") {
      res.setHeader("Content-Type", "application/json");
      const content = fs.readFileSync(`templates/angular.json`, "utf8");
      let template = eval(content)[0];
      res.end(JSON.stringify(template));
      return;
    }

    if (req.query.framework == "angularFilter") {
      res.setHeader("Content-Type", "application/json");
      const content = fs.readFileSync(`templates/angular.json`, "utf8");
      //let template = eval(content)[0];
      let template = eval(content)[0];
      let result = [];
      template.files.forEach((f) => {
        let contentFile = fs.readFileSync(
          `templates/${template.folder}/${f}`,
          "utf8"
        );
        Object.keys(template.params).forEach((p) => {
          contentFile = contentFile.replaceAll(`{${p}}`, template.params[p]);
        });
        result.push({ file: f, content: contentFile });
      });

      template.files = result;

      res.end(JSON.stringify(template));
      return;
    }

    if (req.query.framework == "angular") {
      res.setHeader("Content-Type", "application/json");
      const content = fs.readFileSync(`templates/angular.json`, "utf8");
      //let template = eval(content)[0];
      let template = eval(content)[0];
      let result = [];
      template.files.forEach((f) => {
        let contentFile = fs.readFileSync(
          `templates/${template.folder}/${f}`,
          "utf8"
        );
      
        result.push({ file: f, content: contentFile });
      });

      template.files = result;

      res.end(JSON.stringify(template));
      return;
    }
    res.end(JSON.stringify({ message: "framework no encontrado" }));
    return;

    //res.end(content);
  });

  app.post("/zipfront", (req, res) => {
    let content =  JSON.parse(req.body.data) ;
    
    const zip = new JSZip();
    content.files.forEach((f) => {
      console.log("content.file", f.file);
      zip.file(f.file, f.content);  
    });
    const fileName = 'public/descargas/'+`${content.folder}-${content.params.xnombrex}.zip`;
    zip.generateNodeStream({ type: 'nodebuffer', streamFiles: true })
    .pipe(fs.createWriteStream(fileName))
    .on('finish', function () {
        console.log(fileName+" written.");

      const options = {
        root: path.join(__dirname)
      };
      res.sendFile(fileName, options, function (err) {
        if (err) {
            next(err);
        } else {
            console.log('Sent:', fileName);
        }
      });
    });

  });

  app.post("/injectfront", (req, res) => {
    let content =  JSON.parse(req.body.data) ;
    let path = content.injection.path;
    let subpath = content.injection.subpath;
    content.files.forEach((f) => {
    let inj = esInyectable(f.file,content);
      if (inj==null){
        console.log("content.file to write", path + subpath +"/"+ f.file);
        ensureDirectoryExistence(path + subpath +"/"+ f.file);
        fs.writeFileSync(
          path + subpath +"/"+ f.file,
          f.content,
          function (err) {
            if (err) {
              console.log(err);
            } else {
              console.log(`file injected on `);
            }
          }
        );
      }else{

        let rewrite_content  = fs.readFileSync(path + "/" + inj.where , "utf8");
        console.log("rewrite_content.indexOf(f.content):",rewrite_content.indexOf(f.content));
        if (rewrite_content.indexOf(f.content)>0) return ; 
        //console.log(rewrite_content);
        let len = inj.before.length;
        let pos = rewrite_content.indexOf(inj.before);
        let strA =rewrite_content.substr(0,pos+len);
        let strB =rewrite_content.substr(pos+len,rewrite_content.length - (pos+len));
        //console.log("strA",strA);
        //console.log("strB",strB);

        rewrite_content = strA + "\n" + f.content + "\n" + strB;
        //console.log("rewrite_content",rewrite_content);


        fs.writeFileSync(path + "/" + inj.where, rewrite_content);

      }
      //zip.file(f.file, f.content);  
    });
    /*
    const fileName = 'public/descargas/'+`${content.folder}-${content.params.xnombrex}.zip`;
    zip.generateNodeStream({ type: 'nodebuffer', streamFiles: true })
    .pipe(fs.createWriteStream(fileName))
    .on('finish', function () {
        console.log(fileName+" written.");

      const options = {
        root: path.join(__dirname)
      };
      res.sendFile(fileName, options, function (err) {
        if (err) {
            next(err);
        } else {
            console.log('Sent:', fileName);
        }
      });
    });*/

  });
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

function ensureDirectoryExistence(filePath) {
  var dirname = path.dirname(filePath);
  if (fs.existsSync(dirname)) {
    return true;
  }
  ensureDirectoryExistence(dirname);
  fs.mkdirSync(dirname);
}
function esInyectable(fileName, data){
  return data.injection.files.find(f => f.file == fileName);
}

function esRelacion(campos,d){
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

function  toPlant2str(db){
  let testX = "";
  let clase = [];
  let relations = [];
  db.groups.forEach(group => {
      testX += `\tclass ${group.name}{\n`;
      data_create = group.data.select;
      let campos = [];
      
      data_create = group.data.select;
      Object.keys(data_create).forEach( d =>{
          let rel = esRelacion(data_create,d);
          if (rel == null )
              campos.push(`\t\t${data_create[d]} ${d}`);
          else
              relations.push({table:group.name, reltable:rel.name});
      });
      testX += campos.join("\n");
      testX += `\n\t}\n`; 
  });

  relations.forEach(r => {
      testX += `${r.table} *--- ${r.reltable}\n`;
  });

  return testX;
};

function  toPlants(dbs){
  let testX = "";
  let clase = [];
  dbs.forEach(db => {
      testX += `package ${db.db}{\n`;
      testX += toPlant2str(db);
      testX += `\n}\n`; 
  });
  return '@startuml\n'+testX+'\n@enduml';
};

function createPlant(content){

  console.log(`--creando diagrama `);
  fs.writeFileSync("..//diagrams/dbs.txt",content );
  //exec(`/home/jtordoya/.sdkman/candidates/java/current/bin/java -jar /home/jtordoya/plantuml.1.2023.7.jar "/home/jtordoya/dev/node/diagrams/dbs.txt"'`, 
  exec(`/home/jtordoya/.sdkman/candidates/java/current/bin/java -jar /home/jtordoya/plantuml.1.2023.7.jar /home/jtordoya/dev/node/diagrams/dbs.txt -o "/home/jtordoya/dev/node/apimaster/public/diagrams/"`, 
  (error, stdout, stderr) => {
    //exec(`ls -la`, (error, stdout, stderr) => {
    if (error) {
      console.error(`error: ${error.message}`);
      return;
    }
  
    if (stderr) {
      console.error(`stderr: ${stderr}`);
      return;
    }
  
    console.log(`stdout:\n${stdout}`);
  });
}

let ontask = false;

app.post("/toplant", function (req,res){
  console.log(`--creando diagrama `);
  if (ontask) 
    res.end(`{"message":"idle"}`);
  else{
    ontask=true;
    fs.writeFileSync("..//diagrams/temp.txt",req.body.content );
    //exec(`/home/jtordoya/.sdkman/candidates/java/current/bin/java -jar /home/jtordoya/plantuml.1.2023.7.jar "/home/jtordoya/dev/node/diagrams/dbs.txt"'`, 
    exec(`/home/jtordoya/.sdkman/candidates/java/current/bin/java -jar /home/jtordoya/plantuml.1.2023.7.jar /home/jtordoya/dev/node/diagrams/temp.txt -o "/home/jtordoya/dev/node/apimaster/public/diagrams/"`, 
    (error, stdout, stderr) => {
      ontask=false;
      if (error) {
        console.error(`error: ${error.message}`);
        res.end(`{"message":"${error.message}"}`);
        return;
      }
    
      if (stderr) {
        console.error(`stderr: ${stderr}`);
        res.end(`{"message":"${stderr}"}`);
        return;
      }
    
      res.end(`{"message":"ok"}`);

      console.log(`stdout:\n${stdout}`);
    });
  }
});