let data_db;
let editorX; 
let editorUml;
let btnGuardar =$("#btnGuardar");
let btnDiagrama =$("#btnDiagrama");

function init(){
    document.addEventListener("keydown", (event) => {
        //event.preventDefault();
        switch (event.which) {
            case 115:
                console.log("guardando :)");
                btnGuardar.click();
            case 117:
                console.log("generando diagrama :3");
                btnDiagrama.click();
            break;
        }
    });
    editorX = CodeMirror(document.getElementById("codeText"), {
        mode: "javascript",
        theme: "neonsyntax",
        lineWrapping: true,
        lineNumbers: true,
        lineWrapping: false,
        styleActiveLine: true,
        indentWithTabs: true,
        matchBrackets: true,
        value: ''
    });

    editorUml = CodeMirror(document.getElementById("codeUmlText"), {
        mode: "javascript",
        theme: "neonsyntax",
        lineWrapping: true,
        lineNumbers: true,
        lineWrapping: false,
        styleActiveLine: true,
        indentWithTabs: true,
        matchBrackets: true,
        value: ''
    });
/*
    editorX.on('change',(e) => {
        let val = editorX.getValue();

    });
    editorUml.on('change',(e) => {
        let val = editorUml.getValue();
        //console.log("val",val);
        //$("#diagramImg").attr("uml",val);
        //plantuml_runonce();
        generarPlant(val);
    });*/
    editorX.setSize("100%", 800);
    editorUml.setSize("100%", 300);

    cargarJson ();
}

function saveDBs(data,callback=null){
    $.ajax({ 
        url:"/save_all", dataType: 'json', data: {content: JSON.stringify(data)}, method: 'POST' })
        .done(function (res) {
            console.log("get_db > ", res);
            
            setTimeout ( () => {
                editorUml.setValue(toPlants(data_db));
                generarPlant(toPlants(data_db));
             } , 1000);
        } );    
}

function generarPlant(valor){
    $.ajax({ 
        url:"/toplant", dataType: 'json', data: {content:valor}, method: 'POST' })
            .done(function (data) {
                console.log(data);
                $(".diagramImg").attr("src","/diagrams/temp.png?" + new Date().getTime());

            }
    );
}
function cargarJson (){
    $.ajax({ 
        url:"/db_all", dataType: 'json', data: {}, method: 'GET' })
            .done(function (data) {
                data_db = data;
            //    console.log("data_db > ", data);                         
                editorX.setValue(toHuman(data_db));
                //toPlants(data_db[2]);
                setTimeout(()=>{
                    editorUml.setValue(toPlants(data_db));
                    generarPlant(toPlants(data_db));
                },1000);
            }
    );
}
function esRelacion(campos,d){
    if (campos[d].includes("[[")){
        let val_clean = campos[d].replaceAll("[","").replaceAll("]","").split("|");
        return { name:val_clean[0].trim(),field:val_clean[1].trim(),ownfield:val_clean[2].trim(),array:true };;
    }
    if (campos[d].includes("[")){
        let val_clean = campos[d].replaceAll("[","").replaceAll("]","").split("|");
//        console.log(campos[d]);
        return { name:val_clean[0].trim(),field:val_clean[1].trim(),ownfield:val_clean[2].trim(),array:false };;
    }
        
    return null;
}

btnGuardar.click((e)=>{
    saveDBs(toJson(editorX.getValue()));
});

btnDiagrama.click((e)=>{
    //toJson(editorX.getValue());
    generarPlant(toPlants(toJson(editorX.getValue())));
});

