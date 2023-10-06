let mostra_botones = false;

function eraseCookie(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function fem(texto){
    if (["o","l","on","or","un","e"].includes(texto[texto.length-1]))
        return "o";
    else 
    return "a";
}
function prepareHeaders(data){
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

    let cab =  `
                <div class="mb-6 col-sm-{xcolsizex} {xvisiblex}">
                    <label for="nombre">{texto} </label>
                    <input type="{tipo}" {step} class="form-control uppercase" id="{campo}" (click)="alCambiar(form)" {required} formControlName="{campo}" [ngClass]="{ 'is-invalid': submitted && form['{campo}'].errors }">
                    <div *ngIf="submitted && form['{campo}'].errors" class="invalid-feedback" align="left">
                    <div *ngIf="form['{campo}'].errors['required']">Es requerido</div>
                    <div *ngIf="form['{campo}'].errors['minlength']">Debe tener al menos {{form['{campo}'].errors['minlength']['requiredLength']}} caracteres</div>
                    <div *ngIf="form['{campo}'].errors['maxlength']">Debe tener menos de {{form['{campo}'].errors['maxlength']['requiredLength']}} caracteres</div>
                    <div *ngIf="form['{campo}'].errors['min']">Debe tener mayor o igual que {{form['{campo}'].errors['min']['min']}} </div>
                    <div *ngIf="form['{campo}'].errors['max']">Debe tener menor o igual que {{form['{campo}'].errors['max']['max']}} </div>
                    </div>
                </div>`;
    let cabArea =  `
                <div class="mb-6 col-sm-{xcolsizex} {xvisiblex}">
                    <label for="nombre">{texto} </label><br>
                    <textarea class="form-control uppercase" rows=5 id="{campo}" (click)="alCambiar(form)" {required} formControlName="{campo}" [ngClass]="{ 'is-invalid': submitted && form['{campo}'].errors }"></textarea>
                    <div *ngIf="submitted && form['{campo}'].errors" class="invalid-feedback" align="left">
                    <div *ngIf="form['{campo}'].errors['required']">Es requerido</div>
                    <div *ngIf="form['{campo}'].errors['minlength']">Debe tener al menos {{form['{campo}'].errors['minlength']['requiredLength']}} caracteres</div>
                    <div *ngIf="form['{campo}'].errors['maxlength']">Debe tener menos de {{form['{campo}'].errors['maxlength']['requiredLength']}} caracteres</div>
                    <div *ngIf="form['{campo}'].errors['min']">Debe tener mayor o igual que {{form['{campo}'].errors['min']['min']}} </div>
                    <div *ngIf="form['{campo}'].errors['max']">Debe tener menor o igual que {{form['{campo}'].errors['max']['max']}} </div>
                    </div>
                </div>`;
    let cabChk =  `
                <div class="mb-6 col-sm-{xcolsizex} {xvisiblex}">
                    <label for="nombre">{texto} </label><br>
                    <input type="checkbox" class="form-check-input uppercase" id="{campo}" {required} (click)="alCambiar(form)" formControlName="{campo}" [ngClass]="{ 'is-invalid': submitted && form['{campo}'].errors }">
                    <div *ngIf="submitted && form['{campo}'].errors" class="invalid-feedback" align="left">
                    <div *ngIf="form['{campo}'].errors['required']">Es requerido</div>
                    <div *ngIf="form['{campo}'].errors['minlength']">Debe tener al menos {{form['{campo}'].errors['minlength']['requiredLength']}} caracteres</div>
                    <div *ngIf="form['{campo}'].errors['maxlength']">Debe tener menos de {{form['{campo}'].errors['maxlength']['requiredLength']}} caracteres</div>
                    <div *ngIf="form['{campo}'].errors['min']">Debe tener mayor o igual que {{form['{campo}'].errors['min']['min']}} </div>
                    <div *ngIf="form['{campo}'].errors['max']">Debe tener menor o igual que {{form['{campo}'].errors['max']['max']}} </div>
                    </div>
                </div>`;
    let cabChkSel =  `
                <div class="mb-6 col-sm-{xcolsizex} {xvisiblex}">
                    <label for="nombre">{texto} </label>
                    <select class="form-control form-select" id="{campo}" formControlName="{campo}" {required} [ngClass]="{ 'is-invalid': submitted && form['{campo}'].errors }"><option value=true default>Sí</option><option value=false>No</option></select>
                    <div *ngIf="submitted && form['{campo}'].errors" class="invalid-feedback" align="left">
                    <div *ngIf="form['{campo}'].errors['required']">Es requerido</div>
                    <div *ngIf="form['{campo}'].errors['minlength']">Debe tener al menos {{form['{campo}'].errors['minlength']['requiredLength']}} caracteres</div>
                    <div *ngIf="form['{campo}'].errors['maxlength']">Debe tener menos de {{form['{campo}'].errors['maxlength']['requiredLength']}} caracteres</div>
                    <div *ngIf="form['{campo}'].errors['min']">Debe tener mayor o igual que {{form['{campo}'].errors['min']['min']}} </div>
                    <div *ngIf="form['{campo}'].errors['max']">Debe tener menor o igual que {{form['{campo}'].errors['max']['max']}} </div>
                    </div>
                </div>`;
    
    let cabImage64 =  `
                <div class="mb-6 col-sm-{xcolsizex} {xvisiblex}">                
                    <label for="nombre">{texto} </label>
                    <app-selector-image formControlName="{campo}"></app-selector-image>
                </div>`;
    let cabrel =   `
                <div class="mb-6 col-sm-{xcolsizex} {xvisiblex}">
                    <label for="formrow-firstname-input ">{texto}</label>
                    <select class="form-control form-select" id="{campo}" {required} formControlName="{campo}" name="{campo}" [ngClass]="{ 'is-invalid': submitted && form['{campo}'].errors }">
                    <option *ngFor="let t of [{relation}]" value="{{t.[{id}]}}"  >{{t.[{nombre}]}} </option>
                    </select>
                    <div *ngIf="submitted && form['{campo}'].errors" class="invalid-feedback" align="left" >
                    <div *ngIf="form['{campo}'].errors['required']">Es requerido</div>
                    <div *ngIf="form['{campo}'].errors['minlength']">Debe tener al menos {{form['{campo}'].errors['minlength']['requiredLength']}} caracteres</div>
                    <div *ngIf="form['{campo}'].errors['maxlength']">Debe tener menos de {{form['{campo}'].errors['maxlength']['requiredLength']}} caracteres</div>
                    <div *ngIf="form['{campo}'].errors['min']">Debe tener mayor o igual que {{form['{campo}'].errors['min']['min']}} </div>
                    <div *ngIf="form['{campo}'].errors['max']">Debe tener menor o igual que {{form['{campo}'].errors['max']['max']}} </div>
                    </div>
                </div>`;
    let cabrelAdd =   `
                <div class="mb-6 col-sm-{xcolsizex} {xvisiblex}">
                    <app-selector-add #[{relation}]Selector  label="{texto}" [campoNombre]="'[{nombre}]'" [campoValor]="'[{id}]'" [showEdit]="false" [templateEditar]="[{relation}]TemplateEditar" [templateNuevo]="[{relation}]TemplateNuevo" name="{campo}" [submitted]="submitted" [dataArray]="[{relation}]" formControlName="{campo}"  ></app-selector-add>
                    <ng-template #[{relation}]TemplateNuevo>
                        <app-formulario-{xlistadonombrex} [esModal]="true" (alGuardar)="cargarArrays();[{relation}]Selector.close()" ></app-formulario-{xlistadonombrex}>
                    </ng-template>
                    <ng-template #[{relation}]TemplateEditar>
                        <app-formulario-{xlistadonombrex} [esModal]="true" [show_rel]="false" [dataEdit]="getDataFromFormname([{relation}], '{campo}')" (alActualizar)="[{relation}]Selector.close();setDataFromFormname([{relation}], '{campo}',$event)" ></app-formulario-{xlistadonombrex}>
                    </ng-template>
                </div>`;
    let cabrelEdit =   `
                <div class="mb-6 col-sm-{xcolsizex} {xvisiblex}">
                    <app-selector-add #[{relation}]Selector  label="{texto}" [campoNombre]="'[{nombre}]'" [campoValor]="'[{id}]'" [showAdd]="false" [templateEditar]="[{relation}]TemplateEditar" [templateNuevo]="[{relation}]TemplateNuevo" name="{campo}" [submitted]="submitted" [dataArray]="[{relation}]" formControlName="{campo}"  ></app-selector-add>
                    <ng-template #[{relation}]TemplateNuevo>
                        <app-formulario-{xlistadonombrex} [esModal]="true" (alGuardar)="cargarArrays();[{relation}]Selector.close()" ></app-formulario-{xlistadonombrex}>
                    </ng-template>
                    <ng-template #[{relation}]TemplateEditar>
                        <app-formulario-{xlistadonombrex} [esModal]="true" [show_rel]="false" [dataEdit]="getDataFromFormname([{relation}], '{campo}')" (alActualizar)="[{relation}]Selector.close();setDataFromFormname([{relation}], '{campo}',$event)" ></app-formulario-{xlistadonombrex}>
                    </ng-template>
                </div>`;
    let cabrelAddEdit =   `
                <div class="mb-6 col-sm-{xcolsizex} {xvisiblex}">
                    <app-selector-add #[{relation}]Selector  label="{texto}" [campoNombre]="'[{nombre}]'" [campoValor]="'[{id}]'" [templateEditar]="[{relation}]TemplateEditar" [templateNuevo]="[{relation}]TemplateNuevo" name="{campo}" [submitted]="submitted" [dataArray]="[{relation}]" formControlName="{campo}"  ></app-selector-add>
                    <ng-template #[{relation}]TemplateNuevo>
                        <app-formulario-{xlistadonombrex} [esModal]="true" (alGuardar)="cargarArrays();[{relation}]Selector.close()" ></app-formulario-{xlistadonombrex}>
                    </ng-template>
                    <ng-template #[{relation}]TemplateEditar>
                        <app-formulario-{xlistadonombrex} [esModal]="true" [show_rel]="false" [dataEdit]="getDataFromFormname([{relation}], '{campo}')" (alActualizar)="[{relation}]Selector.close();setDataFromFormname([{relation}], '{campo}',$event)" ></app-formulario-{xlistadonombrex}>
                    </ng-template>
                </div>`;
    let cabreltable =   `
                <div class="mb-6 col-sm-12" *ngIf="dataEdit">
                    <hr>
                    <ul class="nav nav-tabs nav-tabs-dark" role="tablist">                        
                        {xtabmenux}
                    </ul>
                    <div class="tab-content">
                        {xtabcontentx}
                    </div>
                </div> `;
    let tmptabmenu = `
                    <li class="nav-item" >
                        <a class="nav-link atabx {xtabactivex}" data-bs-toggle="tab" data-bs-target="#tab-{xtabnombrerelx}" role="button" aria-current="page" href="#">{texto}</a>
                    </li>`;
    let tmptabcontent = `
                    <div class="tab-pane border {xtabactivex}" id="tab-{xtabnombrerelx}" >
                        <app-listado-{xlistadonombrex} *ngIf="rel_prefix" [rel_prefix]="rel_prefix" [rel_field]="'{xfieldrelx}'" > </app-listado-{xlistadonombrex}>
                    </div>`;

    let xrefieldx = "";


    data.cabecera.forEach(campo => {
        if (campo.esrelacion ){
            let cabRep = cabrel;
            if (campo.tipo == "seladd")
                cabRep = cabrelAdd;
            if (campo.tipo == "seledit")
                cabRep = cabrelEdit;
            if (campo.tipo == "seladdedit")
                cabRep = cabrelAddEdit;

            cabRep  = cabRep.replaceAll("{xlistadonombrex}",apiFormat(campo.relacion_tabla));
            cabRep  = cabRep.replaceAll("{xvisiblex}",campo.visible?"":"d-none");
            cabRep  = cabRep.replaceAll("{required}",campo.requerido?"required":"");
            cabRep  = cabRep.replaceAll("{texto}",(campo.requerido?"(*)":"") + campo.texto);
            cabRep  = cabRep.replaceAll("{campo}",campo.campo);
            cabRep  = cabRep.replaceAll("{tipo}",campo.tipo);
            cabRep  = cabRep.replaceAll("{xcolsizex}",campo.colsize);
            cabRep  = cabRep.replaceAll("[{relation}]",campo.relacion_tabla);
            cabRep  = cabRep.replaceAll("[{id}]",campo.relacion_campo);
            cabRep  = cabRep.replaceAll("[{nombre}]",campo.relacion_nombre);
            xrefieldx += "\n" + cabRep;
            

        }else{
            let cabRep = cab;
            if (campo.tipo == "checkbox") cabRep = cabChk;
            if (campo.tipo == "checkboxsel") cabRep = cabChkSel;
            if (campo.tipo == "imagebase64") cabRep = cabImage64;
            if (campo.tipo == "area") cabRep = cabArea;
            if (campo.tipo == "time") cabRep = cabRep.replaceAll("{step}","step=600");
            else cabRep  = cabRep.replaceAll("{step}","");
            cabRep  = cabRep.replaceAll("{xvisiblex}",campo.visible?"":"d-none");
            cabRep  = cabRep.replaceAll("{required}",campo.requerido?"required":"");
            cabRep  = cabRep.replaceAll("{texto}",(campo.requerido?"(*)":"") + campo.texto);
            cabRep  = cabRep.replaceAll("{campo}",campo.campo);
            cabRep  = cabRep.replaceAll("{tipo}",campo.tipo);
            cabRep  = cabRep.replaceAll("{xcolsizex}",campo.colsize);
            xrefieldx += "\n" + cabRep;
        }
    });
    data.params['xrefieldx'] = xrefieldx;

    let xformbuilderx = [];
    data.cabecera.forEach(campo => {
        let validators = [];
        if (campo.requerido) validators.push(`Validators.required`);        
        if (campo.tienemin && campo.tipo == "text") validators.push(`Validators.minLength(${campo.min})`);
        if (campo.tienemax && campo.tipo == "text") validators.push(`Validators.maxLength(${campo.max})`);        
        if (campo.tienemin && campo.tipo == "area") validators.push(`Validators.minLength(${campo.min})`);
        if (campo.tienemax && campo.tipo == "area") validators.push(`Validators.maxLength(${campo.max})`);        
        if (campo.tienemin && (campo.tipo == "number" || campo.tipo == "integer")) validators.push(`Validators.min(${campo.min})`);
        if (campo.tienemax && (campo.tipo == "number" || campo.tipo == "integer")) validators.push(`Validators.max(${campo.max})`);     

        if (campo.tipo == "checkbox" || campo.tipo == "checkboxsel")
            xformbuilderx.push(`${campo.campo}:[false,[${validators.join(',')}] ]`);
        else
            xformbuilderx.push(`${campo.campo}:["",[${validators.join(',')}] ]`);
    });
    data.params['xformbuilderx'] = `{${xformbuilderx.join(",")}}`;

    let xformeditx = [];
    data.cabecera.forEach(campo => {
        xformeditx.push(`${campo.campo}:this.dataEdit.${campo.campo}`);
    });
    data.params['xformeditx'] = `{${xformeditx.join(",")}}`;

    let xrelations_constructorx = [];
    data.cabecera.forEach(campo => {
        if (campo.esrelacion){  
            let strCap = campo.relacion_tabla[0].toUpperCase()+ campo.relacion_tabla.substring(1, campo.relacion_tabla.length).replaceAll("_","");
            xrelations_constructorx.push(`private ${strCap}Service: ${strCap}Service`);
        }
    });
    data.params['xrelations_constructorx'] = `${xrelations_constructorx.join(",")}`;

    let xrelations_includex = [];
    data.cabecera.forEach(campo => {
        if (campo.esrelacion){
            let strCap = campo.relacion_tabla[0].toUpperCase()+ campo.relacion_tabla.substring(1, campo.relacion_tabla.length).replaceAll("_","");
            let strCapLittle = strCap.toLowerCase();
            xrelations_includex.push(`import { ${strCap}Service } from '../servicios/${strCapLittle}.service';`);
        }
    });
    data.params['xrelations_includex'] = `${xrelations_includex.join("\n")}`;

    let xrelations_varx = [];
    data.cabecera.forEach(campo => {
        if (campo.esrelacion){
            xrelations_varx.push(`${campo.relacion_tabla}:any = [];`);
        }
    });
    data.params['xrelations_varx'] = `${xrelations_varx.join("\n")}`;

    let xrelations_initx = [];

    console.log("data.files",data.files);
    let fileService = data.files.find(f => f.file.includes("xnombrex.service.ts") );
    data.cabecera.forEach(campo => {
        if (campo.esrelacion){
            let strCap = campo.relacion_tabla[0].toUpperCase()+ campo.relacion_tabla.substring(1, campo.relacion_tabla.length).replaceAll("_","");
            let strCapLittle = strCap.toLowerCase();
            let fileServiceClone = {... fileService};
            console.log("fileServiceClone",fileServiceClone);
            fileServiceClone.content = fileServiceClone.content.replaceAll("{xnombrecapx}",strCap);
            fileServiceClone.content = fileServiceClone.content.replaceAll("{xapix}",campo.relacion_tabla);
            fileServiceClone.file = fileServiceClone.file.replaceAll("xnombrex.service",strCapLittle+".service"); 
            data.files.push(fileServiceClone);
            xrelations_initx.push(`this.${strCap}Service.getAll(100, 1, '${campo.relacion_nombre.includes(".")?campo.relacion_campo:campo.relacion_nombre}', false, '').subscribe((res:any) => { this.${campo.relacion_tabla} = res.content; });`);
        }
    });
    data.params['xrelations_initx'] = `${xrelations_initx.join("\n")}`;

    let xtabmenux = [];
    let xtabcontentx = [];
    let xaddimportmodulex = [];
    let xaddmodulex = [];
    //import { {xnombrecapx}RoutingModule } from './{xnombrex}-routing.module';
    let haveArrays = false;
    let haveRels = false;
    data.cabecera.forEach(campo => {
        if (campo.esarray=="true"){
            let strCap = campo.relacion_tabla[0].toUpperCase()+ campo.relacion_tabla.substring(1, campo.relacion_tabla.length).replaceAll("_","");
            let strCapLittle = strCap.toLowerCase();

            haveArrays = true;            
            haveRels = true;

            let liCap = tmptabmenu;
            liCap = liCap.replaceAll("{xtabnombrerelx}",apiFormat(campo.relacion_tabla));
            liCap  = liCap.replaceAll("{texto}", campo.texto);

            if (xtabcontentx.length == 0) liCap  = liCap.replaceAll("{xtabactivex}", "active");
            else liCap  = liCap.replaceAll("{xtabactivex}", "");
            xtabmenux.push(liCap);
            
            let contCap = tmptabcontent;
            contCap = contCap.replaceAll("{xtabnombrerelx}",apiFormat(campo.relacion_tabla));
            contCap = contCap.replaceAll("{xlistadonombrex}",apiFormat(campo.relacion_tabla));
            console.log("---xx---",campo);
            contCap = contCap.replaceAll("{xfieldrelx}",campo.relacion_nombre);
            if (xtabcontentx.length == 0) contCap  = contCap.replaceAll("{xtabactivex}", "active");
            else contCap  = contCap.replaceAll("{xtabactivex}", "");
            xtabcontentx.push(contCap);

            xaddimportmodulex.push( `import { ${strCap}Module } from '../${apiFormat(campo.relacion_tabla)}/${apiFormat(campo.relacion_tabla)}.module';`);
            xaddmodulex.push(`${strCap}Module`);
        }
        if (campo.tipo == 'seladd' || campo.tipo == 'seledit' || campo.tipo == 'seladdedit') {
            let strCap = campo.relacion_tabla[0].toUpperCase()+ campo.relacion_tabla.substring(1, campo.relacion_tabla.length).replaceAll("_","");

            xaddimportmodulex.push( `import { ${strCap}Module } from '../${apiFormat(campo.relacion_tabla)}/${apiFormat(campo.relacion_tabla)}.module';`);
            xaddmodulex.push(`${strCap}Module`);
            console.log("seladd",xaddmodulex);     
            haveRels = true;
        }

    });
    if (haveArrays){        
        cabreltable = cabreltable.replaceAll("{xtabmenux}",xtabmenux.join("\n"));
        cabreltable = cabreltable.replaceAll("{xtabcontentx}",xtabcontentx.join("\n"));
        data.params['xrefieldtabx'] = cabreltable;
    }
    if (haveRels){        
        data.params['xaddimportmodulex'] = xaddimportmodulex.join("\n");
        data.params['xaddmodulex'] = xaddmodulex.join(",\n");     
        
    }

}
function addFiles(data){
    let v_pills_tab = $("#v-pills-tab");
    let v_pills_tabContent = $("#v-pills-tabContent");
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
        //console.log("rrrr",rrrr);

        let code=$(`<div class="code-style" id="code-${ix}">`);
        cont.append(code);
        v_pills_tab.append(tab);
        v_pills_tabContent.append(cont);
        //code.text(pretty_content);
        let id = `code-${ix}`;
        //let ext = getExt(f);

        let editor = CodeMirror(document.getElementById(id), {
            mode: getExtMode(f),
            theme: "dracula",
            lineWrapping: true,
            lineNumbers: true,
            lineWrapping: false,
            styleActiveLine: true,
            matchBrackets: true,
            extraKeys: {
                "Ctrl-Space": "autocomplete"
            },
            value: getExt(f)?pretty_content_html:pretty_content
            //value: <!doctype html>\n<html>\n  " + document.documentElement.innerHTML + "\n</html>pretty_content
        });
        //editores.push(editor);
        tab.click( ()=> {
            editor.refresh();
        });
    });
    //<button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">servicios/xnombrex.service.ts</button>
    //<button class="nav-link" id="v-pills-file0-tab" data-bs-toggle="pill" data-bs-target="#v-pills-file0" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">formulario/formulario.component.html</button>
    //<div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">...</div>
    //<div class="tab-pane fade" id="v-pills-file0" role="tabpanel" aria-labelledby="v-pills-file0-tab">.....</div>
}
function getExt(data){
    let t = data.file.split(".");
    if (t.length>0) return t[t.length-1];;
    return "";
}
function getExtMode(data){
    if (getExt(data) == "html" || getExt(data) == "scss"){ return "text/html"};
    if (getExt(data) == "ts")  return "javascript";
}
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
                <div class="float-end"><span class="btn-upd btn btn-sm btn-outline-secondary">Upd</span><span class="btn-del btn btn-sm btn-outline-danger">Del</span></div>
                <textarea class="dataSelect form-control form-control-sm" rows="7"></textarea>
                <button type="button" class="btn-gen-angular btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#modalAngular">Generar CRUD - Angular</button>
                <button type="button" class="btn-gen-spring btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#modalSpring">Generar API - Spring</button>
                <button type="button" class="btn-gen-laravel btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#modalLaravel">Generar API - Laravel</button>
            </div>`);

            

            grupoData.find("label").html(g.name);
            //grupoData.find("textarea").html(JSON.stringify(g.data.select));
            grupoData.find("textarea").html(JSON.stringify(g.data.select).replaceAll('{','').replaceAll('}','').replaceAll('"','').replaceAll(",","\n"));
            content.append(grupoData);
           
            $(grupoData.find(".btn-upd")).click( (e) => {
                let inputData = grupoData.find(".dataSelect").val();
                let lines = inputData.trim().split("\n");
                console.log("lines",lines);
                console.log("inputData",inputData);
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
                g.data = { select : {... apiData}, create : {... apiData}, insert : {... apiDataIns}};
                console.log('update',data_db);
                saveDBs(data_db);
                cargarDBs(data_db);
                
                
            });
            $(grupoData.find(".btn-del")).click( (e) => {
                element.groups.splice(element.groups.indexOf(g),1);
                saveDBs(data_db);
                cargarDBs(data_db);
            });
            $(grupoData.find(".btn-gen-angular")).click( (e) => {
                console.log("here", g);
                mostra_botones=false;
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
                    if (r!==undefined) return;
                    let forRel = null;
                    if (!esPKbool(g.data.create[f])) {
                        Object.keys(g.data.create).forEach( fr => {                        
                            let rr = relacional(g.data.create[fr],fr);
                            if (rr===undefined) return;
                            if (rr.ownfield == f )
                                forRel = rr;
                        });
                    }
//<td><input class="form-control form-control-sm"  data-cabecera="relacion.campo" type="text" value="${relacionalval(g.data.create[f],"field")}"></td>
                    let tr = $(`<tr><td><input class="form-control form-control-sm" data-cabecera="campo" disabled type="text" value="${f}"></td>
                    <td><input class="form-control form-control-sm" data-cabecera="texto" type="text" value="${f}"></td>
                    <td><select class="form-select form-select-sm" data-cabecera="tipo" value="${campo(g.data.create[f])}"><option value="text" ${esdefault(g.data.create[f],'text')}>text</option><option value="area" ${esdefault(g.data.create[f],'area')}>textarea</option><option value="number" ${esdefault(g.data.create[f],'number')}>number</option><option value="checkbox" ${esdefault(g.data.create[f],'checkbox')}>checkbox</option><option value="checkboxsel" ${esdefault(g.data.create[f],'checkboxsel')}>checkbox select</option><option value="date" ${esdefault(g.data.create[f],'date')}>date</option><option value="relational" ${esdefault(g.data.create[f],'relational')}>relational</option></select></td>
                    <td><input class="form-check-input form-checkbox-sm" data-cabecera="requerido" type="checkbox"  ></td>
                    <td><input class="form-check-input form-checkbox-sm" data-cabecera="visible" type="checkbox" ${esPK(g.data.create[f],"","checked")} ></td>
                    <td><input class="form-check-input form-checkbox-sm" data-cabecera="buscable" type="checkbox" checked ></td>
                    <td><input class="form-check-input form-checkbox-sm" data-cabecera="buscablecheck" type="checkbox" checked ></td>
                    <td><input class="form-check-input form-checkbox-sm" data-cabecera="visiblecheck" type="checkbox" ${esPK(g.data.create[f],"","checked")} ></td>
                    <td><input class="form-check-input form-checkbox-sm" data-cabecera="sortable" type="checkbox" checked ></td>
                    <td><input class="form-check-input form-checkbox-sm" data-cabecera="filtrable" type="checkbox" checked ></td>                                    
                    <td><select class="form-select form-select-sm" data-cabecera="filtrabletipo" value="${campo(g.data.create[f])}"><option value="text" ${esdefault(g.data.create[f],'text')}>text</option><option value="number" ${esdefault(g.data.create[f],'number')}>number</option><option value="date" ${esdefault(g.data.create[f],'date')}>date</option><option value="relational" ${esdefault(g.data.create[f],'relational')}>relational</option></select></td>
                    <td><input class="${esrelacional2(forRel)?'d-none ':''} ${esPK(g.data.create[f],"d-none","")} form-check-input form-checkbox-sm" data-cabecera="tienemin" type="checkbox"  ></td>
                    <td><input class="${esrelacional2(forRel)?'d-none ':''} ${esPK(g.data.create[f],"d-none","")} form-control form-control-sm"  data-cabecera="min" type="number" value="0"></td>
                    <td><input class="${esrelacional2(forRel)?'d-none ':''} ${esPK(g.data.create[f],"d-none","")} form-check-input form-checkbox-sm" data-cabecera="tienemax" type="checkbox"  ></td>
                    <td><input class="${esrelacional2(forRel)?'d-none ':''} ${esPK(g.data.create[f],"d-none","")} form-control form-control-sm"  data-cabecera="max" type="number" value="255"></td>
                    <td><input class="${esrelacional2(forRel)?'d-none ':''} ${esPK(g.data.create[f],"d-none","")} form-check-input form-checkbox-sm" data-cabecera="esrelacion" type="checkbox" disabled ${esrelacionalchecked2(forRel)} ></td>
                    
                    <td><input class=" form-control form-control-sm" data-cabecera="relacion_tabla" type="text" disabled><select class="${!esrelacional2(forRel)?'d-none ':''}" data-cabecera="relacion_campo"></select></td>
                    <td><select class="${!esrelacional2(forRel)?'d-none ':''}" data-cabecera="relacion_nombre"></select></td></tr> `);
                    //let r = relacional(g.data.create[f]);                  
                    //console.log("r",r);
                    if (forRel!==undefined && forRel!=null){
                        let gr = element.groups.find(gx => gx.name == forRel.name)                        
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
                    apiTemp.find("input").val(`/${element.db}/${g.name}${adds}`);
                else
                    apiTemp.find("input").val(`/${element.db}/${g.name}/${a.route}${adds}`);
                content.append(apiTemp);
            }));           
            gruposDiv.append(content);
        });
        //grupos.append(tempData);
        //grupos.append(tempData);
        $("#Contenido").append(template);
    });    
}
function esPK(valor,si,no=''){
    if (valor.includes("pk")) return "";
    return no;        
}
function esPKbool(valor,si,no=''){
    if (valor.includes("pk")) return true;
    return false;        
}
function campo(valor){
    if (valor.includes("[")){
        //console.log("include",valor);
        return "relational";
    }

    let temp_valor = valor.split("|");

    if (temp_valor[0] == "string") return "text";
    if (temp_valor[0] == "number" || temp_valor[0] == "integer" ) return "number";
    if (temp_valor[0] == "number") return "number";
    if (temp_valor[0] == "date") return "date";
    if (temp_valor[0] == "time") return "time";
    if (temp_valor[0] == "boolean") return "boolean";
    

    return temp_valor[0];
}
function esdefault(valor,compara){    
    if (valor.includes("[")){
        return "selected";
    }
    let temp_valor = valor.split("|");
    if (temp_valor[0] == "string") return "text" == compara?"selected":"";
    if (temp_valor[0] == "number" || temp_valor[0] == "integer") return "number" == compara?"selected":"";
    if (temp_valor[0] == "date") return "date" == compara?"selected":"";
    if (temp_valor[0] == "time") return "time" == compara?"selected":"";
    if (temp_valor[0] == "boolean") return "checkbox" == compara?"selected":"";

    return temp_valor[0] == compara?"selected":"";
}
function relacional(valor,index = ''){    
    if (valor.includes("[")){
        if (valor.includes("[[")){
            let val_clean = valor.trim().replaceAll("[","").replaceAll("]","").split("|");
            console.log("val_clean",val_clean);
            let dato = { index:index, name:val_clean[0].trim(),field:val_clean[1].trim(),ownfield:val_clean[2].trim(),array:true };
            console.log("relational_dato",dato);
            return dato;
        }else{
            let val_clean = valor.trim().replaceAll("[","").replaceAll("]","").split("|");
            let dato = { index:index, name:val_clean[0].trim(),field:val_clean[1].trim(),ownfield:val_clean[2].trim(),array:false };
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
function esrelacional2(valorRel){    
    return (valorRel != null && valorRel !== undefined);
}
function esrelacionalchecked(valor){    
    if (valor.includes("["))
        return "checked";    
    return "";
}
function esrelacionalchecked2(valorRel){    
    if (valorRel != null && valorRel !== undefined)
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
        url:"/save_all", dataType: 'json', data: {content: JSON.stringify(data)}, method: 'POST' })
            .done(function (data) {
                console.log("get_db > ", data);
            } );
    
}

function init_front(callback_save) {
    //console.log("init_front:",init_front);
    
    $("[data-param='xnombrex']").change((e)=>{
        let t = $("[data-param='xnombrex']").val();
        let lower = t.toLowerCase().replaceAll(" ","");
        if (t.length ==0) return;        
        t = t.replaceAll("_","").replaceAll(" ","");
        t = t.toLowerCase();
        $("[data-param='xnombrex']").val(t);
        let tC = t[0].toUpperCase()+ t.substring(1, t.length);
        let tCs = tC[tC.length-1] == "s"?tC.substring(0,t.length-1):tC;
        $("[data-param='xnombrecapx']").val( tC );
        $("[data-param='xapix']").val( lower );
        $("[data-param='xmenux']").val( t );
        $("[data-param='xtitulox']").val( `Listado de ${tC}` );
        $("[data-param='xmenuiconx']").val( `far fa-dot-circle` );
        $("[data-param='xtitleNuevox']").val( `Nuev${fem(tCs)} ${tCs}` );        
        $("[data-param='xtitleEditarx']").val( `Editar ${tCs} {{dataEdit.nombre}}` );
        $("[data-param='xmodalsizex']").val('lg');
        $("[data-param='xmodalfullscreensizex']").val( `lg` );        
        
    });
    $("#btnGenerarAngular").click((e)=>{        
        $.ajax({ 
            url:"/getfrontend?framework=angular", dataType: 'json', data: {}, method: 'GET' })
                .done(function (data) {                   
                    mostra_botones=true;

                    $("#btnZip").removeClass("d-none");
                    $("#btnInject").removeClass("d-none");

                    console.log("---data:",data);         
                    console.log("framework > ", data);
                    let params = {};
                    Object.keys(data.params).forEach( p => {
                        let par = $(`[data-param="${p}"]`);
                        if (par.length !=0)
                            params[p] = par.val();
                        else
                            params[p] = data.params[p];
                    } );

                    let cabeceras = [];

                    let tbodyFields = $(".tbodyFields");
                    console.log("tbodyFields:",tbodyFields);
                    console.log("tbodyFields.tr:",tbodyFields.find('tr'));
                    tbodyFields.find('tr').each((i,e) => {
                        cabeceras.push({
                            campo : $(e).find(`[data-cabecera="campo"]`).val(),
                            texto : $(e).find(`[data-cabecera="texto"]`).val(),
                            tipo : $(e).find(`[data-cabecera="tipo"]`).val(),
                            colsize : $(e).find(`[data-cabecera="colsize"]`).val(),
                            requerido : $(e).find(`[data-cabecera="requerido"]`).prop('checked'),
                            visible : $(e).find(`[data-cabecera="visible"]`).prop('checked'),
                            buscable : $(e).find(`[data-cabecera="buscable"]`).prop('checked'),
                            buscablecheck : $(e).find(`[data-cabecera="buscablecheck"]`).prop('checked'),
                            visiblecheck : $(e).find(`[data-cabecera="visiblecheck"]`).prop('checked'),
                            sortable : $(e).find(`[data-cabecera="sortable"]`).prop('checked'),
                            filtrable : $(e).find(`[data-cabecera="filtrable"]`).prop('checked'),
                            filtrabletipo : $(e).find(`[data-cabecera="filtrabletipo"]`).val(),
                            tienemin : $(e).find(`[data-cabecera="tienemin"]`).prop('checked'),
                            min : $(e).find(`[data-cabecera="min"]`).val(),
                            tienemax : $(e).find(`[data-cabecera="tienemax"]`).prop('checked'),
                            max : $(e).find(`[data-cabecera="max"]`).val(),
                            esrelacion : $(e).find(`[data-cabecera="esrelacion"]`).prop('checked'),
                            relacion_campo : $(e).find(`[data-cabecera="relacion_campo"]`).val(),
                            relacion_nombre : $(e).find(`[data-cabecera="relacion_nombre"]`).val(),
                            relacion_tabla :  $(e).find(`[data-cabecera="relacion_tabla"]`).val(),
                            relacion_index :  $(e).find(`[data-cabecera="relacion_index"]`).val(),
                            esarray :  $(e).find(`[data-cabecera="relacion_array"]`).val(),
                        });
                    })
                    //let xnombrecapx = $(`[data-param="xnombrecapx"]`).val();
                    //console.log("xnombrecapx:",xnombrecapx);
                    data.cabecera = cabeceras;
                    data.params = params;
                    
                    console.log("cabeceras:",cabeceras);
                    console.log("params:",params);
                    console.log("data:",data);
                    if (data.params['xmenuroutex']==""){                        
                        data.params['xroutemodulenamex'] = data.params['xsubpathx'];
                        data.params['xbarmenuroutebarx'] = "";
                        data.params['xbarmenuroutex'] = "";
                        data.params['xmenuroutebarx'] = "";
                    }else{
                        data.params['xroutemodulenamex'] = data.params['xmenuroutex'];
                        data.params['xbarmenuroutex'] = "/"+data.params['xmenuroutex'];
                        data.params['xmenuroutebarx'] = data.params['xmenuroutex']+"/";
                        data.params['xbarmenuroutebarx'] = "/"+data.params['xmenuroutex']+"/";
                    }
                    prepareHeaders(data);
                    callback_save(data);                    
                    addFiles(data);
                    data_generated = data;
                    console.log("data_generated",data_generated);
                }
        );
    });
    $("#btnZip").click((e)=>{    

        $.ajax({ url:"/zipfront",xhr: function() {
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
                a.download = `angular-${data_generated.params.xnombrex}.zip`;
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
            });
    });

    $("#btnInject").click((e)=>{    

        $.ajax({ url:"/injectfront",xhr: function() {
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
                a.download = `angular-${data_generated.params.xnombrex}.zip`;
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
            });
    });

    $.ajax({ 
        url:"/db_all", dataType: 'json', data: {}, method: 'GET' })
            .done(function (data) {
                data_db = data;
                console.log("get_db > ", data);
                cargarDBs(data);
            }
    );

};