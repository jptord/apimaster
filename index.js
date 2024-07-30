const { Database } = require("./core/database.js");
const { CtrlApi } = require("./core/ctrlapi.js");
const { ApiDoc } = require("./core/apidoc.js");
const { ImporterPG } = require("./core/importer.js");
const bodyParser = require("body-parser");
const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
var fs = require("fs");
const vm = require("vm");
var cors = require("cors");
const app = express();
const path = require("path");
const { exec } = require("child_process");
const JSZip = require("jszip");

const database = new Database();
const ctrlApi = new CtrlApi();
database.iniciar();
const port = 9986;
var public = path.join(__dirname, "public");

app.use(cors());
//app.use(express.bodyParser({limit: '50mb'}))
//app.use(bodyParser.json());
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb" }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
//app.use(bodyParser.urlencoded({ extended: true,parameterLimit: 100000, dlimit: '50mb' }));
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
  let db_array = eval(content);

  console.log(db_array);

  let apiDoc = new ApiDoc("192.168.100.7", "9986");
  //let apiDoc = new ApiDoc('172.20.50.67','9988');

  db_array.forEach((db_var) => {
    let ctrlapi = new CtrlApi(db_var, db_array);
    console.log(`use /${ctrlapi.dbData.db}/`);

    app.use(express.json({ limit: "25mb" }));
    app.use(express.urlencoded({ limit: "25mb" }));
    app.use(bodyParser.json({ limit: "50mb" }));
    app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
    app.use(`/${ctrlapi.dbData.db}`, ctrlapi.publicar());
    const swaggerDocument = apiDoc.generarDoc(db_var);
    var options = { explorer: true };
    //console.log("swagger-ui",db_var.db+'/swagger-ui');
    app.use(
      `/${db_var.db}/swagger-ui`,
      swaggerUi.serveFiles(swaggerDocument, options),
      swaggerUi.setup(swaggerDocument)
    );


    
    //app.use(`/${db_var.db}/swagger-ui`, swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    //app.use('/swagger-ui', swaggerUi.serve);
    //app.get(`/swagger-ui/${db_var.db}`, swaggerUi.setup(swaggerDocument));
    //app.use(`/swagger-ui/${db_var.db}`, swaggerUi.serve);
    //app.get(`/swagger-ui/${db_var.db}`, swaggerUi.serveFiles(swaggerDocument), swaggerUi.setup(swaggerDocument) );
  });
  /*fs.writeFileSync(
    `${dbscript}dbs.js`,
    JSON.stringify(db_array, null, 4),
    function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log("JSON saved to " + `${dbscript}dbs.js`);
      }
    }
  );*/


  app.get("/db_all", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(db_array));
  });

  app.get("/import_pg", (req, res) => {
    let importerpg = new ImporterPG(db_array, req, res);
    let result = importerpg.start();
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify("ok"));
  });

  app.get("/postman", (req, res) => {    
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify("ok"));
  });

  app.post("/save_all", (req, res) => {
    res.setHeader("Content-Type", "application/json");

    let db_array_content = JSON.parse(req.body.content);

    fs.writeFileSync(
      `${dbscript}dbs.js`,
      JSON.stringify(db_array_content, null, 4),
      function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log("JSON saved to " + `${dbscript}dbs.js`);
        }
      }
    );
    db_array = db_array_content;
    //createPlant(toPlants(db_array_content));
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
    if (req.query.framework == "spring") {
      res.setHeader("Content-Type", "application/json");
      const content = fs.readFileSync(`templates/spring.json`, "utf8");
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
  });

  app.post("/zipfront", (req, res) => {
    let content = JSON.parse(req.body.data);

    const zip = new JSZip();
    content.files.forEach((f) => {
      console.log("content.file", f.file);
      zip.file(f.file, f.content);
    });
    const fileName =
      "public/descargas/" + `${content.folder}-${content.params.xnombrex}.zip`;
    zip
      .generateNodeStream({ type: "nodebuffer", streamFiles: true })
      .pipe(fs.createWriteStream(fileName))
      .on("finish", function () {
        console.log(fileName + " written.");

        const options = {
          root: path.join(__dirname),
        };
        res.sendFile(fileName, options, function (err) {
          if (err) {
            next(err);
          } else {
            console.log("Sent:", fileName);
          }
        });
      });
  });

  app.post("/injectfront", (req, res) => {
    console.log("POST injectfront");
    let content = JSON.parse(req.body.data);
    let path = content.injection.path;
    let subpath = content.injection.subpath;
    content.files.forEach((f) => {
      let inj = esInyectable(f.file, content);
      if (inj == null) {
        console.log("content.file to write", path + subpath + "/" + f.file);
        ensureDirectoryExistence(path + subpath + "/" + f.file);
        fs.writeFileSync(
          path + subpath + "/" + f.file,
          f.content,
          function (err) {
            if (err) console.log("ERRO", err);
            else console.log(`file injected on `);
          }
        );
      } else {
        let rewrite_content = fs.readFileSync(path + "/" + inj.where, "utf8");
        console.log(
          "rewrite_content.indexOf(f.content):",
          rewrite_content.indexOf(f.content)
        );
        if (rewrite_content.indexOf(f.content) > 0) return;
        let len = inj.before.length;
        let pos = rewrite_content.indexOf(inj.before);
        let strA = rewrite_content.substr(0, pos + len);
        let strB = rewrite_content.substr(
          pos + len,
          rewrite_content.length - (pos + len)
        );
        rewrite_content = strA + "\n" + f.content + "\n" + strB;
        fs.writeFileSync(path + "/" + inj.where, rewrite_content);
      }
    });
  });

  app.post("/injectspring", (req, res) => {
    console.log("POST injectspring");
    let content = JSON.parse(req.body.data);
    let path = content.injection.path;
    let subpath = content.injection.subpath;
    content.files.forEach((f) => {
      let inj = esInyectable(f.file, content);
      if (inj == null) {
        console.log("content.file to write", path + subpath + "/" + f.file);
        ensureDirectoryExistence(path + subpath + "/" + f.file);
        fs.writeFileSync(
          path + subpath + "/" + f.file,
          f.content,
          function (err) {
            if (err) console.log("ERRO", err);
            else console.log(`file injected on `);
          }
        );
      } else {
        if (inj.replace == "true")
          fs.writeFileSync(path + "/" + inj.where, f.content);
        else {
          let rewrite_content = fs.readFileSync(path + "/" + inj.where, "utf8");
          if (rewrite_content.indexOf(f.content) > 0) return;
          let len = inj.before.length;
          let pos = rewrite_content.indexOf(inj.before);
          let strA = rewrite_content.substr(0, pos);
          let strB = rewrite_content.substr(pos, rewrite_content.length - pos);
          rewrite_content = strA + "\n" + f.content + "\n" + strB;
          fs.writeFileSync(path + "/" + inj.where, rewrite_content);
        }
      }
    });
  });
});

