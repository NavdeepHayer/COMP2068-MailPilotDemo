var canvas;
var stage: createjs.Stage;
var assetLoader: createjs.LoadQueue;

var manifest = [
    { id: "cloud", src: "assets/images/cloud.png" },
    { id: "island", src: "assets/images/island.png" },
    { id: "ocean", src: "assets/images/ocean.gif" },
    { id: "plane", src: "assets/images/plane.png" }
];

// Game Objects 

function preload() {

    assetLoader = new createjs.LoadQueue();
    assetLoader.installPlugin(createjs.Sound);
    assetLoader.on("complete", init, this);
    assetLoader.loadManifest(manifest);
}


function init() {
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20); // Enable mouse events
    createjs.Ticker.setFPS(60); // 60 frames per second
    createjs.Ticker.addEventListener("tick", gameLoop);

    main();
}

function gameLoop() {



    stage.update(); // Refreshes our stage
}





// Our Game Kicks off in here
function main() {

    console.log("Getting our game started...");

    
}