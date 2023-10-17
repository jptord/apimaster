let db_index_selected = -1;
let group_index_selected = -1;
$("#xpackagenamex").on("input", (e)=>{
    let valRep = $("#xpackagenamex").val().replaceAll(".","/");
    $("#xpackagenamepathx").val(`/java/${valRep}`);
});

function toListSpring(dbs){
    console.log("toListSpring",data_db);
    let listado = $("#listado-spring");
    listado.empty();
    let dbs_camel = dbsToCamelCase(dbs);
    dbs_camel.forEach( (db,db_index) => { 
        let li = $(`<li><span class="caret active ">${db.db}</span></li>`);
        if (db.groups.length>0){
            let ul = $(`<ul class="nested active"></ul>`);
            db.groups.forEach( (g,group_index) => { 
                let li_group = $(`<li class="liGroup" data-group-index="${group_index}" data-db-index="${db_index}" ><span class="caretNo ">${g.name}</span></li>`);                                
                ul.append(li_group);
                li_group.on('click',function (e){
                    db_index_selected = db_index;
                    group_index_selected = group_index;
                    spring_clickOnGroup(g,e);
                });
            });
            li.append(ul);
        }
        listado.append(li);
    });

}

function spring_clickOnGroup(group, event){
    console.log("group",group);
    $("#contentSpringGen").removeClass("d-none");
    cargarFormularioSpring(group);
}

function formatField(field){
    let array   = false;
    let rel     = null;
    let type    = 'N/T';
    let name    = field.name;
    let pk      = '';
    let options = null;
    
    if (field.value.includes("[")){
        let text_rel = field.value.replaceAll("[","").replaceAll("]","");
        let rel_values = text_rel.split("|");
        console.log("rel_values",rel_values);
        type="rel";
        let rel_data = {name:field.name ,table_rel:rel_values[0],field_rel:rel_values[1],field_own:rel_values[2],array:array};
        rel = rel_data;
        if (field.value.includes("[[")){
            array = true;
            let rel_data_array = {name:field.name ,table_rel:rel_values[0],field_rel:rel_values[1],field_own:rel_values[2],array:array};
            rel = rel_data_array;
        }

    }else{
        if (field.value.includes("|")){
            let options_data = field.value.split("|");
            let options = [];
            options_data.forEach( (option,index)=>{
                if (option.includes("pk")){
                    options.push({type:"pk",value:true});
                    pk = true;
                }else{
                    options.push({type:option,value:true});
                    type = option;
                }
            });
        }else{
            type = field.value;
        }
    }

    return {name:name,type:type,pk:pk,rel:rel,array:array};
}

function printRel(relData){
    let result = [];
    if (relData!=null){
        console.log("relData",relData);
        result.push(`name:<span data-cabecera='relacion_index'>${relData.name}</span>`);
        result.push(`table_rel:<span data-cabecera='relacion_table_rel'>${relData.table_rel}</span>`);
        result.push(`field_rel:<span data-cabecera='relacion_field_rel'>${relData.field_rel}</span>`);
        result.push(`field_own:<span data-cabecera='relacion_field_own'>${relData.field_own}</span>`);
        result.push(`array:<span data-cabecera='relacion_array'>${relData.array}</span>`);
    }
    return result.join("<br>");
}
function printRel2(relData){
    let result = [];
    console.log("printRel2.relData:",relData);
    if (relData!=null){
        console.log("relData",relData);
        result.push(`name:<span data-cabecera='relacion_index'>${relData.index}</span>`);
        result.push(`table_rel:<span data-cabecera='relacion_table_rel'>${relData.name}</span>`);
        result.push(`field_rel:<span data-cabecera='relacion_field_rel'>${relData.field}</span>`);
        result.push(`field_own:<span data-cabecera='relacion_field_own'>${relData.ownfield}</span>`);
        result.push(`array:<span data-cabecera='relacion_array'>${relData.array}</span>`);
    }
    return result.join("<br>");
}
function snakeToHuman(text){
    return text.toLowerCase().replaceAll("_", " ").split(" ").map( w => w[0].toUpperCase()+w.slice(1)).join(" ");
}

function cargarFormularioSpring(group){
    let name = group.name;
    let name_snake = convertirASnake(name);
    let name_camel = convertirACamel(name);
    let name_cap_camel = capitalizar(name_camel);
    let name_camel_plural = textoAPlural(name_camel);
    let name_cap = capitalizar(name);
    let name_cap_plural = textoAPlural(name_cap);
    
    $("#xnombresnakex").val(name_snake);
    $("#xnombrecamelx").val(name_camel);
    $("#xnombrecapcamelx").val(name_cap_camel);
    $("#xnombrecamelpluralx").val(name_camel_plural);
    $("#xtextx").val(snakeToHuman(name_cap));
    $("#xtextapix").val(snakeToHuman(name_cap).toUpperCase());
    $("#xtextpluralx").val(textoAPlural(snakeToHuman(name_cap)));

    /*$("#xnombrecamelx").val(group.name);
    $("#xnombrecapcamelx").val(group.name);        
    $("#xnombrecamelpluralx").val(group.name);
    $("#xtextx").val(group.name);
    $("#xtextpluralx").val(group.name);*/
    let tabSpringFields = $("#tabSpringFields tbody");
    tabSpringFields.empty();
    //group.fields.forEach( (field,index_field) => {

        Object.keys(group.data.create).forEach( field => {
            let r = relacional(group.data.create[field],field);       
            console.log("f:",group.data.create[field]);
            console.log("r:",r);           
            if (r!==undefined) {
                if (r.array) {
                    let tr = $("<tr>");
                    let field_format = formatField({name:field,value:group.data.create[field]});
                    //console.log("field_format",field_format);
                    tr.append(`<td data-cabecera='campo'>${field}</td>`);
                    tr.append(`<td data-cabecera="tipo">rel</td>`);
                    tr.append(`<td data-cabecera="pk">false</td>`);
                    tr.append(`<td data-cabecera="fk">true</td>`);
                    tr.append(`<td>${printRel2(r)}</td>`);
                    tabSpringFields.append(tr);
                    return;
                }
                else
                    return;
            }

            let forRel = null;
            if (!esPKbool(group.data.create[field])){
                Object.keys(group.data.create).forEach( fr => {
                    let rr = relacional(group.data.create[fr],fr);
                    if (rr===undefined) return;
                    if (rr.ownfield == field)
                        forRel = rr;
                });
            }

            let tr = $("<tr>");
            //let field_format = formatField(group.data.create[field]);
            let field_format = formatField({name:forRel,value:group.data.create[field]});
            //console.log("field_format",field_format);
            tr.append(`<td data-cabecera='campo'>${field}</td>`);
            tr.append(`<td data-cabecera="tipo">${field_format.type}</td>`);
            tr.append(`<td data-cabecera="pk">${field_format.pk}</td>`);
            tr.append(`<td data-cabecera="fk">${forRel?'true':''}</td>`);
            tr.append(`<td>${printRel2(forRel)}</td>`);
            tabSpringFields.append(tr);
            return;            
        });
   // } );
}


