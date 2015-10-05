shelter.prototype = Object.create(Phaser.Sprite.prototype);

shelter.prototype.constructor = Shelter;

shelter.prototype.force = {x:0.0, y:0.0};

function Shelter(game, x, y) {
	console.log("Creating shelter");

	Phaser.Sprite.call(this, game, x, y, 'shelter');
	game.physics.enable(this, Phaser.Physics.ARCADE);
	this.body.allowRotation = false;
	game.add.existing(this);
}
