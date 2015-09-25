var boundsx = 800, boundsy = 600;
var game = new Phaser.Game(boundsx, boundsy, Phaser.AUTO, "game", {preload:
		preload, update:update, create:create});

var wasd;
function preload(){

}

function create(){

	wasd = {
		up: game.input.keyboard.addKey(Phaser.Keyboard.W);
		down: game.input.keyboard.addKey(Phaser.Keyboard.S);
		left: game.input.keyboard.addKey(Phaser.Keyboard.A);
		right: game.input.keyboard.addKey(Phaser.Keyboard.D);
}

function update(){

}
