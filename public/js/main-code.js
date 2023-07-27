let data_db;
let editorX; 
let editorUml;
let btnGuardar =$("#btnGuardar");
let btnDiagrama =$("#btnDiagrama");
var listado = $("#listado");

function iniList(){
    var toggler = document.getElementsByClassName("caret");
    var i;

    for (i = 0; i < toggler.length; i++) {
        toggler[i].addEventListener("click", function() {
            this.parentElement.querySelector(".nested").classList.toggle("active");
            this.classList.toggle("caret-down");
        });
    }
}

function toList(dbs){
    listado.empty();
    dbs.forEach( db => { 
        let li = $(`<li><span class="caret">${db.db}</span></li>`);    
        if (db.groups.length>0){
            let ul = $(`<ul class="nested"></ul>`);
            db.groups.forEach( g => { 
                let li_group = $(`<li class="liGroup" ><span class="caretNo ">${g.name}</span></li>`);                                
                ul.append(li_group);
                li_group.on('click',function (e){
                    console.log("here", g);
                    mostra_botones=false;

                    $("#contentAngularGen").removeClass("d-none");
                    $("#btnZip").addClass("d-none");
                    $("#btnInject").addClass("d-none");
                    let v_pills_tab = $("#v-pills-tab");
                    let v_pills_tabContent = $("#v-pills-tabContent");
                    v_pills_tab.empty();
                    v_pills_tabContent.empty();
    
                    let tbodyFields = $(".tbodyFields");
                    tbodyFields.empty();
                    Object.keys(g.data.create).forEach( f => {
                        let r = relacional(g.data.create[f],f);       
                        console.log("f:",f);
                        console.log("r:",r);           
                        if (r!==undefined) {
                            if (r.array){

                                let tr = $(`<tr><td><input class="form-control form-control-sm" data-cabecera="campo" disabled type="text" value="${f}"></td>
                                <td><input class="form-control form-control-sm" data-cabecera="texto" type="text" value="${f}"></td>
                                <td><select class="form-select form-select-sm" data-cabecera="tipo" value="${campo(g.data.create[f])}"><option value="text" ${esdefault(g.data.create[f],'text')}>text</option><option value="area" ${esdefault(g.data.create[f],'area')}>textarea</option><option value="number" ${esdefault(g.data.create[f],'number')}>number</option><option value="checkbox" ${esdefault(g.data.create[f],'checkbox')}>checkbox</option><option value="checkboxsel" ${esdefault(g.data.create[f],'checkboxsel')}>checkbox select</option><option value="date" ${esdefault(g.data.create[f],'date')}>date</option><option value="relational" ${esdefault(g.data.create[f],'relational')}>relational</option></select></td>
                                <td><select class="form-select form-select-sm" data-cabecera="colsize" value=12><option value=1>1</option><option value=2>2</option><option value=3>3</option><option value=4>4</option><option value=5>5</option><option value=6>6</option><option value=7>7</option><option value=8>8</option><option value=9>9</option><option value=10>10</option><option value=11>11</option><option value=12 selected>12</option></select></td>                                
                                <td><input class="","")} form-check-input form-checkbox-sm" data-cabecera="esrelacion" type="checkbox" disabled  checked ></td>
                                <td><input class=" form-control form-control-sm"  data-cabecera="relacion_tabla" type="text" value="${r?r.name:''}"  disabled></td>
                                <td><input class=" form-control form-control-sm"  data-cabecera="relacion_nombre" type="text" value="${r?r.field:''}"  disabled></td>
                                <td><input class=" form-control form-control-sm"  data-cabecera="relacion_campo" type="text" value="${r?r.ownfield:''}"  disabled></td>
                                <td><input class=" form-control form-control-sm"  data-cabecera="relacion_index" type="text" value="${r?r.index:''}" disabled></td>
                                <td><input class=" form-control form-control-sm"  data-cabecera="relacion_array" type="text" value="true" disabled></td>
                                <td></td>
                                </tr> `);
                                tbodyFields.append(tr);
                                return;
                            }else
                                return;
                        };
                        let forRel = null;
                        if (!esPKbool(g.data.create[f])){
                            Object.keys(g.data.create).forEach( fr => {
                                let rr = relacional(g.data.create[fr],fr);
                                if (rr===undefined) return;
                                if (rr.ownfield == f)
                                    forRel = rr;
                            });
                        }
                        let tr = $(`<tr><td><input class="form-control form-control-sm" data-cabecera="campo" disabled type="text" value="${f}"></td>
                        <td><input class="form-control form-control-sm" data-cabecera="texto" type="text" value="${f}"></td>
                        <td><select class="form-select form-select-sm" data-cabecera="tipo" value="${campo(g.data.create[f])}"><option value="text" ${esdefault(g.data.create[f],'text')}>text</option><option value="area" ${esdefault(g.data.create[f],'area')}>textarea</option><option value="number" ${esdefault(g.data.create[f],'number')}>number</option><option value="checkbox" ${esdefault(g.data.create[f],'checkbox')}>checkbox</option><option value="checkboxsel" ${esdefault(g.data.create[f],'checkboxsel')}>checkbox select</option><option value="date" ${esdefault(g.data.create[f],'date')}>date</option><option value="time" ${esdefault(g.data.create[f],'time')}>time</option><option value="relational" ${esdefault(g.data.create[f],'relational')}>relational</option></select></td>
                        <td><select class="form-select form-select-sm" data-cabecera="colsize" value=12><option value=1>1</option><option value=2>2</option><option value=3>3</option><option value=4>4</option><option value=5>5</option><option value=6>6</option><option value=7>7</option><option value=8>8</option><option value=9>9</option><option value=10>10</option><option value=11>11</option><option value=12 selected>12</option></select></td>
                        <td><input class="form-check-input form-checkbox-sm" data-cabecera="requerido" type="checkbox"  ></td>
                        <td><input class="form-check-input form-checkbox-sm" data-cabecera="visible" type="checkbox" ${esPK(g.data.create[f],"","checked")} ></td>
                        <td><input class="form-check-input form-checkbox-sm" data-cabecera="buscable" type="checkbox" checked ></td>
                        <td><input class="form-check-input form-checkbox-sm" data-cabecera="buscablecheck" type="checkbox" checked ></td>
                        <td><input class="form-check-input form-checkbox-sm" data-cabecera="visiblecheck" type="checkbox" ${esPK(g.data.create[f],"","checked")} ></td>
                        <td><input class="form-check-input form-checkbox-sm" data-cabecera="sortable" type="checkbox" checked ></td>
                        <td><input class="form-check-input form-checkbox-sm" data-cabecera="filtrable" type="checkbox" checked ></td>                                    
                        <td><select class="form-select form-select-sm" data-cabecera="filtrabletipo" value="${campo(g.data.create[f])}"><option value="text" ${esdefault(g.data.create[f],'text')}>text</option><option value="number" ${esdefault(g.data.create[f],'number')}>number</option><option value="date" ${esdefault(g.data.create[f],'date')}>date</option><option value="relational" ${esdefault(g.data.create[f],'relational')}>relational</option></select></td>
                        <td><input class="${esrelacional2(forRel)?'d-none ':''} ${esPK(g.data.create[f],"d-none","")} form-check-input form-checkbox-sm" data-cabecera="tienemin" type="checkbox"  ></td>
                        <td><input class="${esrelacional2(forRel)?'d-none ':''} ${esPK(g.data.create[f],"d-none","")} form-control form-control-sm"  data-cabecera="min" type="value" value="0"></td>
                        <td><input class="${esrelacional2(forRel)?'d-none ':''} ${esPK(g.data.create[f],"d-none","")} form-check-input form-checkbox-sm" data-cabecera="tienemax" type="checkbox"  ></td>
                        <td><input class="${esrelacional2(forRel)?'d-none ':''} ${esPK(g.data.create[f],"d-none","")} form-control form-control-sm"  data-cabecera="max" type="value" value="255"></td>
                        <td><input class="${esrelacional2(forRel)?'d-none ':''} ${esPK(g.data.create[f],"d-none","")} form-check-input form-checkbox-sm" data-cabecera="esrelacion" type="checkbox" disabled ${esrelacionalchecked2(forRel)} ></td>                                         
                        <td><input class="d-none form-control form-control-sm"  data-cabecera="relacion_tabla" type="text" disabled><input class="d-none form-control form-control-sm"  data-cabecera="relacion_index" type="text" value="${forRel?forRel.index:''}" disabled><select class="${!esrelacional2(forRel)?'d-none ':''}" data-cabecera="relacion_campo"></select></td>
                        <td><input class="d-none form-control form-control-sm"  data-cabecera="relacion_array" type="text" value="false" disabled></td>
                        <td><select class="${!esrelacional2(forRel)?'d-none ':''}" data-cabecera="relacion_nombre"></select></td></tr> `);
                        
                        //let r = relacional(g.data.create[f]);                  
                        //console.log("r",r);
                        if (forRel!==undefined && forRel!=null){
                            let gr = db.groups.find(gx => gx.name == forRel.name)                        
                            let trSelT = $($(tr).find(`[data-cabecera="relacion_tabla"]`));
                            trSelT.val(forRel.name);
                            let trSelC = $($(tr).find(`[data-cabecera="relacion_nombre"]`));              
                            let trSelN = $($(tr).find(`[data-cabecera="relacion_campo"]`));
                            Object.keys(gr.data.create).forEach(f => {
                                let opt1 = $(`<option value="${f}">${f}</option>`);
                                let opt2 = $(`<option value="${f}">${f}</option>`);                            
                                trSelC.append(opt1);
                                trSelN.append(opt2);
                            });
                        }
    
                        tbodyFields.append(tr);
                    });
                    $("[data-param='xnombrex']").val(g.name).change(); 
    
                });
            });
            li.append(ul);
        }
        listado.append(li);
    });
    iniList();
}

