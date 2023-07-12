let data_db;

$.ajax({ 
    url:"http://172.20.50.60:9988/db_all", dataType: 'json', data: {}, method: 'GET' })
        .done(function (data) {
            data_db = data;
            console.log("get_db > ", data);
            cargarDBs(data);
        }
);

function cargarDBs(data){
    $("#Contenido").empty();
    data.forEach((element,index) => {
        let template = $(
        `<div class="card col-12 grupos mb-3">
            <div class="row mb-3 ">    
                <label for="inputEmail3" class="col-sm-2 col-form-label col-form-label-sm">DB</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control form-control-sm inputName">
                </div>
                <div class="col-sm-2">
                    <span class="btn btn-sm btn-primary" onclick="agregarGrupo(event,${index})">Agregar Grupo</span>
                </div>
            </div>
            <div class="row mb-0 ">
                <label for="inputEmail3" class="col-sm-2 col-form-label col-form-label-sm">Auto</label>
                <div class="col-sm-auto">
                <input type="checkbox" checked="true" class="form-control-checkbox form-control-sm" >
                </div>
            </div>
            APIs
            <div class="row grupos col-12 container-fluid text-center ">
                
            </div>
        </div>`);
        //<span class="btn btn-sm btn-primary">Exportar</span>
        template.find(".inputName").val(element.db);        
        let gruposDiv = $(template.find(".grupos"));
        element.groups.forEach( g =>{
            let content = $("<div class='card rounded border col-3 shadow container-fluid text-center '></div>");
            let grupoData = $(`
            <div class="form-group form-inline bg-light ">
                <label>Sharks</label>
                <textarea class="form-control form-control-sm" rows="7"></textarea>
                <button type="button" class="btn-gen-angular btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#modalAngular">Generar CRUD - Angular</button>
                <button type="button" class="btn-gen-spring btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#modalSpring">Generar API - Spring</button>
                <button type="button" class="btn-gen-laravel btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#modalLaravel">Generar API - Laravel</button>
            </div>`);

            

            grupoData.find("label").html(g.name);
            //grupoData.find("textarea").html(JSON.stringify(g.data.select));
            grupoData.find("textarea").html(JSON.stringify(g.data.select).replaceAll('{','').replaceAll('}','').replaceAll('"','').replaceAll(",","\n"));
            content.append(grupoData);
           
            $(grupoData.find(".btn-gen-angular")).click( (e) => {
                console.log("here", g);
                let tbodyFields = $(".tbodyFields");
                tbodyFields.empty();
                Object.keys(g.data.create).forEach( f => {
                    let tr = $(`<tr><td><input class="form-control form-control-sm" disabled type="text" value="${f}"></td>
                    <td><input class="form-control form-control-sm"  type="text" value="${f}"></td>
                    <td><select class="form-select form-select-sm" value="${campo(g.data.create[f])}"><option value="text" ${esdefault(g.data.create[f],'text')}>text</option><option value="number" ${esdefault(g.data.create[f],'number')}>number</option><option value="date" ${esdefault(g.data.create[f],'date')}>date</option><option value="relational" ${esdefault(g.data.create[f],'relational')}>relational</option></select></td>
                    <td><input class="form-check-input form-checkbox-sm" type="checkbox"  ></td>
                    <td><input class="form-check-input form-checkbox-sm" type="checkbox"  ></td>
                    <td><input class="form-check-input form-checkbox-sm" type="checkbox"  ></td>
                    <td><input class="form-check-input form-checkbox-sm" type="checkbox"  ></td>
                    <td><input class="form-check-input form-checkbox-sm" type="checkbox"  ></td>
                    <td><input class="form-check-input form-checkbox-sm" type="checkbox"  ></td>
                    <td><input class="form-check-input form-checkbox-sm" type="checkbox"  ></td>                                    
                    <td><select class="form-select form-select-sm" value="${campo(g.data.create[f])}"><option value="text" ${esdefault(g.data.create[f],'text')}>text</option><option value="number" ${esdefault(g.data.create[f],'number')}>number</option><option value="date" ${esdefault(g.data.create[f],'date')}>date</option><option value="relational" ${esdefault(g.data.create[f],'relational')}>relational</option></select></td>
                    <td><input class="form-check-input form-checkbox-sm" type="checkbox"  ></td>
                    <td><input class="form-control form-control-sm"  type="value" value="0"></td>
                    <td><input class="form-check-input form-checkbox-sm" type="checkbox"  ></td>
                    <td><input class="form-control form-control-sm"  type="value" value="255"></td>
                    <td><input class="form-check-input form-checkbox-sm" type="checkbox" disabled ${esrelacionalchecked(g.data.create[f])} ></td>                                         
                    <td><input class="form-control form-control-sm"  type="text" value="${relacionalval(g.data.create[f],"field")}"></td>
                    <td><input class="form-control form-control-sm"  type="text" value="nombre"></td></tr> `);
                    tbodyFields.append(tr);
                });

            });

            g.apis.forEach( (a => {
                let apiTemp = $(`
                <div class="form-group form-inline bg-light ">
                    <label></label>
                    <input type="text" class="form-control form-control-sm">
                </div>`);
                apiTemp.find("label").html(a.method);
                let adds = ''
                if (a.method == "GET"){
                    adds = "?page=0&size=10&sortBy="+Object.keys(g.data.select)[0]+"&descending=false"
                }
                if (a.route== "")
                    apiTemp.find("input").val(`http://172.20.50.60:9988/${element.db}/${g.name}${adds}`);
                else
                    apiTemp.find("input").val(`http://172.20.50.60:9988/${element.db}/${g.name}/${a.route}${adds}`);
                content.append(apiTemp);
            }));           
            gruposDiv.append(content);
        });
        //grupos.append(tempData);
        //grupos.append(tempData);
        $("#Contenido").append(template);
    });    
}