$("#btnGenerarSpring").click((e)=>{     
    $.ajax({ 
        url:"/getfrontend?framework=spring", dataType: 'json', data: {}, method: 'GET' }).done(function (data) {
            //$("#btnZipSpring").removeClass("d-none");
            $("#btnInjectSpring").removeClass("d-none");
            let params = setParamsSpring(data);
           // let cabeceras = [];
           // data.cabecera = cabeceras;
            data.params = params;
            console.log("spring",data);

            data.cabecera = crearCabecerasSpring(data);

            prepareHeadersSpring(data);
    });
});

$("#btnInjectSpring").click(e=>{
    $.ajax({ url:"/injectspring",xhr: function() {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 2) {
                if (xhr.status == 200) {
                    xhr.responseType = "blob";
                } else {
                    xhr.responseType = "text";
                }
            }
        };
        return xhr;
    }, data: {data:JSON.stringify(data_generated)}, method: 'POST' })
        .done(function (data) {
            //console.log("btnZip > ", data);
            const url = window.URL.createObjectURL(data);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            // the filename you want
            console.log("data_generated:",data_generated);
            a.download = `spring-${data_generated.params.xnombrex}.zip`;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
        });
});
function setParamsSpring(data){
    let params = {};
    Object.keys(data.params).forEach( p => {
        let par = $(`[data-param="${p}"]`);
        if (par.length !=0)
            params[p] = par.val();
        else
            params[p] = data.params[p];
    } );
    return params;
}
function crearCabecerasSpring(data){
    let cabeceras = [];
    let tbodyFields = $("#tabSpringFields tbody");
    tbodyFields.find('tr').each((i,e) => {
        cabeceras.push({
            campo :                 $(e).find(`[data-cabecera="campo"]`).text(),
            tipo :                  $(e).find(`[data-cabecera="tipo"]`).text(),
            pk :                    $(e).find(`[data-cabecera="pk"]`).text()=='true',
            fk :                    $(e).find(`[data-cabecera="fk"]`).text()=='true',
            relacion_table_rel :    $(e).find(`[data-cabecera="relacion_table_rel"]`).text(),
            relacion_field_own :    $(e).find(`[data-cabecera="relacion_field_own"]`).text(),
            relacion_field_rel :    $(e).find(`[data-cabecera="relacion_field_rel"]`).text(),
            relacion_index :        $(e).find(`[data-cabecera="relacion_index"]`).text(),
            esarray :               $(e).find(`[data-cabecera="relacion_array"]`).text()=='true',
        });
    });
    console.log("cabeceras" , cabeceras );
    return  cabeceras;
}
function prepareHeadersSpring(data){
    let xcabecerasx = {};
    data.cabecera.forEach(campo => {
        xcabecerasx[campo.campo] = {
            visible: campo.visible,
            buscable: campo.buscable,
            buscableCheck: campo.buscablecheck,
            visibleCheck: campo.visiblecheck,
            sortable: campo.sortable,
            filtrable: campo.filtrable,
            texto: campo.texto,
            colsize: campo.colsize,
            filtrotipo: campo.filtrabletipo,
        };
        if (campo.esrelacion){
            xcabecerasx[campo.campo]['mascara'] = {
                campo: campo.relacion_index,
                valor: campo.relacion_nombre
            } ;
        }
    });
    console.log("xcabecerasx.generated",xcabecerasx);
    data.params['xcabecerasx'] = JSON.stringify(xcabecerasx);
    generateHeadersSpring(data);
    addFilesSpring(data);
    
    
};

function textToJavatype(txt_tipo){
    if (txt_tipo.toLowerCase() == 'string' ) return 'String';
    if (txt_tipo.toLowerCase() == 'date' ) return 'Date';
    if (txt_tipo.toLowerCase() == 'int' ) return 'int';
    if (txt_tipo.toLowerCase() == 'boolean' ) return 'boolean';
    if (txt_tipo.toLowerCase() == 'number' ) return 'int';
    if (txt_tipo.toLowerCase() == 'double' ) return 'double';
}

function textToSqltype(txt_tipo){
    if (txt_tipo.toLowerCase() == 'string' ) return 'VARCHAR(255)';
    if (txt_tipo.toLowerCase() == 'date' ) return 'timestamp';
    if (txt_tipo.toLowerCase() == 'int' ) return 'INT';
    if (txt_tipo.toLowerCase() == 'boolean' ) return 'boolean';
    if (txt_tipo.toLowerCase() == 'number' ) return 'INT';
    if (txt_tipo.toLowerCase() == 'double' ) return 'FLOAT';
}


function generateHeadersSpring(data){
    generateEntity(data);
    generateRepository(data);
    generateService(data);
    generateCreatecmd(data);
    generateUpdatecmd(data);
    generateRestRequest(data);
    generateRestResponse(data);
    generateController(data);
    generateChangelog(data);
    generateApiCustom(data);

    data_generated = data;
    console.log("data_generated",data_generated);
}