function ensureDirectoryExistence(filePath) {
  var dirname = path.dirname(filePath);
  if (fs.existsSync(dirname)) {
    return true;
  }
  ensureDirectoryExistence(dirname);
  fs.mkdirSync(dirname);
}
function esInyectable(fileName, data) {
  return data.injection.files.find((f) => f.file == fileName);
}

function esRelacion(campos, d) {
  if (campos[d].includes("[[")) {
    let val_clean = campos[d]
      .replaceAll("[", "")
      .replaceAll("]", "")
      .split("|");
    return {
      name: val_clean[0].trim(),
      field: val_clean[1].trim(),
      ownfield: val_clean[2].trim(),
      array: true,
    };
  }
  if (campos[d].includes("[")) {
    let val_clean = campos[d]
      .replaceAll("[", "")
      .replaceAll("]", "")
      .split("|");
    return {
      name: val_clean[0].trim(),
      field: val_clean[1].trim(),
      ownfield: val_clean[2].trim(),
      array: false,
    };
  }

  return null;
}

function toPlant2str(db) {
  let testX = "";
  let clase = [];
  let relations = [];
  db.groups.forEach((group) => {
    testX += `\tclass ${group.name}{\n`;
    data_create = group.data.select;
    let campos = [];

    data_create = group.data.select;
    Object.keys(data_create).forEach((d) => {
      let rel = esRelacion(data_create, d);
      if (rel == null) campos.push(`\t\t${data_create[d]} ${d}`);
      else relations.push({ table: group.name, reltable: rel.name });
    });
    testX += campos.join("\n");
    testX += `\n\t}\n`;
  });

  relations.forEach((r) => {
    testX += `${r.table} *--- ${r.reltable}\n`;
  });

  return testX;
}