function init(){
    iniList();
    init_front();
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

function saveDBs(data){
    $.ajax({ 
        url:"/save_all", dataType: 'json', data: {content: JSON.stringify(data)}, method: 'POST' })
        .done(function (res) {
            console.log("get_db > ", res);
            
            setTimeout ( () => {
                editorUml.setValue(toPlants(data_db));
                generarPlant(toPlants(data_db));
                toList(data_db);
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
                toList(data_db);
            //    console.log("data_db > ", data);                         
                editorX.setValue(toHuman(data_db));
                //toPlants(data_db[2]);
                setTimeout(()=>{
                    editorUml.setValue(toPlants(data_db));
                    generarPlant(toPlants(data_db));
                },2000);
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
    data_db = toJson(editorX.getValue());
    saveDBs(data_db);
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
            //    console.log("l",l);
             //   console.log("Tabs",Tabs);
             //   console.log("values",values,l);                
                field = {name: values[0].trim(), value:values[1].trim(), rel:relacional(values[1].trim(),values[0].trim())};
                acGroup.fields.push(field);
                return;
            }
        }
    });

    arDb.forEach( d => {
        d.groups.forEach( g => {
            let grouptemp = formatearArray( g );
            g['apis'] = grouptemp.apis;
            g['data'] = grouptemp.data;            
        });
    });
    /* add relations */
    arDb.forEach( d => {
        d.groups.forEach( g => {
            let grouptemp = formatearArrayRel( g, d.groups );
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
            method : "GET",
            route : ":id",
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

function formatearArrayRel(groupNor,groups){
    
    let apiData = {};
    let apiDataIns = {};
    let apiDataRel = [];
    let apiDataInsRel = [];
    
    groupNor.fields.forEach(f => {
        if (f.rel!==undefined)
            if (f.rel.array){
                let tempRelGroup = groups.find( g => g.name == f.rel.name );
                if (tempRelGroup){
                    Object.keys(tempRelGroup.data).forEach(dd => {
                        groupNor.data[dd+'_'+f.rel.name] = tempRelGroup.data[dd];
                    });

                    let api_temp = [{
                        method : "GET",
                        route : `:${f.rel.field}/${f.rel.name}`,
                        in : null,
                        rel: f.value ,
                        type : "rel",
                        out : `select_${f.rel.name}`,
                      },{
                        method : "GET",
                        route : `:${f.rel.field}/${f.rel.name}/:id`,
                        in : null,
                        rel: f.value ,
                        type : "rel",
                        out : `select_${f.rel.name}`,
                      },{
                        method : "POST",
                        route : `:${f.rel.field}/${f.rel.name}`,
                        in : `insert_${f.rel.name}`,
                        rel: f.value ,
                        type : "rel",
                        out : `select_${f.rel.name}`,
                      },{
                        method : "PUT",
                        route : `:${f.rel.field}/${f.rel.name}/:id`,
                        in : `insert_${f.rel.name}`,
                        rel: f.value ,
                        type : "rel",
                        out : `select_${f.rel.name}`,
                      },{
                        method : "DELETE",
                        route : `:${f.rel.field}/${f.rel.name}/:id`,
                        in : null,
                        rel: f.value ,
                        type : "rel",
                        out : null,
                      }];
                      groupNor.apis = groupNor.apis.concat(api_temp);
                      
                }
            }
    });


    return groupNor;
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
            else if (rel.array==false)
                relations.push({table:group.name, reltable:rel.name});
        });
        testX += campos.join("\n");
        testX += `\n}\n`; 
    });

    relations.forEach(r => {
        let tTest = `${r.reltable} *-- ${r.table}`;
        if ( testX.includes(tTest) )
            testX = testX.replaceAll(tTest,`${r.reltable} *--* ${r.table}`);
        else
            testX += `${r.table} *-- ${r.reltable}\n`;
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
            else if (rel.array==false)
                relations.push({table:group.name, reltable:rel.name});
        });
        testX += campos.join("\n");
        testX += `\n\t}\n`; 
    });

    relations.forEach(r => {
        let tTest = `${r.reltable} *-- ${r.table}`;
        if ( testX.includes(tTest) )
            testX = testX.replaceAll(tTest,`${r.reltable} *--* ${r.table}`);
        else
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