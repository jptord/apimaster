class Galletas{
    constructor(){
        let self = this;
        this.set = (cname, cvalue, exdays=10000) => {
            localStorage.setItem(cname, cvalue);
        };
        this.get = (cname) =>{
            const cat = localStorage.getItem(cname);
            if (cat!=null || cat !== undefined) return cat;
            return "";
        };
        this.set_cook = (cname, cvalue, exdays=10000) => {
            const d = new Date();
            d.setTime(d.getTime() + (exdays*24*60*60*1000));
            let expires = "expires="+ d.toUTCString();
            document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        };
        this.get_cook = (cname) =>{
            let name = cname + "=";
            let decodedCookie = decodeURIComponent(document.cookie);
            let ca = decodedCookie.split(';');
            for(let i = 0; i <ca.length; i++) {
              let c = ca[i];
              while (c.charAt(0) == ' ') {
                c = c.substring(1);
              }
              if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
              }
            }
            return "";
        };

        this.dibujaMemoria = (memoriaDiv,callback) => {
            let self = this;
            memoriaDiv.empty();
            let memDiv = `          
            <div class="border row" data-grab-name="inputname">
                <label class="col-10"> ttitle </label>                
                <button data-grab-value="commandValue"  class="btnLoad col-1 btn btn-sm btn-outline-success">L</button>
                <button data-grab-value="commandValue"  class="btnDel col-1 btn btn-sm btn-outline-danger">D</button>
            </div>  `;
            
            let memoria = this.getmem("");

            let inputs = $("[data-name]");
            for(let i=0; i< inputs.length; i++) {                
                let element = $(inputs[i]);                
                let name = element.attr("data-name");  
                
                let msm = this.getmem(name);
                if (msm == null) continue;
                
                msm.c.forEach((m)=>{
                    let cardMem = $(memDiv.replaceAll("inputname",name).replaceAll("ttitle",m.t).replaceAll("commandValue",m.i));
                    memoriaDiv.append(cardMem);
                    cardMem.find(".btnLoad").click( ()=>{
                        callback( this, name, m.t, m.i );
                    });
                    cardMem.find(".btnDel").click( ()=>{
                        self.delmem(name,m);
                        self.dibujaMemoria(memoriaDiv,callback);
                    });
                })
            }
        };

        this.delmem = (cname, objMem, exdays=10000)=>{
            let obj = this.getmem(cname);
            obj.c.splice(obj.c.indexOf(objMem),1);
            this.setmem(cname,obj);
            console.log("updmem",obj);
        };

        this.addmem = (cname,title, cvalue, exdays=10000)=>{
            let obj = this.getmem(cname);
            if (obj == null) this.setmem(cname,{c:[]}) ;
            obj = this.getmem(cname);
            obj.c.push({i:cvalue,t:title});
            this.setmem(cname,obj);
            console.log("addmem",obj);
        };

        this.setmem = (cname, ovalue, exdays=10000)=>{
            const d = new Date();
            d.setTime(d.getTime() + (exdays*24*60*60*1000));
            let expires = "expires="+ d.toUTCString();
            document.cookie = "mem."+cname + "=" + JSON.stringify(ovalue) + ";" + expires + ";path=/";
        };

        this.getmem = (cname)=>{
            let name = "mem." + cname + "=";
            let decodedCookie = decodeURIComponent(document.cookie);
            let ca = decodedCookie.split(';');
            for(let i = 0; i <ca.length; i++) {
              let c = ca[i];
              while (c.charAt(0) == ' ') {
                c = c.substring(1);
              }
              if (c.indexOf(name) == 0) {
                return JSON.parse(c.substring(name.length, c.length));
              }
            }
            return null;
        };
        this.recargar = (prefix = '')=>{
            let inputs = $("[data-name]");
            //console.log(inputs);            
            console.log("cargar cookies");
            for(let i=0; i< inputs.length; i++) {
                let element = $(inputs[i]);           
                //console.log(element);
                let name = element.attr("data-name");                
                console.log(`cargando ${prefix} ${name} ${self.get(name)}`);
                element.val(self.get(prefix+name));
            };
        };
        this.guardar = (prefix = '')=>{
            let inputs = $("[data-name]");
            //console.log(inputs);
            console.log("guardar cookies");
            for(let i=0; i< inputs.length; i++) {
                let element = $(inputs[i]);
                let name = element.attr("data-name");                
                console.log(`guardando ${prefix} ${name} ${element.val()}`);
                self.set(prefix + name, element.val());
            };
        };
    } 
}

