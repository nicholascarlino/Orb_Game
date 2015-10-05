var wasd;
var fire;
var action;

player.prototype = Object.create(Phaser.Sprite.prototype);

player.prototype.constructor = Player;

player.prototype.force = {x:0.0, y:0.0};

function Player(game, x, y, speed) {
	console.log("Creating Player");
	Phaser.Sprite.call(this, game, x, y, 'player');
	
	player.prototype.animations.add('left', [9, 10, 11, 10], speed, true);
	player.prototype.animations.add('right', [3, 4, 5, 4], speed, true);
	player.prototype.animations.add('up', [0, 1, 2, 1], speed, true);
	player.prototype.animations.add('down', [6, 7, 8, 7], speed, true);

	game.physics.enable(this, Phaser.Physics.ARCADE);
	this.body.allowRotation = false;
	this.body.collideWorldBounds = true;

	//might need to look at this
	this.HealthBar = new HealthBar(game, this.x, this.y);
	this.weapon = new Weapon(game);

	wasd = {
		up: game.input.keyboard.addKey(Phaser.Keyboard.W),
		down: game.input.keyboard.addKey(Phaser.Keyboard.S),
		left: game.input.keyboard.addKey(Phaser.Keyboard.A),
		right: game.input.keyboard.addKey(Phaser.Keyboard.D),
	};
	fire = game.input.keyboard.addKey(Phaser.Keyboard.SPACE);
	action = game.input.keyboard.addKey(Phaser.Keyboard.E);

	game.add.existing(this);	
}
player.prototype.update = function() {
	if (wasd.down.isDown) {
		this.y += 3;
	}
	else if (wasd.left.isDown) {
		this.x -= 3;
	}
	else if (wasd.right.isDown) {
		this.x += 3;
	}
	else if (wasd.up.isDown) {
		this.y -= 3;
	}
	// Find specific name of function
	if (fire.isDown) {
		this.weapon.fire(this.x, this.y); 
	}
	//scroll thru text, talk to npc, build shelter
	if (action.isDown) {
		
	}
}
player.prototype.change_weapon = function(weapon) {
	this.weapon = weapon;
}
player.prototype.reduceHealth = function(power) {
	this.HealthBar.reduce(power);
}
player.prototype.addHealth = function(power) {
	this.HealthBar.increase(power);
}
