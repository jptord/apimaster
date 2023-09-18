

class Config{
    constructor(btnSaveConfig, btnDelConfig, btnNewConfig, selConfig){        
        this.galletas_config = new Galletas();
        this.datos = [];
        this.selConfig = selConfig; 
        this.cargar();
        this.btnSaveConfig = btnSaveConfig;
        this.btnDelConfig = btnDelConfig;
        this.btnNewConfig = btnNewConfig;
        btnNewConfig.click( e => {
            this.nuevo();
            this.cargar();
            this.actualizar();
        });
        btnDelConfig.click( e => {
            this.borrar();
            this.actualizar();
        });
        btnSaveConfig.click( e => {
            this.guardarActual();
        });
        this.actualizar();
    }
    cargar(){
        this.datos = this.galletas_config.get("config_all");
        console.log("this", this.datos);
        this.selConfig.empty();
        if (this.datos == null) this.datos = [];
        else{
            this.datos = JSON.parse(this.datos);
        }
        this.datos.forEach( (d,i) => {
            const opt = $(`<option value="${i}">${d.name}</option>`);
            this.selConfig.append(opt);
            //Object.keys(d.params).forEach( p => {
                //selConfig.append(`<option>${p}</option>`);
            //});
        });
        this.selConfig.on("click",e=>{
            this.actualizar();
        });
        this.selConfig.on("change",e=>{
            //console.log("change");
            this.actualizar();
        });

        console.log("cargar",this.datos);
    }
    nuevo(){
        const xinjectionpathx = $(`[data-param="xinjectionpathx"]`).val();
        const xsubpathx = $(`[data-param="xsubpathx"]`).val();
        console.log("xinjectionpathx",xinjectionpathx);
        console.log("xsubpathx",xsubpathx);
        this.datos.push({name:xsubpathx,params : {
            xinjectionpathx : xinjectionpathx,
            xsubpathx : xsubpathx,
        }});
        console.log(this.datos);
        this.galletas_config.set("config_all",JSON.stringify(this.datos));        

        this.message("Creado");
    }
    guardarActual(){
        this.datos[parseInt(selConfig.val())].params.xinjectionpathx = $(`[data-param="xinjectionpathx"]`).val();
        this.datos[parseInt(selConfig.val())].params.xsubpathx = $(`[data-param="xsubpathx"]`).val();
        this.guardar();
        this.message("Guardado")
    }
    guardar(){
        this.galletas_config.set("config_all",JSON.stringify(this.datos));

    }
    borrar(){
        //console.log("selConfig.val():",selConfig.val());
       this.datos.splice(parseInt(this.selConfig.val()), 1);
       console.log("this.datos",this.datos);
       this.guardar();
       this.cargar();

       this.message("Eliminado");
    }
    message(msg){
        $("#labelConfigMessage").text(msg);
        setTimeout(()=>{
            $("#labelConfigMessage").text("");
        },3000);
    }
    agregar(){

    }
    actualizar(){
        if (this.selConfig.val()==null){
            this.btnSaveConfig.hide();
            this.btnDelConfig.hide();
            
            return;
        }else{
            this.btnSaveConfig.show();
            this.btnDelConfig.show();
        }
        
        $(`[data-param="xinjectionpathx"]`).val(this.datos[this.selConfig.val()].params.xinjectionpathx);
        $(`[data-param="xsubpathx"]`).val(this.datos[this.selConfig.val()].params.xsubpathx);
    }
}