function generateChangelog(data){
    let xfieldschangelogx = '';
    let xfieldschangelogx_array = [];

    xfieldschangelogx_array.push(`\t<changeSet id="${data.params.xnombresnakex}-1" author="jtordoya (generated)">\n\t\t<createTable tableName="${data.params.xnombresnakex}">`);

    data.cabecera.forEach( cabecera => {
        let javatype = textToJavatype(cabecera.tipo);
        let javaname = convertirACamel(cabecera.campo);
        let javanamecap = capitalizar(javaname);
        let sqlname = convertirASnake(cabecera.campo);
        let sqltype = textToSqltype(cabecera.tipo);
        if (cabecera.tipo == 'rel'){
            return;
        };
        let xfieldschangelogx_line = '';

        if (cabecera.tipo == "uuid"){
            xfieldschangelogx_line += `\t\t\t<column defaultValueComputed="uuid_generate_v4()" name="id" type="uuid">\n`;
            xfieldschangelogx_line += `\t\t\t\t<constraints nullable="false" primaryKey="true" primaryKeyName="pk_${data.params.xnombresnakex}"/>\n`;
            xfieldschangelogx_line += `\t\t\t</column>\n`;
            xfieldschangelogx_array.push(xfieldschangelogx_line);

        }else {
            let jointext = '';
            if (cabecera.fk == true){
                let sqlnamerel = convertirASnake(cabecera.relacion_field_rel);
                let relcameltable = convertirACamel(cabecera.relacion_table_rel);
                let relcameltablecap = capitalizar(relcameltable);
                let relcamelfield = convertirACamel(cabecera.relacion_field_rel);
                let relcamelfieldown = convertirACamel(cabecera.relacion_field_own);
                let relcamelfieldcap = capitalizar(relcamelfieldown);
                
                //javatype = 'UUID';                
                xfieldschangelogx_line += `\t\t\t<column name="${sqlname}" type="UUID">\n`;
                xfieldschangelogx_line += `\t\t\t\t<constraints nullable="false"/>\n`;
                xfieldschangelogx_line += `\t\t\t</column>\n`;
                xfieldschangelogx_array.push(xfieldschangelogx_line);
            }else {
                xfieldschangelogx_line += `\t\t\t<column name="${sqlname}" type="${sqltype}">\n`;
                xfieldschangelogx_line += `\t\t\t\t<constraints nullable="false"/>\n`;
                xfieldschangelogx_line += `\t\t\t</column>\n`;
                xfieldschangelogx_array.push(xfieldschangelogx_line);
            }
        }
    });
    xfieldschangelogx_line = '';
    xfieldschangelogx_line += `\t\t\t<column defaultValueBoolean="false" name="deleted" type="boolean">\n`;
    xfieldschangelogx_line += `\t\t\t\t<constraints nullable="false"/>\n`;
    xfieldschangelogx_line += `\t\t\t</column>\n`;
    xfieldschangelogx_line += `\t\t\t\t<column defaultValueNumeric="0" name="version" type="bigint">\n`;
    xfieldschangelogx_line += `\t\t\t\t<constraints nullable="false"/>\n`;
    xfieldschangelogx_line += `\t\t\t</column>\n`;
    xfieldschangelogx_line += `\t\t\t<column defaultValueComputed="now()" name="created_at" type="timestamp">\n`;
    xfieldschangelogx_line += `\t\t\t\t<constraints nullable="false"/>\n`;
    xfieldschangelogx_line += `\t\t\t</column>\n`;
    xfieldschangelogx_array.push(xfieldschangelogx_line);

    xfieldschangelogx_array.push(`\t\t</createTable>\n\t</changeSet>`);
    data.params['xfieldschangelogx'] = xfieldschangelogx_array.join("\n");  
}

function generateController(data){
    let xsetfieldscreatex = '';
    let xcontrolllercreatefieldsx_array = [];
    let xcontrolllerupdatefieldsx_array = [];
    let xcontrollerrelx_array = [];

    data.cabecera.forEach( cabecera => {
        let javatype = textToJavatype(cabecera.tipo);
        let javaname = convertirACamel(cabecera.campo);
        let javanamecap = capitalizar(javaname);
        let sqlname = convertirASnake(cabecera.campo);
        let sqltype = textToSqltype(cabecera.tipo);
        if (cabecera.tipo == 'rel'){
            xcontrollerrelx_array.push(generateRelationController(cabecera,{
                javatype    : javatype,
                javaname    : javaname,
                javanamecap : javanamecap,
                sqlname     : sqlname,
                sqltype     : sqltype
            } ));
            return;
        };
        let xcontrolllercreatefieldsx_line = '';
        let xcontrolllerupdatefieldsx_line = '';

        if (cabecera.tipo == "uuid"){
            
        }else {
            let jointext = '';
            if (cabecera.fk == true){
                let sqlnamerel = convertirASnake(cabecera.relacion_field_rel);
                let relcameltable = convertirACamel(cabecera.relacion_table_rel);
                let relcameltablecap = capitalizar(relcameltable);
                let relcamelfield = convertirACamel(cabecera.relacion_field_rel);
                let relcamelfieldown = convertirACamel(cabecera.relacion_field_own);
                let relcamelfieldcap = capitalizar(relcamelfieldown);
                
                //javatype = 'UUID';
                xcontrolllercreatefieldsx_line += `\t\t\t\t.${relcamelfieldown}(request.get${relcamelfieldcap}())`;
                xcontrolllerupdatefieldsx_line += `\t\t\t\t.${relcamelfieldown}(request.get${relcamelfieldcap}())`;
            }else {
                if (cabecera.tipo == 'boolean'){
                    xcontrolllercreatefieldsx_line += `\t\t\t\t.${javaname}(request.is${javanamecap}())`;
                    xcontrolllerupdatefieldsx_line += `\t\t\t\t.${javaname}(request.is${javanamecap}())`;
                }else{
                    xcontrolllercreatefieldsx_line += `\t\t\t\t.${javaname}(request.get${javanamecap}())`;
                    xcontrolllerupdatefieldsx_line += `\t\t\t\t.${javaname}(request.get${javanamecap}())`;
                }
            }
            xcontrolllercreatefieldsx_array.push(xcontrolllercreatefieldsx_line);
            xcontrolllerupdatefieldsx_array.push(xcontrolllerupdatefieldsx_line);
        }
    });
    data.params['xcontrolllercreatefieldsx'] = xcontrolllercreatefieldsx_array.join("\n"); 
    data.params['xcontrolllerupdatefieldsx'] = xcontrolllerupdatefieldsx_array.join("\n");     
    data.params['xcontrollerrelx'] = xcontrollerrelx_array.join("\n");     
}    

