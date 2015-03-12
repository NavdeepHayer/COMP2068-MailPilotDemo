/// <reference path="typings/createjs-lib/createjs-lib.d.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />
/// <reference path="typings/stats/stats.d.ts" />

/// <reference path="objects/gameobject.ts" />
/// <reference path="objects/plane.ts" />
/// <reference path="objects/island.ts" />
/// <reference path="objects/cloud.ts" />
/// <reference path="objects/ocean.ts" />


var stats: Stats = new Stats();
var canvas;
var stage: createjs.Stage;
var assetLoader: createjs.LoadQueue;

// Game Objects
var plane: objects.Plane;
var island: objects.Island;
var clouds: objects.Cloud[] = [];
var ocean: objects.Ocean;



// asset manifest - array of asset objects
var manifest = [
    { id: "cloud", src: "assets/images/cloud.png" },
    { id: "island", src: "assets/images/island.png" },
    { id: "ocean", src: "assets/images/ocean.gif" },
    { id: "plane", src: "assets/images/plane.png" },
    { id: "engine", src: "assets/audio/engine.ogg" },
    { id: "yay", src: "assets/audio/yay.ogg" },
    { id: "thunder", src: "assets/audio/thunder.ogg" }

];

// Game Objects 

function preload() {
    assetLoader = new createjs.LoadQueue(); // instantiated assetLoader
    assetLoader.installPlugin(createjs.Sound);
    assetLoader.on("complete", init, this); // event handler-triggers when loading done
    assetLoader.loadManifest(manifest); // loading my asset manifest
}


function init() {
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20); // Enable mouse events
    createjs.Ticker.setFPS(60); // 60 frames per second
    createjs.Ticker.addEventListener("tick", gameLoop);
    setupStats();

    main();
}

// UTILITY METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function setupStats() {
    stats.setMode(0);
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '650px';
    stats.domElement.style.top = '440px';
    document.body.appendChild(stats.domElement);
}

// Calculate the distance between two points
function distance(p1: createjs.Point, p2: createjs.Point):number {

    return Math.floor(Math.sqrt(Math.pow((p2.x - p1.x),2) + Math.pow((p2.y -p1.y),2)));
}

function checkCollision(collider: objects.GameObject) {
    var p1: createjs.Point = new createjs.Point();
    var p2: createjs.Point = new createjs.Point();
    p1.x = plane.x;
    p1.y = plane.y;
    p2.x = collider.x;
    p2.y = collider.y;
    if (distance(p2, p1) < ((plane.height * 0.5) + (collider.height * 0.5))) {
        if (!collider.isColliding) {
            createjs.Sound.play(collider.soundString);
            collider.isColliding = true;
        }
    } else {
        collider.isColliding = false;
    }
}


function gameLoop() {
    stats.begin(); // Begin metering

    ocean.update();
    plane.update();
    island.update();

    for (var cloud = 3; cloud > 0; cloud--) {
        clouds[cloud].update();
        checkCollision(clouds[cloud]);
    }

    checkCollision(island);


    stage.update(); // Refreshes our stage

    stats.end(); // End metering
}





// Our Game Kicks off in here
function main() {
    // Add ocean to game
    ocean = new objects.Ocean();
    stage.addChild(ocean);


    // Add island to game
    island = new objects.Island();
    stage.addChild(island);


    // Add plane to game
    plane = new objects.Plane();
    stage.addChild(plane);

    // Add clouds to game
    for (var cloud = 3; cloud > 0; cloud--) {
        clouds[cloud] = new objects.Cloud();
        stage.addChild(clouds[cloud]);
    }



    
}