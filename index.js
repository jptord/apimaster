const { Database } = require("./core/database.js");
const { CtrlApi } = require("./core/ctrlapi.js");
const bodyParser = require("body-parser");
const express = require("express");
var fs = require("fs");
const vm = require("vm");
var cors = require("cors");
const app = express();
const path = require("path");

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
    //console.log("--content--");
    //console.log(content);

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


    /*
    const content = fs.readFileSync(`templates/angular.json`, "utf8");
    zip.file("angular.txt", content);
    zip.file("Textfile.txt", "Hello NodeJS\n");
    zip.generateNodeStream({ type: 'nodebuffer', streamFiles: true })
    .pipe(fs.createWriteStream('sample.zip'))
    .on('finish', function () {
        console.log("sample.zip written.");
    });
    const options = {
      root: path.join(__dirname)
    };

    res.sendFile("sample.zip", options, function (err) {
      if (err) {
          next(err);
      } else {
          console.log('Sent:', fileName);
      }
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
