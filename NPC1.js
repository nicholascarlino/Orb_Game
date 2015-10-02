npc1.prototype = Object.create(Phaser.Sprite.prototype);

npc1.prototype.constructor = Npc1;


function Npc1(game, x, y) {
	<--! Dont know how to load spritesheet here -->
	Phaser.Sprite.call(this, game, x, y, 'assets/');
	game.physics.enable(this, Phaser.Physics.ARCADE);
	this.body.allowRotation = false;
	game.add.existing(this);
}
npc1.prototype.update = function() {
	var mx = game.input.mousePointer.x;
	var my = game.input.mousePointer.y;

	this.angle = Math.atan2(this.position.x - mx, this.position.y - my) * -57.2957795;

	<--! Dont know if this is right -->
	if (game.input.activePointer == mx or game.input.activePointer == my){
		game.physics.arcade.moveToPointer(this, num, game.input.activePointer, numb);
	}
	<--! Implement action key -->
	if (game.input.activePointer == ACTION){
	}
}
