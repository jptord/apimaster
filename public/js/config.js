

class Config{
    constructor(){        
        this.galletas_config = new Galletas();
        this.datos = [];
        this.cargar();
    }
    cargar(){
        this.datos = this.galletas_config.getmem("config");
    }
    guardar(){

    }
    agregar(){

    }
}