/// <reference path="typings/createjs-lib/createjs-lib.d.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />
/// <reference path="objects/plane.ts" />
/// <reference path="objects/island.ts" />
/// <reference path="objects/cloud.ts" />
/// <reference path="objects/ocean.ts" />
var canvas;
var stage;
var assetLoader;
// Game Objects
var plane;
var island;
var clouds = [];
var ocean;
// asset manifest - array of asset objects
var manifest = [
    { id: "cloud", src: "assets/images/cloud.png" },
    { id: "island", src: "assets/images/island.png" },
    { id: "ocean", src: "assets/images/ocean.gif" },
    { id: "plane", src: "assets/images/plane.png" }
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
    main();
}
function gameLoop() {
    ocean.update();
    plane.update();
    island.update();
    for (var cloud = 3; cloud > 0; cloud--) {
        clouds[cloud].update();
    }
    stage.update(); // Refreshes our stage
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
    for (var cloud = 3; cloud > 0; cloud--) {
        clouds[cloud] = new objects.Cloud();
        stage.addChild(clouds[cloud]);
    }
}
//# sourceMappingURL=game.js.map