function campo(valor){
    if (valor.includes("[")){
        //console.log("include",valor);
        return "relational";
    }

    let temp_valor = valor.split("|");

    if (temp_valor[0] == "string") return "text";
    if (temp_valor[0] == "number") return "number";
    

    return temp_valor[0];
}
function esdefault(valor,compara){    
    if (valor.includes("[")){
        return "selected";
    }
    let temp_valor = valor.split("|");
    if (temp_valor[0] == "string") return "text" == compara?"selected":"";
    if (temp_valor[0] == "number") return "number" == compara?"selected":"";

    return temp_valor[0] == compara?"selected":"";
}
function relacional(valor){    
    if (valor.includes("[")){
        if (valor.includes("[[")){
            let val_clean = valor.trim().replaceAll("[","").replaceAll("]","").split("|");
            let dato = { name:val_clean[0].trim(),field:val_clean[1].trim(),ownfield:val_clean[2].trim(),array:true };
            console.log("relational_dato",dato);
            return dato;
        }else{
            let val_clean = valor.trim().replaceAll("[","").replaceAll("]","").split("|");
            let dato = { name:val_clean[0].trim(),field:val_clean[1].trim(),ownfield:val_clean[2].trim(),array:false };
            console.log("relational_dato",dato);
            return dato;
        }

    }
    return undefined;
}
function relacionalval(valor,prop){
    let value = relacional(valor);
    console.log("relacionalval.valor",valor);
    console.log("relacionalval.value",value);
    if ( value!==undefined )
        return value[prop];
    else 
        return "";
}
function esrelacional(valor){    
    if (valor.includes("["))
        return true;
    return false;
}
function esrelacionalchecked(valor){    
    if (valor.includes("["))
        return "checked";    
    return "";
}

function agregarGrupo(event,index){
    let obj = $(event.target);
    let content = $(`<div data-index='${index}' class='card rounded border col-3 shadow container-fluid text-center'>
                <div class="col-sm-10">
                    <label>Tabla|Grupo</label>
                    <input type="text" class="form-control form-control-sm inputGroupName">
                </div>
                <div class="form-group form-inline ">
                    <textarea class="form-control form-control-sm inputData" rows="4">id:number|pk</textarea>
                <div class="col-sm-2">
                    <span class="btn btn-sm btn-primary" onclick="guardarGrupo(event)">Guardar</span>
                </div>
            </div> `);
    $(obj.parent().parent().parent().find(".grupos")).append(content);
}
function guardarGrupo(event){
    let obj = $(event.target).parent().parent().parent();
    let inputGroupName = $(obj.find(".inputGroupName")).val();
    let inputData = $(obj.find(".inputData")).val();
    let lines = inputData.trim().split("\n");
    let apiData = {};
    let apiDataIns = {};
    lines.forEach(l => {
        let lArray = l.trim().split(":");
        let n = lArray[0].trim();
        let v = lArray[1].trim();
        apiData[n] = v;
    });

    apiDataIns = {... apiData};
    delete apiDataIns.id; 

    let group = {        
        name : inputGroupName,
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
      //console.log("obj.index",obj.attr("data-index"));
    data_db[obj.attr("data-index")].groups.push(group);
    cargarDBs(data_db);
    console.log(data_db);
    saveDBs(data_db);
}

function saveDBs(data){
    $.ajax({ 
        url:"http://172.20.50.60:9988/save_all", dataType: 'json', data: {content: JSON.stringify(data)}, method: 'POST' })
            .done(function (data) {
                console.log("get_db > ", data);
            } );
    
}