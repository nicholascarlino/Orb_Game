

Player.prototype = Object.create(Phaser.Sprite.prototype);

Player.prototype.constructor = Player;

Player.prototype.force = {x:0.0, y:0.0};

var wasd;
var fire;
var action;
var player;
var position;
var HeathValue;

function Player(game, x, y, speed) {
	console.log("Creating Player");

	Phaser.Sprite.call(this, game);

	//Phaser.Sprite.call(this, game, x, y, 'player');
	player = this.game.add.sprite(x,y, 'player');
	player.animations.add('left', [9, 10, 11, 10], speed, true);
	player.animations.add('right', [3, 4, 5, 4], speed, true);
	player.animations.add('up', [0, 1, 2, 1], speed, true);
	player.animations.add('down', [6, 7, 8, 7], speed, true);

	game.physics.enable(this, Phaser.Physics.ARCADE);
	//this.body.allowRotation = false;
	//this.body.collideWorldBounds = true;

	//might need to look at this

	 var barConfig ={
       width: 40,
       height: 10,
       x: x,
       y: y,
       bg: {
      color: '#651828'
      },
      bar: {
      color: '#0000FF'
      },
      animationDuration: 200,
      flipped: false
  };
	this.HealthBar = new HealthBar(game, barConfig);
	this.HeathValue = 100;
	this.HealthBar.setPercent(100);
	//this.weapon = new Weapon(game);

	wasd = {
		up: game.input.keyboard.addKey(Phaser.Keyboard.W),
		down: game.input.keyboard.addKey(Phaser.Keyboard.S),
		left: game.input.keyboard.addKey(Phaser.Keyboard.A),
		right: game.input.keyboard.addKey(Phaser.Keyboard.D),
	};

	position = {
           faceLeft:false,
           faceRight:false,
           faceUp:false,
           faceDown:true,
       }

	fire = game.input.keyboard.addKey(Phaser.Keyboard.SPACE);
	action = game.input.keyboard.addKey(Phaser.Keyboard.E);

	game.add.existing(this);	
}

Player.prototype.update = function() {

	//console.log("in update", player.x , player.y);
	this.HealthBar.setPosition(player.x , player.y);
	if (wasd.down.isDown) {
		player.animations.play('down');
		
		player.y += 3;


		position.faceLeft = false;
 		position.faceRight = false;
 		position.faceUp = false;
 		position.faceDown = true;
	}
	else if (wasd.left.isDown) {
		player.animations.play('left');
		player.x -= 3;
		position.faceLeft = true;
 		position.faceRight = false;
 		position.faceUp = false;
 		position.faceDown = false;
	}
	else if (wasd.right.isDown) {
		player.animations.play('right');
		player.x += 3;
		position.faceLeft = false;
 		position.faceRight = true;
 		position.faceUp = false;
 		position.faceDown = false;
	}
	else if (wasd.up.isDown) {
		player.animations.play('up');
		player.y -= 3;
		position.faceLeft = false;
 		position.faceRight = false;
 		position.faceUp = false;
 		position.faceDown = true;
	}/*
	else{
		if (position.faceLeft==true){
			player.animations.play('left');
		}
		else if(position.faceRight==true){
			player.animations.play('right');
		}
		else if (position.faceUp==true){
			player.animations.play('up');
		}
		else if (position.faceDown==true){
			player.animations.play('down');
		}

	}*/




	// Find specific name of function
	if (fire.isDown) {
		this.weapon.fire(this.x, this.y); 
	}
	//scroll thru text, talk to npc, build shelter
	if (action.isDown) {
		
	}
}

//Player.prototype.locationX = player.x;
//Player.prototype.locationY = player.y;

Player.prototype.getCoordinates = function() {

	//console.log("Halllo",player.x , player.y);
	var location = {x:player.x , y:player.y};

	return location;
}

Player.prototype.change_weapon = function(weapon) {
	this.weapon = weapon;
}
Player.prototype.reduceHealth = function(power) {
	this.HealthBar.reduce(power);
}
Player.prototype.addHealth = function(power) {
	this.HealthBar.increase(power);
}
