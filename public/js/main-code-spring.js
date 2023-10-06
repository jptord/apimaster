function toListSpring(dbs){
    console.log("toListSpring",data_db);
    let listado = $("#listado-spring");
    listado.empty();
    let dbs_camel = dbsToCamelCase(dbs);
    dbs_camel.forEach( db => { 
        let li = $(`<li><span class="caret active ">${db.db}</span></li>`);
        if (db.groups.length>0){
            let ul = $(`<ul class="nested active"></ul>`);
            db.groups.forEach( g => { 
                let li_group = $(`<li class="liGroup" ><span class="caretNo ">${g.name}</span></li>`);                                
                ul.append(li_group);
                li_group.on('click',function (e){
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
}