function generateApiCustom(data){
    let xcontrollerapicustomx = '';
    let xcontrollerapicustomx_array = [];
    let xqueryservicex = '';
    let xqueryservicex_array = [];

    let gr = data_db[db_index_selected].groups[group_index_selected];
    let recursos_array = [];
    let apis = [];
    console.log("--gr--", gr);
    apis = gr.apis;    
    Object.keys(gr.data.create).forEach(f => {
        let rel_rel = esRelacion(gr.data.create , f);
        if (rel_rel==null){
            let tipo = gr.data.create[f];
            if (tipo == "string")
                recursos_array.push(`\t\t\trecurso == null ? cb.conjunction() : cb.like(cb.lower(root.get("${f}").as(String.class)), recurso)`);
        }
    });
    
    apis.forEach( api => {
        if (api.type != 'custom') return ;        
        let query = '';
        let conditions = '';
        let xconditionx_array = '';
        let xqueryservicex = '';
        if (api.query != null){
            query = api.query.split(",");
            queryRequestParam = query.map( q => `@RequestParam(required = false) String ${convertirACamel(q)}`);
            xconditionx_array = query.map( q => ` cb.equal(root.get("${convertirACamel(q)}").as(String.class), ${convertirACamel(q)}),`);
            query = ',\n\t\t'+ queryRequestParam.join(",\n\t\t");
            conditions = '\n\t\t'+ xconditionx_array.join(",\n\t\t");
        }

        let xcontrollerapicustomx_line = '';
        xcontrollerapicustomx_line += `\t@Operation(summary = "[API custom] Obtener ${  snakeToHuman(api.route) }")\n`;
        xcontrollerapicustomx_line += `\t@GetMapping("${api.route}")\n`;
        xcontrollerapicustomx_line += `\tpublic PageResponse<${data.params.xnombrecapcamelx}ListResponse> findAll(\n`;
        xcontrollerapicustomx_line += `\t\t@RequestParam(defaultValue = "1") Integer page,\n`;
        xcontrollerapicustomx_line += `\t\t@RequestParam(defaultValue = "10") Integer size,\n`;
        xcontrollerapicustomx_line += `\t\t@RequestParam(defaultValue = "id") String sortBy,\n`;        
        xcontrollerapicustomx_line += `\t\t@RequestParam(defaultValue = "false") boolean descending,\n`;
        xcontrollerapicustomx_line += `\t\t@RequestParam(required = false) String keyword${query}) {\n`;
        xcontrollerapicustomx_line += `\t\tpage = page<1? 1:page;\n`;
        xcontrollerapicustomx_line += `\t\tPageable pageable = PageableUtil.of(page-1, size, sortBy, descending);\n`;
        xcontrollerapicustomx_line += `\t\tString recurso = keyword == null ? null : "%" + keyword.toLowerCase() + "%";\n`;
        xcontrollerapicustomx_line += `\t\tPage<${data.params.xnombrecapcamelx}> configuracionPage = ${data.params.xnombrecamelx}Repository.findAll((Specification<${data.params.xnombrecapcamelx}>) (root, query, cb) -> cb.and(\n`;
        xcontrollerapicustomx_line += `\t\t${conditions}\n`;
        xcontrollerapicustomx_line += `\t\tcb.or( \n`;
        xcontrollerapicustomx_line += recursos_array.join(",\n");
        xcontrollerapicustomx_line += `\t\t)), pageable);\n`;

        //xcontrollerapicustomx_line += `\t\tPage<${data.params.xnombrecapcamelx}> configuracionPage = {xnombrecamelx}Service.findAllBykeyword(keyword, pageable);\n`;
        xcontrollerapicustomx_line += `\t\t${xqueryservicex}\n`;
        xcontrollerapicustomx_line += `\t\treturn PageResponse.<${data.params.xnombrecapcamelx}ListResponse>builder()\n`;
        xcontrollerapicustomx_line += `\t\t\t.content(${data.params.xnombrecamelx}ListMapper.toResponseList(configuracionPage.getContent()))\n`;
        xcontrollerapicustomx_line += `\t\t\t.pagination(PageResponse.Pagination.builder()\n`;
        xcontrollerapicustomx_line += `\t\t\t\t.pages(configuracionPage.getTotalPages())\n`;
        xcontrollerapicustomx_line += `\t\t\t\t.rowsNumber(configuracionPage.getTotalElements())\n`;
        xcontrollerapicustomx_line += `\t\t\t\t.perPage(size)\n`;
        xcontrollerapicustomx_line += `\t\t\t\t.build()\n`;
        xcontrollerapicustomx_line += `\t\t\t)\n`;
        xcontrollerapicustomx_line += `\t\t\t.build();\n`;
        xcontrollerapicustomx_line += `\t}\n`;
        xcontrollerapicustomx_array.push(xcontrollerapicustomx_line);
    });
    
    data.params['xcontrollerapicustomx'] = xcontrollerapicustomx_array.join("\n");  

}
function generateRelationController(cabecera, params){
    let endPoints_array = [];
    let name = cabecera.campo;
    let tableSnake = convertirASnake(cabecera.relacion_table_rel);
    let tableCamel = convertirACamel(cabecera.relacion_table_rel);;
    let tableCamelCap = capitalizar(tableCamel);
    let fieldSnake = convertirASnake(cabecera.relacion_field_rel);
    let fieldCamel = convertirACamel(cabecera.relacion_field_rel);
    let fieldCamelCap = capitalizar(fieldCamel);
    let ownfieldSnake = convertirASnake(cabecera.relacion_field_own);
    let ownfieldCamel = convertirACamel(cabecera.relacion_field_own);
    let ownfieldCamelCap = capitalizar(ownfieldCamel);

    let fieldRel_array = [];
    //fieldRel_array.push(`.grupoId(request.getGrupoId())`);

    
    let gr = data_db[db_index_selected].groups.find(gx => gx.name == cabecera.relacion_table_rel );
    let recursos_array = [];   
    Object.keys(gr.data.create).forEach(f => {
        let rel_rel = esRelacion(gr.data.create , f);
        if (rel_rel==null){
            let tipo = gr.data.create[f];
            console.log("--tipo",tipo);
            if (!tipo.includes("uuid")){
                if (tipo == "boolean")
                    fieldRel_array.push(`\t\t\t\t\t.${convertirACamel(f)}(request.is${capitalizar(convertirACamel(f))}())`);
                else
                    fieldRel_array.push(`\t\t\t\t\t.${convertirACamel(f)}(request.get${capitalizar(convertirACamel(f))}())`);
            }
        }
    });
    


    let tmpSearchEndpoint = `

    private final ${tableCamelCap}Mapper ${tableCamel}Mapper;
    private final ${tableCamelCap}Service ${tableCamel}Service;
    private final ${tableCamelCap}CreateCmd ${tableCamel}Cmd;
    private final ${tableCamelCap}UpdateCmd ${tableCamel}UpdateCmd;

    ${tableCamelCap} getObjetoAndRelacion${tableSnake}(UUID id,UUID refid){
        ${tableCamelCap} ${tableCamel} = new ${tableCamelCap}();
        for(${tableCamelCap} fr : ${tableCamel}Service.findBy${fieldCamelCap}(id)){
                if(fr.getId().equals(refid)){
                        return ${tableCamel} = fr;
                }
        }
        return null;
}

    @Operation(summary = "Buscar ${tableCamel}")
        @GetMapping("${fieldCamel}/${tableSnake}")
        public PageResponse<${tableCamelCap}Response> findAll${name}(
                @RequestParam(defaultValue = "1") Integer page,
                @RequestParam(defaultValue = "10") Integer size,
                @RequestParam(defaultValue = "id") String sortBy,
                @RequestParam(defaultValue = "false") boolean descending,
                @RequestParam(required = false) String keyword,
                @PathVariable("${fieldCamel}") UUID ${fieldCamel}
        ) {
                page = page<1? 1:page;
                Pageable pageable = PageableUtil.of(page-1, size, sortBy, descending);
                Page<${tableCamelCap}> configuracionPage = ${tableCamel}Service.findByAll${fieldCamelCap}(keyword, ${fieldCamel},pageable);
                return PageResponse.<${tableCamelCap}Response>builder()
                        .content(${tableCamel}Mapper.toResponseList(configuracionPage.getContent()))
                        .pagination(PageResponse.Pagination.builder()
                                .pages(configuracionPage.getTotalPages())
                                .rowsNumber(configuracionPage.getTotalElements())
                                .perPage(size)
                                .build()
                        )
                        .build();
        }
    `;
    endPoints_array.push(tmpSearchEndpoint);
    tmpSearchEndpoint = `
    @Operation(summary = "Obtener ${tableCamelCap}")
    @GetMapping("{${fieldCamel}}/${tableSnake}/{${tableCamelCap}Id}")
    public SingleResponse<${tableCamelCap}Response> getOne${tableSnake}(
            @PathVariable("${fieldCamel}") UUID ${fieldCamel},
            @PathVariable("${tableCamelCap}Id") UUID ${tableCamelCap}Id

    ) {
            ${tableCamelCap} ${tableCamel} = getObjetoAndRelacion${tableSnake}(${fieldCamel},${tableCamelCap}Id);
            return SingleResponse.<${tableCamelCap}Response>builder().content(
                    ${tableCamel}Mapper.toResponse(${tableCamel})
            ).build();
    }
    `;
    endPoints_array.push(tmpSearchEndpoint);
    tmpSearchEndpoint = `
    @Operation(summary = "Crear ${tableCamelCap}")
    @PostMapping("{${fieldCamel}}/${tableSnake}")
    public SingleResponse<${tableCamelCap}Response> create${tableSnake}(
            @PathVariable("${fieldCamel}") UUID ${fieldCamel},
            @RequestBody ${tableCamelCap}CreateRequest request

    ) {
            UUID variableConfiguracionID = ${tableCamel}Cmd.execute(
                    ${tableCamelCap}CreateCmd.Request.builder()
                                    ${fieldRel_array.join("\n")}
                            .build()
            );
            ${tableCamelCap} ${tableCamelCap} = ${tableCamel}Service.findByIdThrow(variableConfiguracionID);
            return SingleResponse.<${tableCamelCap}Response>builder()
                    .content(${tableCamel}Mapper.toResponse(${tableCamelCap}))
                    .build();
    }
    `;
    endPoints_array.push(tmpSearchEndpoint);
    tmpSearchEndpoint = `
    @Operation(summary = "Actualizar ${tableCamelCap}")
        @PutMapping("{${fieldCamel}}/${tableSnake}/{${tableCamelCap}Id}")
        public SingleResponse<${tableCamelCap}Response>update${tableSnake}(
                @PathVariable("${fieldCamel}") UUID ${fieldCamel},
                @PathVariable("${tableCamelCap}Id") UUID ${tableCamelCap}Id,
                @RequestBody ${tableCamelCap}CreateRequest request
        ){
                ${tableCamelCap} ${tableCamelCap} = getObjetoAndRelacion${tableSnake}(${fieldCamel},${tableCamelCap}Id);
                if(${tableCamelCap}!=null){
                        UUID id = ${tableCamel}UpdateCmd.execute(
                                ${tableCamelCap}UpdateCmd.Request.builder()
                                        .${tableCamel}Id(${tableCamelCap}Id)                                        
										${fieldRel_array.join("\n")}							
                                        .build()
                        );
                        ${tableCamelCap} = ${tableCamel}Service.findByIdThrow(id);
                }

                return SingleResponse.<${tableCamelCap}Response>builder().content(
                        ${tableCamel}Mapper.toResponse(${tableCamelCap})
                ).build();
        }
    `;
    endPoints_array.push(tmpSearchEndpoint);
    tmpSearchEndpoint = `
    @Operation(summary = "Eliminar ${tableCamelCap}")
        @DeleteMapping("{${fieldCamel}}/${tableSnake}/{${tableCamelCap}Id}")
        public SingleResponse<${tableCamelCap}Response> delete${tableSnake}(
                @PathVariable("${fieldCamel}") UUID ${fieldCamel},
                @PathVariable("${tableCamelCap}Id") UUID ${tableCamelCap}Id) {

                ${tableCamelCap} ${tableCamelCap} = getObjetoAndRelacion${tableSnake}(${fieldCamel},${tableCamelCap}Id);
                ${tableCamel}Service.delete(${tableCamelCap});
                return SingleResponse.<${tableCamelCap}Response>builder().content(
                        ${tableCamel}Mapper.toResponse(${tableCamelCap})
                ).build();
        }
    `;
    endPoints_array.push(tmpSearchEndpoint);
    return endPoints_array.join("\n");
}

