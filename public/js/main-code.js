let data_db;
let editorX; 
let editorUml;

function init(){
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

    editorX.on('change',(e) => {
        let val = editorX.getValue();
        console.log("val",val);
        $("#diagramImg").attr("uml",val);
        plantuml_runonce();
    });
    editorX.setSize("100%", 610);

    cargarJson ();
}

function cargarJson (){
    $.ajax({ 
        url:"/db_all", dataType: 'json', data: {}, method: 'GET' })
            .done(function (data) {
                data_db = data;
                console.log("data_db > ", data);         
                toHuman(data_db[2]);
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
        console.log(campos[d]);
        return { name:val_clean[0].trim(),field:val_clean[1].trim(),ownfield:val_clean[2].trim(),array:false };;
    }
        
    return null;
}
function toHuman(db){
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
        testX += r.table + " ---* "+ r.reltable + "\n";
    });

    editorX.setValue(testX);
}

function  toPlan(){

};