function toPlants(dbs) {
  let testX = "";
  let clase = [];
  dbs.forEach((db) => {
    testX += `package ${db.db}{\n`;
    testX += toPlant2str(db);
    testX += `\n}\n`;
  });
  return "@startuml\n" + testX + "\n@enduml";
}

function createPlant(content) {
  console.log(`--creando diagrama `);
  fs.writeFileSync("..//diagrams/dbs.txt", content);
  //exec(`/home/jtordoya/.sdkman/candidates/java/current/bin/java -jar /home/jtordoya/plantuml.1.2023.7.jar "/home/jtordoya/dev/node/diagrams/dbs.txt"'`,
  exec(
    `/home/jtordoya/.sdkman/candidates/java/current/bin/java -jar /home/jtordoya/plantuml.1.2023.7.jar /home/jtordoya/dev/node/diagrams/dbs.txt -o "/home/jtordoya/dev/node/apimaster/public/diagrams/"`,
    //exec(`java -jar ../../plantuml.1.2023.7.jar ../diagrams/dbs.txt -o "./public/diagrams/"`,
    (error, stdout, stderr) => {
      if (error) {
        console.error(`error: ${error.message}`);
        return;
      }

      if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
      }

      console.log(`stdout:\n${stdout}`);
    }
  );
}

let ontask = false;
let printroutes = [];

function print(path, layer) {
  if (layer.route) {
    layer.route.stack.forEach(
      print.bind(null, path.concat(split(layer.route.path)))
    );
  } else if (layer.name === "router" && layer.handle.stack) {
    layer.handle.stack.forEach(
      print.bind(null, path.concat(split(layer.regexp)))
    );
  } else if (layer.method) {
    //console.log('%s /%s', layer.method.toUpperCase(), path.concat(split(layer.regexp)).filter(Boolean).join('/'))
    printroutes.push(
      layer.method.toUpperCase() +
        " " +
        path.concat(split(layer.regexp)).filter(Boolean).join("/")
    );
  }
}

function split(thing) {
  if (typeof thing === "string") {
    return thing.split("/");
  } else if (thing.fast_slash) {
    return "";
  } else {
    var match = thing
      .toString()
      .replace("\\/?", "")
      .replace("(?=\\/|$)", "$")
      .match(/^\/\^((?:\\[.*+?^${}()|[\]\\\/]|[^.*+?^${}()|[\]\\\/])*)\$\//);
    return match
      ? match[1].replace(/\\(.)/g, "$1").split("/")
      : "<complex:" + thing.toString() + ">";
  }
}

app.get("/connection", (req, res) => {
  res.end(`{"response":"ok"}`);
});

app.get("/getroutes", (req, res) => {
  printroutes = [];
  app._router.stack.forEach(print.bind(null, []));

  res.end(printroutes.join("\n"));
});

app.post("/toplant", function (req, res) {
  console.log(`--creando diagrama `);
  if (ontask) res.end(`{"message":"idle"}`);
  else {
    ontask = true;
    fs.writeFileSync("..//diagrams/temp.txt", req.body.content);
    //exec(`/home/jtordoya/.sdkman/candidates/java/current/bin/java -jar /home/jtordoya/plantuml.1.2023.7.jar "/home/jtordoya/dev/node/diagrams/dbs.txt"'`,
    exec(
      `/home/jtordoya/.sdkman/candidates/java/current/bin/java -jar /home/jtordoya/plantuml.1.2023.7.jar /home/jtordoya/dev/node/diagrams/temp.txt -o "/home/jtordoya/dev/node/apimaster/public/diagrams/"`,
      //exec(`java -jar ../plantuml.1.2023.7.jar ../diagrams/temp.txt -o "./public/diagrams/"`,
      (error, stdout, stderr) => {
        ontask = false;
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
      }
    );
  }
});