function generateRestRequest(data){
    let xrequestfieldsx = '';
    let xrequestfieldsx_array = [];

    data.cabecera.forEach( cabecera => {
        let javatype = textToJavatype(cabecera.tipo);
        let javaname = convertirACamel(cabecera.campo);
        let javanamecap = capitalizar(javaname);
        let sqlname = convertirASnake(cabecera.campo);
        if (cabecera.tipo == 'rel'){
            return;
        };
        let xrequestcreatecmdx_line = '';

        if (cabecera.tipo == "uuid"){
            
        }else {
            let jointext = '';
            if (cabecera.fk == true){
                let sqlnamerel = convertirASnake(cabecera.relacion_field_rel);
                let relcameltable = convertirACamel(cabecera.relacion_table_rel);
                let relcameltablecap = capitalizar(relcameltable);
                let relcamelfield = convertirACamel(cabecera.relacion_field_rel);
                let relcamelfieldown = convertirACamel(cabecera.relacion_field_own);
                let relcamelfieldcap = capitalizar(relcamelfieldown);
                
                //javatype = 'UUID';
                xrequestcreatecmdx_line += `\t\tprivate UUID ${relcamelfieldown};`;
            }else {
                xrequestcreatecmdx_line += `\t\tprivate ${javatype} ${javaname};`;
            }
            xrequestfieldsx_array.push(xrequestcreatecmdx_line);
        }
    });
    data.params['xrequestfieldsx'] = xrequestfieldsx_array.join("\n");     
}