function toJson(texto){
    //let regclass
    console.log("texto");
    let lines = texto.split("\n");
    let modo = "db";
    let arDb = [];
    let acDb = null;
    let acGroup = null;
    lines.forEach(l => {
//        console.log();
        if (l.trim()=="") return;
        let Tabs = l.split("\t");
        let cTabs = l.split("\t").length-1;
        //console.log(`${l.trim()} (${cTabs})`);
        if (modo == "db"){
            if (cTabs == 1){
                modo="group";
                acDb = {db: Tabs[1].trim() , groups:[]};
                arDb.push(acDb);
                return;
            }            
        }
        if (modo == "group"){
            if (cTabs == 1){
                modo="group";
                acDb = {db: Tabs[1].trim() , groups:[]};
                arDb.push(acDb);
                return;
            }
            if (cTabs == 2){
                modo="field";
                acGroup = {name: Tabs[2].trim(), fields:[]};
                acDb.groups.push(acGroup);
                return;
            }            
        }
        if (modo == "field"){
            if (cTabs == 1){
                modo="group";
                acDb = {db: Tabs[1].trim() , groups:[]};
                arDb.push(acDb);
                return;
            }
            if (cTabs == 2){
                modo="field";
                acGroup = {name: Tabs[2].trim(), fields:[]};
                acDb.groups.push(acGroup);
                return;
            }            
            if (cTabs == 3){
                modo="field";
                let values = Tabs[3].trim().split(":");
                console.log("l",l);
                console.log("Tabs",Tabs);
                console.log("values",values,l);
                field = {name: values[0].trim(), value:values[1].trim(), rel:null};
                acGroup.fields.push(field);
                return;
            }
        }
    });

    arDb.forEach( d => {
        d.groups.forEach( g => {
            let grouptemp = formatearArray( g );
            console.log(`grouptemp: `, grouptemp);
            g['apis'] = grouptemp.apis;
            g['data'] = grouptemp.data;            
        });
    });

    //editorUml.setValue( toPlants(arDb) );
   // generarPlant(toPlants(arDb));
    console.log(`arDb: `, arDb);
    return arDb;
}

function formatearArray(groupNor){
    
    let apiData = {};
    let apiDataIns = {};
    groupNor.fields.forEach(f => {
        apiData[f.name] = f.value;
    });

    apiDataIns = {... apiData};
    delete apiDataIns.id; 

    let group = {        
        name : groupNor.name,
        data : 
          { select : {... apiData}, create : {... apiData}, insert : {... apiDataIns}}
        , 
        apis : [{
            method : "GET",
            route : "",
            in : null,
            type : "auto",
            out : "select",
          },{
            method : "POST",
            route : "",
            in : "insert",
            type : "auto",
            out : "select",
          },{
            method : "PUT",
            route : ":id",
            in : "insert",
            type : "auto",
            out : "select",
          },{
            method : "DELETE",
            route : ":id",
            in : null,
            type : "auto",
            out : null,
          }
        ]
      }
    return group;
}



function toHuman(dbs){
    let testX = "";
    dbs.forEach(db => {
        let clase = [];
        let relations = [];
        testX += `\t${db.db}\n`;

        db.groups.forEach(group => {
            testX += `\t\t${group.name}\n`;
            data_create = group.data.select;
            let campos = [];
            
            data_create = group.data.select;
            Object.keys(data_create).forEach( d =>{
                    campos.push(`\t\t\t${d}:${data_create[d]}`);
            });
            testX += campos.join("\n");
            testX += `\n\n`; 
        });
    });

    return testX;
}

function  toPlant(db){
    let testX = "";
    let clase = [];
    let relations = [];
    db.groups.forEach(group => {
        testX += `class ${group.name}{\n`;
        data_create = group.data.select;
        let campos = [];
        
        data_create = group.data.select;
        Object.keys(data_create).forEach( d =>{
            let rel = esRelacion(data_create,d);
            if (rel == null )
                campos.push(`\t${data_create[d]} ${d}`);
            else
                relations.push({table:group.name, reltable:rel.name});
        });
        testX += campos.join("\n");
        testX += `\n}\n`; 
    });

    relations.forEach(r => {
        testX += r.table + " *-- "+ r.reltable + "\n";
    });

    editorUml.setValue(testX);
};

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
        testX += `${r.table} *-- ${r.reltable}\n`;
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
    return `@startuml\n${testX}\n@enduml`;
};