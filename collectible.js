Collectible.prototype = Object.create(Phaser.Sprite.prototype);

Collectible.prototype.constructor = Collectible;

Collectible.prototype.force = {x:0.0, y:0.0};

function Collectible(game, x, y, type) {
	console.log("Creating Collectible");

	Phaser.Sprite.call(this, game, x, y, type);

	if (type == 'food'){
		this.scale.setTo(.05, .05);
	}
	game.physics.p2.enable(this, true);
	this.body.fixedRotation = true;

	this.game = game;

	this.name = type;

	game.add.existing(this);
}
Collectible.prototype.update = function()
{
	var grab_dist = 30;

	var player_coord = this.game.player.getCoordinates();

	var distx = player_coord.x - this.x;

	var disty = player_coord.y - this.y;

	if ((distx > -grab_dist) && (distx < grab_dist) && (disty > -grab_dist) && (disty < grab_dist)) {
		this.destroy();
		if (this.name == 'water') {
			game.player.addHealth(20);
			console.log("Picked up water");
		}
		else if (this.name == 'food') {
			game.player.addHealth(40);
			console.log("Picked up food");
		}
		else if (this.name == 'wood') {
			console.log("Picked up wood");
			game.player.wood = true;
			console.log(game.player.wood);
		} else if (this.name == 'plasma') {
			game.player.change_weapon('plasma', 20);
		}
	}
}