function generateRestResponse(data){
    let xresponsefieldsx = '';
    let xresponsefieldsxx_array = [];

    data.cabecera.forEach( cabecera => {
        let javatype = textToJavatype(cabecera.tipo);
        let javaname = convertirACamel(cabecera.campo);
        let javanamecap = capitalizar(javaname);
        let sqlname = convertirASnake(cabecera.campo);
        if (cabecera.tipo == 'rel'){
            return;
        };
        let xresponsefieldsx_line = '';

        if (cabecera.tipo == "uuid"){
            
        }else {
            let jointext = '';
            if (cabecera.fk == true){
                let sqlnamerel = convertirASnake(cabecera.relacion_field_rel);
                let relcameltable = convertirACamel(cabecera.relacion_table_rel);
                let relcameltablecap = capitalizar(relcameltable);
                let relcamelfield = convertirACamel(cabecera.relacion_field_rel);
                let relcamelfieldown = convertirACamel(cabecera.relacion_field_own);
                let relcamelfieldcap = capitalizar(relcamelfieldown);
                
                //javatype = 'UUID';
                xresponsefieldsx_line += `\t\tprivate UUID ${relcamelfieldown};\n`;
                xresponsefieldsx_line += `\t\tprivate ${relcameltablecap}Response ${relcameltable};`;
            }else {
                xresponsefieldsx_line += `\t\tprivate ${javatype} ${javaname};`;
            }
            xresponsefieldsxx_array.push(xresponsefieldsx_line);
        }
    });
    data.params['xresponsefieldsx'] = xresponsefieldsxx_array.join("\n");     
}

function generateCreatecmd(data){
    let xsetfieldscreatex = '';
    let xsetfieldscreatex_array = [];
    let xrequestcreatecmdx_array = [];

    data.cabecera.forEach( cabecera => {
        let javatype = textToJavatype(cabecera.tipo);
        let javaname = convertirACamel(cabecera.campo);
        let javanamecap = capitalizar(javaname);
        let sqlname = convertirASnake(cabecera.campo);
        if (cabecera.tipo == 'rel'){
            return;
        };
        let xsetfieldscreatex_line = '';
        let xrequestcreatecmdx_line = '';

        if (cabecera.tipo == "uuid"){
            
        }else {
            let jointext = '';
            if (cabecera.fk == true){
                let sqlnamerel = convertirASnake(cabecera.relacion_field_rel);
                let relcameltable = convertirACamel(cabecera.relacion_table_rel);
                let relcameltablecap = capitalizar(relcameltable);
                let relcamelfield = convertirACamel(cabecera.relacion_field_rel);
                let relcamelfieldown = convertirACamel(cabecera.relacion_field_own);
                let relcamelfieldcap = capitalizar(relcamelfieldown);
                
                //javatype = 'UUID';
                xsetfieldscreatex_line += `\t\tvc.set${relcamelfieldcap}(request.get${relcamelfieldcap}());`;
                xrequestcreatecmdx_line += `\t\tprivate UUID ${relcamelfieldown};`;
            }else {
                if (cabecera.tipo == 'boolean')
                    xsetfieldscreatex_line += `\t\tvc.set${javanamecap}(request.is${javanamecap}());`;
                else
                    xsetfieldscreatex_line += `\t\tvc.set${javanamecap}(request.get${javanamecap}());`;
                xrequestcreatecmdx_line += `\t\tprivate ${javatype} ${javaname};`;
            }
            xsetfieldscreatex_array.push(xsetfieldscreatex_line);
            xrequestcreatecmdx_array.push(xrequestcreatecmdx_line);
        }
    });
    data.params['xsetfieldscreatex'] = xsetfieldscreatex_array.join("\n"); 
    data.params['xrequestcreatecmdx'] = xrequestcreatecmdx_array.join("\n");     
}

