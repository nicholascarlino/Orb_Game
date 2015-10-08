collectable.prototype = Object.create(Phaser.Sprite.prototype);

collectable.prototype.constructor = Collectable;

collectable.prototype.force = {x:0.0, y:0.0};

var collect;

function Collectable(game, x, y, type) {
	console.log("Creating collectable");

	Phaser.Sprite.call(this, game);

	collect = this.game.add.sprite(x, y, type);

	collect.animations.add('stationary', [0, 1, 2, 3, 4], 10, true);
	game.physics.p2.enable(collect);
	collect.body.fixedRotation = true;

	this.game = game;

	game.add.existing(this);
}	
