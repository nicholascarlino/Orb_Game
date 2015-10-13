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

	this.name = type;

	game.add.existing(this);
}
collectable.prototype.getCollectCoordinates = function() 
{
	var location = {x:this.x, y:this.y};

	return location;
}
collectable.prototype.pick_up = function()
{
	var player_coord = this.game.player.getCoordinates();

	var collect_coord = this.getCollectCoordinates();

	var distx = player_coord.x - collect_coord.x;

	var disty = player_coord.y - collect_coord.y;

	if ((distx > -2) && (distx < 2) && (disty > -2) && (disty < 2)) {
		this.kill();
		if (this.name == 'water') {
			game.player.addHealth(20);
		}
		else if (this.name == 'food') {
			game.player.addHealth(40);
		}
		else if (this.name == 'wep_part') {
			game.player.weapon_part++;
		}
		else {
			game.player.wood++;
		}
	}
}
