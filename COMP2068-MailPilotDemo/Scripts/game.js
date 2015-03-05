var canvas;
var stage;
// Game Objects 
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
}
//# sourceMappingURL=game.js.map