function generateUpdatecmd(data){
    let xsetfieldsupdatex = '';
    let xsetfieldsupdatex_array = [];
    let xrequestupdatecmdx_array = [];

    data.cabecera.forEach( cabecera => {
        let javatype = textToJavatype(cabecera.tipo);
        let javaname = convertirACamel(cabecera.campo);
        let javanamecap = capitalizar(javaname);
        let sqlname = convertirASnake(cabecera.campo);
        if (cabecera.tipo == 'rel'){
            return;
        };
        let xsetfieldsupdatex_line = '';
        let xrequestupdatecmdx_line = '';

        if (cabecera.tipo == "uuid"){
            xrequestupdatecmdx_line += `\t\t@NotNull\n`;
            xrequestupdatecmdx_line += `\t\tprivate UUID ${data.params.xnombrecamelx}Id;\n`;
            xrequestupdatecmdx_array.push(xrequestupdatecmdx_line);
        }else {
            let jointext = '';
            if (cabecera.fk == true){
                let sqlnamerel = convertirASnake(cabecera.relacion_field_rel);
                let relcameltable = convertirACamel(cabecera.relacion_table_rel);
                let relcameltablecap = capitalizar(relcameltable);
                let relcamelfield = convertirACamel(cabecera.relacion_field_rel);
                let relcamelfieldown = convertirACamel(cabecera.relacion_field_own);
                let relcamelfieldcap = capitalizar(relcamelfieldown);
                
                //javatype = 'UUID';
                xsetfieldsupdatex_line += `\t\tvc.set${relcamelfieldcap}(request.get${relcamelfieldcap}());`;
                xrequestupdatecmdx_line += `\t\tprivate UUID ${relcamelfieldown};`;
            }else {
                if (cabecera.tipo == 'boolean')
                    xsetfieldsupdatex_line += `\t\tvc.set${javanamecap}(request.is${javanamecap}());`;
                else
                    xsetfieldsupdatex_line += `\t\tvc.set${javanamecap}(request.get${javanamecap}());`;
                xrequestupdatecmdx_line += `\t\tprivate ${javatype} ${javaname};`;
            }
            xsetfieldsupdatex_array.push(xsetfieldsupdatex_line);
            xrequestupdatecmdx_array.push(xrequestupdatecmdx_line);
        }
    });
    data.params['xsetfieldsupdatex'] = xsetfieldsupdatex_array.join("\n"); 
    data.params['xrequestupdatecmdx'] = xrequestupdatecmdx_array.join("\n");     
}

function generateEntity(data){
    let xentityfieldsx = '';
    let xentityfieldsx_array = [];

    data.cabecera.forEach( cabecera => {
        if (cabecera.tipo == 'rel'){
            let reltext = '';
            if (cabecera.esarray == true){
                let sqlnamerel = convertirASnake(cabecera.relacion_field_rel);
                let relcameltable = convertirACamel(cabecera.relacion_table_rel);
                let relcameltablecap = capitalizar(relcameltable);
                reltext += `\t\t@OneToMany(fetch = FetchType.LAZY, mappedBy = "${data.params.xnombresnakex}", cascade= CascadeType.ALL)\n`;
                reltext += `\t\t@JsonManagedReference\n`;
                reltext += `\t\tprivate List<${relcameltablecap}> ${relcameltable};\n`;
                xentityfieldsx_array.push(reltext);
            }
            return;
        };
        let xentityfieldsx_line = '\t';

        if (cabecera.tipo == "uuid"){
            
        }else {
            let javatype = textToJavatype(cabecera.tipo);
            let javaname = convertirACamel(cabecera.campo);
            let sqlname = convertirASnake(cabecera.campo);
            let jointext = '';
            if (cabecera.fk == true){
                let sqlnamerel = convertirASnake(cabecera.relacion_field_rel);
                let relcameltable = convertirACamel(cabecera.relacion_table_rel);
                let relcameltablecap = capitalizar(relcameltable);
                
                javatype = 'UUID';
                jointext = `\t\t@ManyToOne(fetch = FetchType.LAZY, optional = false)\n`;
                jointext += `\t\t@JoinColumn(name = "${sqlname}", referencedColumnName = "${sqlnamerel}", insertable = false, updatable = false)\n`;
                jointext += `\t\t@JsonBackReference\n`;
                jointext += `\t\tprivate ${relcameltablecap} ${relcameltable};\n`;
            }
            xentityfieldsx_line += `\t  @Column(name = "${sqlname}", nullable = false )\n`;
            xentityfieldsx_line += `\t\tprivate ${javatype} ${javaname};`;
            xentityfieldsx_line += jointext;
            xentityfieldsx_array.push(xentityfieldsx_line);
        }
    });
    data.params['xentityfieldsx'] = xentityfieldsx_array.join("\n"); 
}

function generateRepository(data){
    let xmethodsrepositoryx = '';
    let xmethodsrepositoryx_array = [];

    data.cabecera.forEach( cabecera => {
        if (cabecera.tipo == 'rel'){
            return;
        };
        let xentityfieldsx_line = '\t';

        if (cabecera.tipo == "uuid"){
            
        }else {
            let javatype = textToJavatype(cabecera.tipo);
            let javaname = convertirACamel(cabecera.campo);
            let javanamecap = capitalizar(javaname);
            let sqlname = convertirASnake(cabecera.campo);
            let jointext = '';
            if (cabecera.fk == true){
                let sqlnamerel = convertirASnake(cabecera.relacion_field_rel);
                let relcameltable = convertirACamel(cabecera.relacion_table_rel);
                let relcameltablecap = capitalizar(relcameltable);
                let relcamelfield = convertirACamel(cabecera.relacion_field_rel);
                let relcamelfieldown = convertirACamel(cabecera.relacion_field_own);
                let relcamelfieldcap = capitalizar(relcamelfieldown);
                
                javatype = 'UUID';
                xentityfieldsx_line += `\t\tpublic List<${data.params.xnombrecapcamelx}> findBy${relcamelfieldcap}(UUID ${relcamelfieldown});\n`;
                
            }else
                xentityfieldsx_line += `\t\tpublic List<${data.params.xnombrecapcamelx}> findBy${javanamecap}(${javatype} ${javaname});\n`;
            
                xmethodsrepositoryx_array.push(xentityfieldsx_line);
        }
    });
    data.params['xmethodsrepositoryx'] = xmethodsrepositoryx_array.join("\n"); 
}

