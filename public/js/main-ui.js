var stage = new createjs.Stage("mainCanvas");
var update = false;

function init(){
    createjs.Touch.enable(stage);
    stage.enableMouseOver(10);
    stage.mouseMoveOutside = true; 
    createjs.Ticker.addEventListener("tick", tick);
    ventana();
    stage.update();
};

function ventana(){
    var ventana = new createjs.Shape();
    ventana.graphics.beginFill("#ffffff").drawRect(0,0, 100, 50);
    ventana.x = 100;
    ventana.y = 50;
    ventana.regX = 50;
    ventana.regY = 25;
    ventana.originalScale = 1;
    var x0 = 0;
    var y0 = 0;
    ventana.on('mousedown',evt => {
        x0 = ventana.x - evt.stageX;
        y0 = ventana.y - evt.stageY;
    });
    ventana.on("pressmove", function (evt) {
        ventana.x = evt.stageX + x0;
        ventana.y = evt.stageY + y0;
        update= true;
    });

    ventana.on("rollover", function (evt) {
        ventana.scale = ventana.originalScale * 1.1;
        update= true;
    });

    ventana.on("rollout", function (evt) {
        ventana.scale = ventana.originalScale;
        update= true;
    });


    stage.addChild(ventana);
}


function tick(event) {
    if (update) {
        update = false; 
        stage.update(event);
    }
}
