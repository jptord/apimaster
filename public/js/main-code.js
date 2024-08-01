let data_db;
let editorX; 
let editorSQL; 
let editorUml;
let btnGuardar =$("#btnGuardar");
let btnDiagrama =$("#btnDiagrama");
let btnSeeder =$("#btnSeeder");
let btnACamelCase = $("#btnACamelCase");
let btnASnakeCase = $("#btnASnakeCase");
let btnToSeeder = $("#btnToSeeder");
let btnToSeederNew = $("#btnToSeederNew");

let btnSaveConfig = $("#btnSaveConfig");
let btnDelConfig = $("#btnDelConfig");
let btnNewConfig = $("#btnNewConfig");
let selConfig = $("#selConfig");

let globalConfig = new Config(btnSaveConfig,btnDelConfig,btnNewConfig,selConfig);
var listado = $("#listado");
let selectedGroup = '';

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
function dbsToCamelCase(dbs){
    let _dbs = [... dbs];
    _dbs.forEach( db => { 
        db.groups.forEach( g => { 
            g.fields.forEach( f => {
                f.name = convertirACamel(f.name);                
            });
            let data_array = {};
            Object.keys(g.data).forEach( f => {
                let fields_array = {};
                Object.keys(g.data[f]).forEach( ff => {
                    let regDbl = /(?<=\[\[).*(?=\]\])/gm;
                    //console.log("regDbl",regDbl);
                    //console.log("g.data[f][ff]",g.data[f][ff]);
                    let regSgl = /(?<=\[).*(?=\])/gm;
                    let dbl = g.data[f][ff].match(regDbl);
                    let sgl = g.data[f][ff].match(regSgl);
                    //console.log("dbl",dbl);
                    //console.log("sgl",sgl);

                    if (dbl){
                        let data_split = dbl[0].split("|");
                        for (let i = 1; i<data_split.length; i++) data_split[i] = convertirACamel(data_split[i]);
                        let data_temp = data_split.join("|");
                        fields_array[convertirACamel(ff)] = `[[${data_temp}]]`;
                    }else if (sgl){
                        let data_split = sgl[0].split("|");
                        for (let i = 1; i<data_split.length; i++) data_split[i] = convertirACamel(data_split[i]);
                        let data_temp = data_split.join("|");
                        fields_array[convertirACamel(ff)] = `[${data_temp}]`;
                    }else{
                        fields_array[convertirACamel(ff)] = convertirACamel(g.data[f][ff]);
                    }
                    
                });
                data_array[f] = fields_array;
            });
            g.data = data_array;
        });
    });
    console.log(`dbs`,dbs);
    console.log(`dbsToCamelCase`,_dbs);
    return _dbs
}
function toList(dbs){
    listado.empty();
    let dbs_camel = dbsToCamelCase(dbs);
    dbs_camel.forEach( db => { 
        let li = $(`<li><span class="caret">${db.db}</span></li>`);    
        if (db.groups.length>0){
            let ul = $(`<ul class="nested active"></ul>`);
            db.groups.forEach( g => { 
                let li_group = $(`<li class="liGroup" ><span class="caretNo ">${g.name}</span></li>`);                                
                ul.append(li_group);
                li_group.on('click',function (e){
                    console.log("here", g);
                    selectedGroup = g;
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

                                let tr = $(`<tr><td><input class="form-control form-control-sm" data-parent="${db.db}.${g.name}.${f}" data-cabecera="campo" disabled type="text" value="${f}"></td>
                                <td><input class="form-control form-control-sm" data-parent="${db.db}.${g.name}.${f}" data-cabecera="texto" type="text" value="${f}"></td>
                                <td><select class="form-select form-select-sm" data-parent="${db.db}.${g.name}.${f}" data-cabecera="tipo" value="${campo(g.data.create[f])}">

                                    <option value="text" ${esdefault(g.data.create[f],'text')}>text</option>
                                    <option value="area" ${esdefault(g.data.create[f],'area')}>textarea</option>
                                    <option value="number" ${esdefault(g.data.create[f],'number')}>number</option>
                                    <option value="checkbox" ${esdefault(g.data.create[f],'checkbox')}>checkbox</option>
                                    <option value="checkboxsel" ${esdefault(g.data.create[f],'checkboxsel')}>checkbox select</option>
                                    <option value="image64" ${esdefault(g.data.create[f],'image64')}>image base64</option>
                                    <option value="date" ${esdefault(g.data.create[f],'date')}>date</option>
                                    <option value="time" ${esdefault(g.data.create[f],'time')}>time</option>
                                    <option value="relational" ${esdefault(g.data.create[f],'relational')}>relational</option>
                                    <option value="seladd" ${esdefault(g.data.create[f],'seladd')}>seladd</option>
                                    <option value="seledit" ${esdefault(g.data.create[f],'seledit')}>seledit</option>
                                    <option value="seladdedit" ${esdefault(g.data.create[f],'seladdedit')}>seladdedit</option>
                                    </select></td>

                                <td><select class="form-select form-select-sm" data-parent="${db.db}.${g.name}.${f}" data-cabecera="colsize" value=12><option value=1>1</option><option value=2>2</option><option value=3>3</option><option value=4>4</option><option value=5>5</option><option value=6>6</option><option value=7>7</option><option value=8>8</option><option value=9>9</option><option value=10>10</option><option value=11>11</option><option value=12 selected>12</option></select></td>                                
                                <td><input class="","")} form-check-input form-checkbox-sm" data-parent="${db.db}.${g.name}.${f}" data-cabecera="esrelacion" type="checkbox" disabled  checked ></td>
                                <td><input class=" form-control form-control-sm"  data-parent="${db.db}.${g.name}.${f}" data-cabecera="relacion_tabla" type="text" value="${r?r.name:''}"  disabled></td>
                                <td><input class=" form-control form-control-sm"  data-parent="${db.db}.${g.name}.${f}" data-cabecera="relacion_nombre" type="text" value="${r?r.field:''}"  disabled></td>
                                <td><input class=" form-control form-control-sm"  data-parent="${db.db}.${g.name}.${f}" data-cabecera="relacion_campo" type="text" value="${r?r.ownfield:''}"  disabled></td>
                                <td><input class=" form-control form-control-sm"  data-parent="${db.db}.${g.name}.${f}" data-cabecera="relacion_index" type="text" value="${r?r.index:''}" disabled></td>
                                <td><input class=" form-control form-control-sm"  data-parent="${db.db}.${g.name}.${f}" data-cabecera="relacion_array" type="text" value="true" disabled></td>
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
                        let tr = $(`<tr><td><input class="form-control form-control-sm" data-parent="${db.db}.${g.name}.${f}" data-cabecera="campo" disabled type="text" value="${f}"></td>
                        <td><input class="form-control form-control-sm" data-parent="${db.db}.${g.name}.${f}" data-cabecera="texto" type="text" value="${f}"></td>
                        <td><select class="form-select form-select-sm" data-parent="${db.db}.${g.name}.${f}" data-cabecera="tipo" value="${campo(g.data.create[f])}">
                            <option value="text" ${esdefault(g.data.create[f],'text')}>text</option>
                            <option value="area" ${esdefault(g.data.create[f],'area')}>textarea</option>
                            <option value="number" ${esdefault(g.data.create[f],'number')}>number</option>
                            <option value="checkbox" ${esdefault(g.data.create[f],'checkbox')}>checkbox</option>
                            <option value="checkboxsel" ${esdefault(g.data.create[f],'checkboxsel')}>checkbox select</option>
                            <option value="imagebase64" ${esdefault(g.data.create[f],'image64')}>image base64</option>
                            <option value="date" ${esdefault(g.data.create[f],'date')}>date</option>
                            <option value="time" ${esdefault(g.data.create[f],'time')}>time</option>
                            <option value="relational" ${esdefault(g.data.create[f],'relational')}>relational</option>
                            <option value="seladd" ${esdefault(g.data.create[f],'seladd')}>seladd</option>
                            <option value="seledit" ${esdefault(g.data.create[f],'seledit')}>seledit</option>
                            <option value="seladdedit" ${esdefault(g.data.create[f],'seladdedit')}>seladdedit</option>
                            </select></td>
                        <td><select class="form-select form-select-sm" data-parent="${db.db}.${g.name}.${f}" data-cabecera="colsize" value=12><option value=1>1</option><option value=2>2</option><option value=3>3</option><option value=4>4</option><option value=5>5</option><option value=6>6</option><option value=7>7</option><option value=8>8</option><option value=9>9</option><option value=10>10</option><option value=11>11</option><option value=12 selected>12</option></select></td>
                        <td><input class="form-check-input form-checkbox-sm" data-parent="${db.db}.${g.name}.${f}" data-cabecera="requerido" type="checkbox"  ></td>
                        <td><input class="form-check-input form-checkbox-sm" data-parent="${db.db}.${g.name}.${f}" data-cabecera="visible" type="checkbox" ${esPK(g.data.create[f],"","checked")} ></td>
                        <td><input class="form-check-input form-checkbox-sm" data-parent="${db.db}.${g.name}.${f}" data-cabecera="buscable" type="checkbox" checked ></td>
                        <td><input class="form-check-input form-checkbox-sm" data-parent="${db.db}.${g.name}.${f}" data-cabecera="buscablecheck" type="checkbox" checked ></td>
                        <td><input class="form-check-input form-checkbox-sm" data-parent="${db.db}.${g.name}.${f}" data-cabecera="visiblecheck" type="checkbox" ${esPK(g.data.create[f],"","checked")} ></td>
                        <td><input class="form-check-input form-checkbox-sm" data-parent="${db.db}.${g.name}.${f}" data-cabecera="sortable" type="checkbox" checked ></td>
                        <td><input class="form-check-input form-checkbox-sm" data-parent="${db.db}.${g.name}.${f}" data-cabecera="filtrable" type="checkbox" checked ></td>                                    
                        <td><select class="form-select form-select-sm" data-parent="${db.db}.${g.name}.${f}" data-cabecera="filtrabletipo" value="${campo(g.data.create[f])}"><option value="text" ${esdefault(g.data.create[f],'text')}>text</option><option value="number" ${esdefault(g.data.create[f],'number')}>number</option><option value="date" ${esdefault(g.data.create[f],'date')}>date</option><option value="relational" ${esdefault(g.data.create[f],'relational')}>relational</option></select></td>
                        <td><input class="${esrelacional2(forRel)?'d-none ':''} ${esPK(g.data.create[f],"d-none","")} form-check-input form-checkbox-sm" data-parent="${db.db}.${g.name}.${f}" data-cabecera="tienemin" type="checkbox"  ></td>
                        <td><input class="${esrelacional2(forRel)?'d-none ':''} ${esPK(g.data.create[f],"d-none","")} form-control form-control-sm"  data-parent="${db.db}.${g.name}.${f}" data-cabecera="min" type="number" value="0"></td>
                        <td><input class="${esrelacional2(forRel)?'d-none ':''} ${esPK(g.data.create[f],"d-none","")} form-check-input form-checkbox-sm" data-parent="${db.db}.${g.name}.${f}" data-cabecera="tienemax" type="checkbox"  ></td>
                        <td><input class="${esrelacional2(forRel)?'d-none ':''} ${esPK(g.data.create[f],"d-none","")} form-control form-control-sm"  data-parent="${db.db}.${g.name}.${f}" data-cabecera="max" type="number" value="255"></td>
                        <td><input class="${esrelacional2(forRel)?'d-none ':''} ${esPK(g.data.create[f],"d-none","")} form-check-input form-checkbox-sm" data-parent="${db.db}.${g.name}.${f}" data-cabecera="esrelacion" type="checkbox" disabled ${esrelacionalchecked2(forRel)} ></td>                                         
                        <td><input class="d-none form-control form-control-sm"  data-parent="${db.db}.${g.name}.${f}"  data-cabecera="relacion_tabla" type="text" disabled><input class="d-none form-control form-control-sm"  data-parent="${db.db}.${g.name}.${f}" data-cabecera="relacion_index" type="text" value="${forRel?forRel.index:''}" disabled><select class="${!esrelacional2(forRel)?'d-none ':''}" data-parent="${db.db}.${g.name}.${f}" data-cabecera="relacion_campo"></select></td>
                        <td><input class="d-none form-control form-control-sm"  data-parent="${db.db}.${g.name}.${f}" data-cabecera="relacion_array" type="text" value="false" disabled></td>
                        <td><select class="${!esrelacional2(forRel)?'d-none ':''}" data-parent="${db.db}.${g.name}.${f}" data-cabecera="relacion_nombre"></select></td></tr> `);
                        
                        //let r = relacional(g.data.create[f]);                  
                        //console.log("r",r);
                        if (forRel!==undefined && forRel!=null){
                            
                            console.log("gr.data.create",db.groups);     
                            console.log("gr.data.create",forRel);               
                            let gr = db.groups.find(gx => gx.name == forRel.name)          
                            let trSelT = $($(tr).find(`[data-cabecera="relacion_tabla"]`));
                       //     console.log('--',trSelT,forRel.name);
                            trSelT.val(forRel.name);

                            let trSelC = $($(tr).find(`[data-cabecera="relacion_nombre"]`));              
                            let trSelN = $($(tr).find(`[data-cabecera="relacion_campo"]`));
                            
                            Object.keys(gr.data.create).forEach(f => {
                                /*console.log("object.key:", f);
                                console.log("gr.data.create:", gr.data.create[f]);
                                console.log("relation:", esRelacion(gr.data.create , f));*/
                                let rel_rel = esRelacion(gr.data.create , f);
                                if (rel_rel==null){
                                    let opt1 = $(`<option value="${f}">${f}</option>`);
                                    let opt2 = $(`<option value="${f}">${f}</option>`);
                                    trSelC.append(opt1);
                                    trSelN.append(opt2);
                                }
                                else{
                                    let gr_rel = db.groups.find(gx => gx.name == rel_rel.name);
                                    //console.log("--gr_rel--",gr_rel);
                                    let opt2 = $(`<option value="${f}">${f}</option>`);
                                    trSelN.append(opt2);
                                    Object.keys(gr_rel.data.create).forEach(fx => {
                                        let opt1 = $(`<option value="${f}.${fx}">${f}.${fx}</option>`);                                           
                                        trSelC.append(opt1);
                                    });
                                }
                            });
                        }
    
                        tbodyFields.append(tr);
                    });
                    $("[data-param='xnombrex']").val(g.name).change(); 
    
                    cargarCookies(selectedGroup.name);
                    setGlobalSetup();
                    cargarCookiesHeader();
                });
            });
            li.append(ul);
        }
        listado.append(li);
    });
    iniList();
}
function setGlobalSetup(){
    globalConfig.actualizar();
}

function setValType(e,v){
    let t = e.prop("tagName")
    if (t == 'SELECT'){
        e.val(v).change();
        return;
    }
    if(t == 'INPUT'){
        let tt = e.attr("type");
        console.log("e is ", tt, `'${v}'`);
        if (tt=='text' || tt =='number')
            e.val(v);                
        if (tt=='checkbox')
            e.prop('checked',v=='true'||v=='on'?true:false);
        return;
    }
    e.val(v);
}
function getValType(e){
    let t = e.prop("tagName")
    if (t == 'SELECT'){
        return e.val();
    }
    if(t == 'INPUT'){
        let tt = e.attr("type");
        if (tt=='text' || tt =='number')
            return e.val();
        if (tt=='checkbox')
            return e.prop('checked');        
    }
    return e.val();
}

function cargarCookies(prefix){
    let galletas = new Galletas();
    let inputsParam = $("[data-param]");
    console.log("cargar cookies");
    if (prefix!='') prefix=prefix+'.';
    for(let i=0; i< inputsParam.length; i++) {
        let element = $(inputsParam[i]);          
        let name = element.attr("data-param");           
        console.log(`cargando ${prefix}${name} '${element.val()}' ${element.prop("tagName")}`);
        var v = galletas.get(prefix + name);
        if (v != '' && v!=null && v!==undefined)
            setValType(element,v);
    };
}
function cargarCookiesHeader(){
    let galletas = new Galletas();
    let inputsParam = $("[data-cabecera]");
    console.log("guardar cookies header");
    for(let i=0; i< inputsParam.length; i++) {
        let element = $(inputsParam[i]);          
        let name = element.attr("data-cabecera");
        let prefix = element.attr("data-parent");
        if (prefix != '') prefix = prefix + '.';
        console.log(`cargando ${prefix}${name} '${element.val()}' ${element.prop("tagName")}`);
        var v = galletas.get(prefix + name);
        if (v != '' && v!=null && v!==undefined)
            setValType(element,v);
    };
}


function guardarCookies(prefix){
    let galletas = new Galletas();
    let inputsParam = $("[data-param]");
    console.log("guardar cookies ",prefix);
    if (prefix!='') prefix=prefix+'.';
    for(let i=0; i< inputsParam.length; i++) {
        let element = $(inputsParam[i]);
        let name = element.attr("data-param");                
        console.log(`guardando ${prefix}${name} '${element.val()}' `);
        galletas.set(prefix + name, getValType(element));
    };
}
function guardarCookiesHeader(){
    let galletas = new Galletas();
    let inputsParam = $("[data-cabecera]");
    console.log("guardar cookies header");
    for(let i=0; i< inputsParam.length; i++) {
        let element = $(inputsParam[i]);
        let name = element.attr("data-cabecera");
        let prefix = element.attr("data-parent");
        if (prefix != '') prefix = prefix + '.';
        console.log(`guardando ${prefix}${name} '${element.val()}'`);
        galletas.set(prefix + name, getValType(element));
    };
}

function onSave(data){
    guardarCookies(selectedGroup.name);
    guardarCookiesHeader();
}

function init(){
    iniList();
    init_front(onSave);
    document.addEventListener("keydown", (event) => {
        //event.preventDefault();
        switch (event.which) {
            case 115:
                console.log("guardando :)");
                btnGuardar.click();
            case 117:
                console.log("generando diagrama :3");
                btnDiagrama.click();
            case 118:
                console.log("generando seeders");
                btnSeeder.click();
            break;
        }
    });
    
      
    editorX = CodeMirror(document.getElementById("codeText"), {
        value: "",
        mode:  "text",
        theme: 'blackboard',
        //lineWrapping: true,
        lineNumbers: true,
        lineWrapping: false,
        styleActiveLine: true,
        smartIndent: false,
        indentWithTabs:true,
        //matchBrackets: true,
      });

      editorUml = CodeMirror(document.getElementById("codeUmlText"), {
        value: "",
        mode:  "text",
        theme: 'blackboard',
        //lineWrapping: true,
        lineNumbers: true,
        lineWrapping: false,
        styleActiveLine: true,
        //matchBrackets: true,
      });

      editorSQL = CodeMirror(document.getElementById("codeSQL"), {
        value: "",
        mode:  "sql",
        theme: 'blackboard',
        //lineWrapping: true,
        lineNumbers: true,
        lineWrapping: false,
        styleActiveLine: true,
        //matchBrackets: true,
      });
      
/*
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
    });*/
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
	editorSQL.setSize("100%", 50);

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
				document.getElementById('iframeEas').src += '';
				//document.getElementById('iframeEas').contentWindow.location.reload();
                toListSpring(data_db);
                toList(data_db);
             } , 1000);
        } );    
}

function generarPlant(valor){
    $.ajax({ 
        url:"http://localhost:9797/plant",  data: {texto:valor}, method: 'POST' })
            .done(function (data) {
                console.log("generarPlant",data);
                $(".diagramImg").attr("src","http://localhost:9797/"+data);

            }
    );
}

function cargarJson (){
    $.ajax({ 
        url:"/db_all", dataType: 'json', data: {}, method: 'GET' })
            .done(function (data) {
                data_db = data;
                editorX.setValue(toHuman(data_db));
                toListSpring(data_db);
                toList(data_db);                  
                //toPlants(data_db[2]);
                setTimeout(()=>{
                    editorUml.setValue(toPlants(data_db));
                    generarPlant(toPlants(data_db));
                },2000);
            }
    );
}

function aRelacion(campo){
	if (campo==undefined) return campo;
    if (campo.includes("[[")){
        let val_clean = campo.replaceAll("[","").replaceAll("]","").split("|");
        return { name:val_clean[0].trim(),field:val_clean[1].trim(),ownfield:val_clean[2].trim(),array:true };
    }
    if (campos[d].includes("[")){
        let val_clean = campos[d].replaceAll("[","").replaceAll("]","").split("|");
//        console.log(campos[d]);
        return { name:val_clean[0].trim(),field:val_clean[1].trim(),ownfield:val_clean[2].trim(),array:false };
    }
    return null;
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
    console.log("btnGuardar.toJson.data_db",data_db);
    //throw "ok";
    saveDBs(data_db);
});

btnSeeder.click((e)=>{
    data_db = toJson(editorX.getValue());
    let seederText = toSeeder(data_db);    
    editorSQL.setValue(seederText);
});

btnDiagrama.click((e)=>{
    //toJson(editorX.getValue());
    generarPlant(toPlants(toJson(editorX.getValue())));
});
btnACamelCase.click((e)=>{
    editorX.setValue(convertirACamel(editorX.getValue()));
});
btnASnakeCase.click((e)=>{
    editorX.setValue(convertirASnake(editorX.getValue()));
});
btnToSeeder.click(e =>{
    let data_db = toJson(editorX.getValue());
    let seeder_db = convertirSqlQSeeder(editorSQL.getValue());
    let data_db_joined = unirSeederADb(data_db,seeder_db);        
    editorX.setValue(toHuman(data_db_joined));
});
btnToSeederNew.click(e =>{
    let data_db = toJson(editorX.getValue());
    let seeder_db = convertirSqlQSeeder(editorSQL.getValue());
    limpiarSeederDb(data_db);
    let data_db_joined = unirSeederADb(data_db,seeder_db);        
    editorX.setValue(toHuman(data_db_joined));
});

function limpiarSeederDb(data_db){
    data_db.forEach( db => {
        db.groups.forEach( g => {
            g.seeder = [];
        });
    });
}

function unirSeederADb(data_db,seeder_db){
    console.log("data_db",data_db);
    seeder_db.forEach( seeder => {        
        findgroup = data_db[0].groups.find( group => group.name == seeder.tabla );
        if (findgroup){
            let dataType = 'insert';
            Object.keys(seeder.valores).forEach( key_seeder => {
                console.log("key_seeder",key_seeder);
                if (key_seeder.toLowerCase() == 'id') dataType="create";
            });
            
            fieldsGroup = Object.keys(findgroup.data[dataType]);
            let valuesOrdered = [];
            fieldsGroup.forEach(fg => {           
                if (findgroup.data[dataType][fg].includes("[")) return;
                valuesOrdered.push(seeder.valores[fg.toLowerCase()]);
            });

            findgroup.seeder.push({ data:dataType, values:valuesOrdered});
           // let i = data_db[0].groups.indexOf(findgroup);
           // data_db[0].groups[i].seeder = [];
        }
        //console.log(findgroup,seeder.tabla);
    });
    console.log("unirSeederADb",data_db);
    return data_db;
}

function convertirSqlQSeeder(textSql){
    let regInserts = new RegExp(/(?=(INSERT INTO|insert into))+[A-Za-z0-9áéíóúÁÉÍÓÚÑñ \#\@\:\t\.\-\(\)\_\=\'\"\,\n]+(?=;)+/g);
    let rgNombre = new RegExp(/(?<=(INSERT INTO[\t ]|insert into[\t ]))[A-Za-z0-9\_]+(?=[\t ]*\()/g);
    let rgValues = new RegExp(/(?<=(VALUES[\n\t ]*\(|values[\n\t ]*\()|,[ \n\t]*\()[A-Za-z0-9áéíóúÁÉÍÓÚÑñ \#\@\:\t\.\-\_\=\'\",\n]+(?=\))+/g);
    let rgFields = new RegExp(/(?<=\()[a-zA-Z ,\_]+(?=\) VALUES|\)[ \t\n]*values)/g);
    let insertsArray =  textSql.match(regInserts);
    let seeders = [];
    insertsArray.forEach( ins => {
        let nombreTabla = ins.match(rgNombre);
        let values = ins.match(rgValues);
        let fieldsSection = ins.match(rgFields);
        let fields = fieldsSection[0].split(",");
        values.forEach( (value) =>{
            let valoresObj = {};
            let valores = value.replaceAll("'","").split(",");
            console.log("sql valores",valores);
            fields.forEach((f,i) => {
                if ( valores[i]!== undefined )
                valoresObj[f.trim().toLowerCase()] = valores[i].trim();
            });
            seeders.push({
                tabla : nombreTabla[0],
                valores : valoresObj
            });
        });        
    });    
    console.log("seeders",seeders);
    return seeders;
}

function textoAPlural(text){
    if (text.charAt(text.length-1)=='n' || text.charAt(text.length-1)=='r'){
        return text + 'es';
    }
    if (text.charAt(text.length-1)=='a' || 
        text.charAt(text.length-1)=='e' || 
        text.charAt(text.length-1)=='i' || 
        text.charAt(text.length-1)=='o' || 
        text.charAt(text.length-1)=='u' 
    ){
        return text + 's';
    }
    return text;
    
}

function capitalizar(text){
    return text.charAt(0).toUpperCase() + text.slice(1);;
}

function convertirACamel(text) { 
    let texto = text;
    let letras = 'abcdefghijklmnopqrstuvwxyz';
    for (var i = 0; i < letras.length; i++) 
        texto = texto.replaceAll('_'+letras.charAt(i),letras.charAt(i).toUpperCase());
    return texto;
}

function convertirASnake(text) { 
    let texto = text;
    let letras = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();
    for (var i = 0; i < letras.length; i++) 
        texto = texto.replaceAll(letras.charAt(i),'_'+letras.charAt(i).toLowerCase());
    return texto;
}

function toJson(texto){
    //let regclass
    console.log("texto");
    let lines = texto.split("\n");
    let modo = "db";
    let arDb = [];
    let acDb = null;
    let acGroup = null;
    let acLink = null;
    lines.forEach(l => {
//        console.log();
        if (l.trim()=="") return;
        let Tabs = l.split("\t");
        let cTabs = l.split("\t").length-1;
        //console.log(`${l.trim()} (${cTabs})`);
        if (modo == "db"){
            if (cTabs == 1){
                modo="group";
                acDb = {db: Tabs[1].trim() , groups:[], apiconn:[]};
                arDb.push(acDb);
                return;
            }            
        }
        if (modo == "group"){
            if (cTabs == 1){
                modo="group";
                acDb = {db: Tabs[1].trim() , groups:[], apiconn:[]};
                arDb.push(acDb);
                return;
            }
            if (cTabs == 2){
                modo="field";
                if ( Tabs[2].trim().includes("[") ){
                    acLink = {name: Tabs[2].trim().replaceAll("[","").replaceAll("]",""),attributes:[]};
                    acDb.apiconn.push(acLink);
                }else{
                    acGroup = {name: Tabs[2].trim(),alias: Tabs[2].trim(), fields:[],seeder:[],apicustom:[],datacustom:[],apilink:[]};
                    acDb.groups.push(acGroup);}
                return;
            }            
        }
        if (modo == "field"){
            if (cTabs == 1){
                modo="group";
                acDb = {db: Tabs[1].trim() , groups:[], apiconn:[]};
                arDb.push(acDb);
                return;
            }
            if (cTabs == 2){
                modo="field";
                if ( Tabs[2].trim().includes("[") ){
                    acLink = {name: Tabs[2].trim().replaceAll("[","").replaceAll("]",""),attributes:[]};
                    acDb.apiconn.push(acLink);
                }else{
                    acGroup = {name: Tabs[2].trim(),alias: Tabs[2].trim(), fields:[],seeder:[],apicustom:[],datacustom:[],apilink:[]};
                    acDb.groups.push(acGroup);}                    
                return;
            }            
            if (cTabs == 3){
                modo="field";
                let values = Tabs[3].trim().split(":",2);
                console.log("line",l);
                console.log("Tabs",Tabs);
                console.log("values",values,l);           
                //field = {name: values[0].trim(), value:values[1].trim(), rel:relacional(values[1].trim(),values[0].trim())};
                if (values[0].trim() == "[seeder]"){
                    acGroup.seeder.push({data:"create",values:values[1].trim().split('|')});
                    return;
                }
                if (values[0].trim() == "[seeder-insert]"){
                    acGroup.seeder.push({data:"insert",values:values[1].trim().split('|')});
                    return;
                }
                if (values[0].trim() == "[apilink]"){
                    acGroup.apilink.push(apiLinkFormat(values[1].trim().toLowerCase()));
                    return;
                }
                if (values[0].trim() == "[api]"){
                    acGroup.apicustom.push(apiCustomFormat(values[1].trim().toLowerCase()));
                    return;
                }
                if (values[0].trim() == "[data]"){
                    acGroup.datacustom.push(dataCustomFormat(values[1].trim().toLowerCase()));
                    return;
                }
                if (values[0].trim() == "[url]"){
                    //console.log("acLink",acLink);
                    acLink.attributes["url"]=Tabs[3].replaceAll(values[0].trim()+":","");
                    return;
                }
                
                let field = {name: values[0].trim(), value:values[1].trim(), rel:relacional(values[1].trim(),values[0].trim())};
                acGroup.fields.push(field);
                
            }
        }
    });

    console.log(`arDb: `, arDb);

    arDb.forEach( d => {
		d.apiconn   = formatLink(d.apiconn);
	});
    arDb.forEach( d => {
        d.groups.forEach( g => {            
            let grouptemp  = formatearArray( g );
            let customApi  = g.apicustom;
            grouptemp.apis = getAllApis(grouptemp,customApi,d,g);            
            g['apis'] = grouptemp.apis;   
            g['data'] = grouptemp.data;
        });
    });
    /* add relations */
    arDb.forEach( d => {
        d.groups.forEach( g => {
            let apilink  = getAllApislinks(g.apilink);
            let grouptemp = formatearArrayRel( g, d.groups );
            g['apis'] = grouptemp.apis;
            g['data'] = grouptemp.data;    
			g['apilink'] = apilink;        
        });
    });

    //editorUml.setValue( toPlants(arDb) );
   // generarPlant(toPlants(arDb));
    console.log(`arDb: `, arDb);
    return arDb;
}
function formatLink(apiconn){
	let apiconsFormatter = {};
	apiconn.forEach( apicon =>{
		apiconsFormatter[apicon.name] = {};
		Object.keys(apicon.attributes).forEach( a=>{
			apiconsFormatter[apicon.name][a] = apicon.attributes[a];
		});
	});
	return apiconsFormatter;
}
//[api]:method=get|route=|query=modulo_id|in=|out=|type=auto

function getAllApislinks(apiLinks){    
    let apis = [];
    if (apiLinks==null || apiLinks==undefined || apiLinks.length==0) return apis;
    apiLinks.forEach( (api) => {		
		apis.unshift({
			method: api.method?api.method.toUpperCase():'GET',
			con:   api.con,
			filter:  api.filter,
			filterin:  api.filterin,
			addfield:  api.addfield,
			type:  api.type,
		});
    } );
    return apis;
}
function getAllApis(group,customApi,database,grp){    
    let apis = group.apis;
    if (customApi==null || customApi==undefined || customApi.length==0) return apis;
    customApi.forEach( (api) => {
		let rel = this.aRelacion(group.data['select'][api.rel]);
		if (api['type']=='customrel'){
			console.log("rel",rel);
			console.log("api",api);
			console.log("group.data",group.data);
            api['relroute']= `:${rel.field}/${api.route}`;
			apis.unshift({
				method: api.method?api.method.toUpperCase():'GET',
				route:  `:${rel.field}/${api.route}`,
				rel:  	group.data['select'][api.rel],
				in:     api.in?api.in:null,
				type:   'rel',
				out:    api.out.replaceAll("*",""),
			});
			let api_out = api.out.replaceAll("*","");
						
			let tempRelGroup = database.groups.find( g => g.name == rel.name );
			console.log("tempRelGroup",tempRelGroup);
			if (tempRelGroup){				
				group.data[api_out]={};
				let gcd = grp.datacustom.find(g=>g.name==api_out);
				console.log("gcd",gcd);
				gcd.fields.forEach(f => {
					let field = tempRelGroup.fields.find( fff=> fff.name == f);
					console.log("field",field);
					group.data[api_out][f] = field.value;
				});
			}
		}else{
			apis.unshift({
				method: api.method?api.method.toUpperCase():'GET',
				route:  api.route?api.route:'',
				query:  api.query,
				rel:  	api.rel!=undefined?(group.data[api.rel]):'',
				in:     api.in?api.in:null,
				type:   api.type?(api.type=='customrel'?'rel':api.type):'custom',
				out:    api.out?searchDataInverse(group,api, api.out):null,
			});
		}
        
    } );
    return apis;
}
function dataCustomFormat(value){
    let options = value.split("|");
    let objdata = {};
    options.forEach(op => {
        let values = op.trim().split("=");
        if (values[0].trim()=="name") objdata['name'] = values[1].trim();
        if (values[0].trim()=="fields") objdata['fields'] = values[1].trim().split(",");
        

        //objapi[values[0].trim()] = values[1].trim();
    });
    
    return objdata;
}
function apiLinkFormat(value){
	let objlink = [];
    let options = value.split("|");	
    options.forEach(op => {
        let values = op.trim().split("=");
        objlink[values[0].trim()] = values[1].trim();
	});
	return objlink;
}
function apiCustomFormat( value){
    
    let apiCustom = [];
    let options = value.split("|");
    let objapi = {};
    options.forEach(op => {
        let values = op.trim().split("=");
        objapi[values[0].trim()] = values[1].trim();
        //objapi[values[0].trim()] = values[1].trim();
        //apiCustom.push(objapi);
    });
    return objapi;
}
function apiFormat(name){
    return name.trim().toLowerCase().replaceAll("_","");
    //return name;
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
      };
      
      if (groupNor.hasOwnProperty('datacustom'))
      	groupNor.datacustom.forEach(dc => {
			group.data[`${dc.name}`]= {};
			dc.fields.forEach( f => {
                let name = '';
                let valuetype = '';
                let field_array = f.split(".");
                if (field_array.length == 2){
                    name = field_array[0];
                    valuetype = field_array[1];
                }else{
                    name = f;
                }

				if ( group.data.select.hasOwnProperty(name) ){
                    if (valuetype == "")           
                        group.data[`${dc.name}`][f] = group.data.select[f];
                    else
                        group.data[`${dc.name}`][name] = valuetype;
                }					
			});
		});
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

function toFields(data){
    let strArr = [];
    Object.keys(data).forEach( c => {
        //evitar las subconsultas
        if (!data[c].includes('[[') && !data[c].includes('[') ) 
            strArr.push(c);
    });
    return strArr.join(",");
}

function toValuesSeeder(data,values,uuids){
    let strArr = [];
    let counter_seed = 0;
    Object.keys(data).forEach( (c,i) => {
        if (!data[c].includes('[[') && !data[c].includes('[') ) 
            if (values[counter_seed]!=null){
                let regex = new RegExp('uuid\-[a-zA-Z_]+\-[0-9]{1,3}','gm');
                if ( regex.test(values[counter_seed]) == true ){
                    let num = values[counter_seed].match(/(?=uuid\-)?[a-zA-Z_]+\-[0-9]{1,3}/gm);
                    console.log("num",num);
                    if (uuids[num[0]]===undefined)
                        uuids[num[0]] = uuidv4();
                    strArr.push("'"+uuids[num[0]]+"'");                    
                }else                
                    strArr.push("'"+values[counter_seed]+"'");
                counter_seed++;
            }
            else {
                console.log("values",values,i,values[i],data);
                console.log("counter_seed",counter_seed);
                throw new Error('valor nulo!');
            }
    });
    return strArr.join(",");
}
function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

function toSeeder(dbs){
    let sql_array = [];
    let sql_texto = "";
    
    let uuids = {}
    dbs.forEach( (db)=> {
        db.groups.forEach( (group)=> {
            group.seeder.forEach( (seed)=>{
                let fields = toFields(group.data['create']);
                let values = toValuesSeeder(group.data['create'],seed.values,uuids) ;
                sql_array.push(`INSERT INTO ${group.name} (${fields}) VALUES (${values});`);
            } );
        });    
    });
    sql_texto = sql_array.join('\n');
    return sql_texto;
}

function toHuman(dbs){
    let testX = "";
    console.log("tohuman.dbs",dbs);
    dbs.forEach(db => {
        let clase = [];
        let relations = [];
        testX += `\t${db.db}\n`;

		if (db['apiconn'] !=undefined){
			Object.keys(db.apiconn).forEach(apicon_name => {				
				testX += `\t\t[${apicon_name}]\n`;
				Object.keys(db.apiconn[apicon_name]).forEach( apicon_attr =>{						
					testX += `\t\t\t[${apicon_attr}]:${db.apiconn[apicon_name][apicon_attr]}\n\n`;					
				});
			});
		}

        db.groups.forEach(group => {
            testX += `\t\t${group.name}\n`;
            data_create = group.data.select;
            let campos = [];
            
            data_create = group.data.select;
            Object.keys(data_create).forEach( d =>{
                    campos.push(`\t\t\t${d}:${data_create[d]}`);
            });
            testX += campos.join("\n");

            let seeders = [];
            data_seeder = group.seeder;
            data_seeder.forEach(seed => {
                if (seed.data == "create" )
                    seeders.push(`\n\t\t\t[seeder]:${seed.values.join("|")}`);
                else
                    seeders.push(`\n\t\t\t[seeder-${seed.data}]:${seed.values.join("|")}`);
            });            
            
            testX += seeders.join("");

            let apis_custom = [];
            data_apis = group.apis;
            let api_customrel_data = [];
            data_apis.forEach(api => {
                if(api.type=="custom"){
                    let custom_api_array = [];
                    Object.keys(api).forEach( k => custom_api_array.push(`${k.toLowerCase()}=${api[k]==null?'':searchData(group,k,api[k],api)}` ));                
                    //console.log("custom_api_array[custom_api_array.length-1]",custom_api_array[custom_api_array.length-1]);
                    //custom_api_array[custom_api_array.length-1] = searchData(group,custom_api_array[custom_api_array.length-1]);
                    //console.log("@custom_api_array[custom_api_array.length-1]",custom_api_array[custom_api_array.length-1]);
                    apis_custom.push(`\n\t\t\t[api]:${custom_api_array.join("|")}`);
                }
                if(api.type=="customrel"){
                    
                    console.log("---api_customrel_data.api",api);
                    //throw "err";
                    let custom_api_array = [];
                    Object.keys(api).forEach( k => custom_api_array.push(`${k.toLowerCase()}=${api[k]==null?'':group,k,api[k]}` ));
                    apis_custom.push(`\n\t\t\t[api]:${custom_api_array.join("|")}`);
                }
            });
            testX += apis_custom.join("");
            
            let data_apicustom = group.apicustom;            
            /*data_apicustom.forEach( api =>{              
                if(api.type=="customrel"){  
                    if (api.out!=null)
                        if (api.out.includes("*"))
                            api_customrel_data.push(api.out);                
                    if (api.in!=null)
                        if (api.in.includes("*"))
                            api_customrel_data.push(api.in);
                }
            });*/

            /*  PENDIENTE PARA AGREGAR DATOS CUSTOM
            let data_custom = Object.keys(group.data).filter( k => !(['select','create','insert'].includes(k)));            
            let campos_extra = [];
            data_custom.forEach( d =>{
                campos_extra.push(`\n\t\t\t[${d}]:${group.data[d]}`);
            });
            testX += campos_extra.join("");
            */
            if (api_customrel_data.length >0)
                console.log("---api_customrel_data",api_customrel_data);
            let data_custom = [];
            if (group.datacustom!=undefined){
                let data_data = group.datacustom;
                data_data.forEach(data => {
                    let custom_data_array = [];
                    if (api_customrel_data.includes(`*${data.name}`))
                        custom_data_array.push(`name=*${data.name}`);
                    else
                        custom_data_array.push(`name=${data.name}`);                        
                    custom_data_array.push(`fields=${data.fields.join(",")}`);
                    data_custom.push(`\n\t\t\t[data]:${custom_data_array.join("|")}`);
                    
                });
                testX += data_custom.join(""); 
            }
            
			/* format [apilink]:method=GET|conn=tre_personal_persons|filter=code,ci|filterin=code,carnet|addfield=link|type=add */
            let data_apilink_ar = [];
            if (group.apilink!=undefined){
                let data_apilink = group.apilink;
                data_apilink.forEach(data => {
					data_apilink_ar.push(`\n\t\t\t[apilink]:${Object.keys(data).map(dkey=>`${dkey}=${data[dkey]}`).join("|")}`);
                });
                testX += data_apilink_ar.join(""); 
            }

            let api_custom_rel = [];
            if (group.apicustom!=undefined){
                let data_apidata = group.apicustom.filter(aa=>aa.type=='customrel');				
                data_apidata.forEach(data => {
                    api_custom_rel.push(`\n\t\t\t[api]:${Object.keys(data).map(dkey=>`${dkey}=${data[dkey]}`).join("|")}`);
                });
            }

			testX += api_custom_rel.join(""); 

            testX += `\n\n`;             
        });
    });

    return testX;
}
function searchData(group, key, apiValue,api){
    //let regOut = /(?<=out=)\w+/g;
    //let valueOut = apiValue.match(regOut); 
    
    if (key != "out") return apiValue;    
    
    let selectData = Object.keys(group.data).filter( k=> k == apiValue );

    let apiCustom =  group.apicustom.filter(ac => ac.route == apiValue)[0]; 
    
    let apiCustomApi =  group.apicustom.filter(ac => ac.route == api.route)[0]; 

    console.log('---apiCustom',apiCustom,apiValue);
    if (apiCustom!=undefined)
        if (apiCustom.out == "*"+apiValue) return apiCustom.out;
    
    let fieldNames = [];
    console.log("apiValue",apiValue);
    
    if (selectData.length != 0){
        console.log("selectData[]",selectData);
        selectData = selectData[0];
        console.log("selectData",selectData);
        console.log("group.data[selectData]",group.data[selectData]);

        

        Object.keys(group.data[selectData]).forEach(k => {fieldNames.push(k)});
    }
        
    console.log("searchData.fieldNames",fieldNames.join(''));
    return fieldNames.join(',');
}
function searchDataInverse(group, api, api_out){
    let data_name;
    if(api_out.includes("*")){
        data_name = api_out.trim().replaceAll("*","").trim();
    }else{
        data_name = `custom_${api.route}`;
        group.data[data_name] = {}
        api_out.split(",").forEach(field_custom => {
            let name = field_custom;
            let splitName = field_custom.split(".");
            console.log("splitName.length",splitName.length);
            if (splitName.length==0){
                let field_type = group.data.select[name];
                console.log("field_type",name);
                group.data[data_name][name] = field_type;
            }else{
                name = splitName[0];
                group.data[data_name][name] = splitName[1];
            }
        })
    }
    //group.data[data_name] = 

    return data_name;
    
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

    relation_counts = [];
    relations.forEach(r => {
        if (relation_counts[r.reltable] == undefined )
            relation_counts[r.reltable] = 0;
        relation_counts[r.reltable]++;
    });
    relations.forEach(r => {
        if (relation_counts[r.table] == undefined )
            relation_counts[r.table] = 0;
        relation_counts[r.table]++;
    });
    console.log("relation_counts : ", relation_counts);

    relations.forEach(r => {
        let line_width = ''
        for(let ix = 0; ix < relation_counts[r.table]; ix++ )
            line_width+='-';
        let tTest = `${r.reltable} *${line_width} ${r.table}`;
        if ( testX.includes(tTest) )
            testX = testX.replaceAll(tTest,`${r.reltable} *${line_width}* ${r.table}`);
        else
            testX += `${r.table} *${line_width} ${r.reltable}\n`;
    });
    //console.log("toPlant2str",testX);
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