function generateService(data){
    let xmethodsservicex = '';
    let xmethodsservicex_array = [];
    let xmethodsallservicex_array = [];

    data.cabecera.forEach( cabecera => {
        let javatype = textToJavatype(cabecera.tipo);
        let javaname = convertirACamel(cabecera.campo);
        let javanamecap = capitalizar(javaname);
        let sqlname = convertirASnake(cabecera.campo);
        let jointext = '';

        if (cabecera.tipo == 'rel'){
            
            return;
        };
        let xmethodservicex_line = '';

        if (cabecera.tipo == "uuid"){
            
            javatype = 'UUID';
            let gr = data_db[db_index_selected].groups.find(gx => gx.name == data.params.xnombresnakex);
            let recursos_array = [];   
            console.log("UUID gr",data.params.xnombrecapcamelx);
            Object.keys(gr.data.create).forEach(f => {
                let rel_rel = esRelacion(gr.data.create , f);
                if (rel_rel==null){
                    let tipo = gr.data.create[f];
                    if (tipo == "string")
                        recursos_array.push(`\t\t\trecurso == null ? cb.conjunction() : cb.like(cb.lower(root.get("${f}").as(String.class)), recurso)`);
                }
            });
            
            data.params['xresourceservicex'] = recursos_array.join(",\n");
            
        }else {
            if (cabecera.fk == true){
                let sqlnamerel = convertirASnake(cabecera.relacion_field_rel);
                let relcameltable = convertirACamel(cabecera.relacion_table_rel);
                let relcameltablecap = capitalizar(relcameltable);
                let relcamelfield = convertirACamel(cabecera.relacion_field_rel);
                let relcamelfieldown = convertirACamel(cabecera.relacion_field_own);
                let relcamelfieldowncap = capitalizar(relcamelfieldown);
                let relcamelfieldcap = capitalizar(relcamelfieldown);
                
                javatype = 'UUID';
                let gr = data_db[db_index_selected].groups.find(gx => gx.name == data.params.xnombresnakex);
                let recursos_array = [];   
                Object.keys(gr.data.create).forEach(f => {
                    let rel_rel = esRelacion(gr.data.create , f);
                    if (rel_rel==null){
                        let tipo = gr.data.create[f];
                        if (tipo == "string")
                            recursos_array.push(`\t\t\trecurso == null ? cb.conjunction() : cb.like(cb.lower(root.get("${f}").as(String.class)), recurso)`);
                    }
                });

                
                xmethodservicex_line += `\tpublic Page<${data.params.xnombrecapcamelx}> findByAll${relcamelfieldcap}(String keyword, UUID ${relcamelfieldown}, Pageable pageable) {\n`; 
                xmethodservicex_line += `\t\tString recurso = keyword == null ? null : "%" + keyword.toLowerCase() + "%";\n`;
                xmethodservicex_line += `\t\treturn repository.findAll(\n`;
                xmethodservicex_line += `\t\t\t(Specification<${data.params.xnombrecapcamelx}>) (root, query, cb) -> cb.and(\n`;
                xmethodservicex_line += `\t\t\t\tcb.equal(root.get("${javaname}"), ${javaname}),\n`;
                xmethodservicex_line += `\t\t\t\tcb.or(\n`;
                xmethodservicex_line += recursos_array.join(",\n");
                xmethodservicex_line += `\t\t\t)\n`;
                xmethodservicex_line += `\t\t), pageable);\n\t}\n`;
                
            }else
                xmethodservicex_line += `\tpublic List<${data.params.xnombrecapcamelx}> findBy${javanamecap}(${javatype} ${javaname}) {return repository.findBy${javanamecap}(${javaname});}\n`;
                xmethodsservicex_array.push(xmethodservicex_line);
        }
    });
    data.params['xmethodsservicex'] = xmethodsservicex_array.join("\n");
    data.params['xmethodsallservicex'] = xmethodsallservicex_array.join("\n");
}

function addFilesSpring(data){
    let v_pills_tab = $("#v-pills-spring-tab");
    let v_pills_tabContent = $("#v-pills-spring-tabContent");
    v_pills_tab.empty();
    v_pills_tabContent.empty();
    data.files.forEach( (f,ix) => {
        Object.keys(data.params).forEach((p) => {
            f.file = f.file.replaceAll(`${p}`, data.params[p]);
        });
    });
    console.log("addFiles",data);
    Object.keys(data.injection).forEach((reg) => {
        if ( Array.isArray(data.injection[reg]) ){
            data.injection[reg].forEach( (regreg => {
                Object.keys(regreg).forEach( reg_att => {
                    Object.keys(data.params).forEach((p) => {
                        regreg[reg_att] = regreg[reg_att].replaceAll(`{${p}}`, data.params[p]);    
                    });
                    
                });
            }));
        }else{
            Object.keys(data.params).forEach((p) => {
                data.injection[reg] = data.injection[reg].replaceAll(`{${p}}`, data.params[p]);    
            });
       }        
    });

    data.files.forEach( (f,ix) => {
        var tab = $(`<button class="nav-link" id="v-pills-${ix}-tab" data-bs-toggle="pill" data-bs-target="#v-pills-${ix}" type="button" role="tab" aria-controls="v-pills-${ix}" aria-selected="false">${f.file}</button>`);
        var cont = $(`<div class="tab-pane fade" id="v-pills-${ix}" role="tabpanel" aria-labelledby="v-pills-${ix}-tab"></div>`);

        const options = { indent_size: 2, space_in_empty_paren: true }

        const dataObj = {completed: false,id: 1,title: "delectus aut autem",userId: 1,}
        
        Object.keys(data.params).forEach((p) => {
            f.content = f.content.replaceAll(`{${p}}`, data.params[p]);
        });

        //const dataJson = JSON.stringify(dataObj);
        let pretty_content_html = html_beautify(f.content, options);
        let pretty_content = js_beautify(f.content, options);

        let code=$(`<div class="code-style" id="code-${ix}">`);
        cont.append(code);
        v_pills_tab.append(tab);
        v_pills_tabContent.append(cont);
        let id = `code-${ix}`;
    console.log(f.file,f.content);
        let editor = CodeMirror(document.getElementById(id), {
            mode: getExtMode(f),
            theme: "night",
            lineNumbers: true,
            lineWrapping: false,
            styleActiveLine: true,
            smartIndent: false,
            //indentWithTabs:true,
            insertSoftTab:false,
            value: f.content //getExt(f)?pretty_content_html:pretty_content
        });

        editor.setSize("100%", 800);
        tab.click( ()=> {
            editor.refresh();
        });
    });
}