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
                <textarea class="form-control form-control-sm" rows="4"></textarea>
            </div>`);
            grupoData.find("label").html(g.name);
            //grupoData.find("textarea").html(JSON.stringify(g.data.select));
            grupoData.find("textarea").html(JSON.stringify(g.data.select).replaceAll('{','').replaceAll('}','').replaceAll('"','').replaceAll(",","\n"));
            content.append(grupoData);

            g.apis.forEach( (a => {
                let apiTemp = $(`
                <div class="form-group form-inline bg-light ">
                    <label></label>
                    <input type="text" class="form-control form-control-sm">
                </div>`);
                apiTemp.find("label").html(a.method);
                let adds = ''
                if (a.method == "GET"){
                    adds = "?page=1&size=10&sortBy="+Object.keys(g.data.select)[0]+"&descending=false"
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