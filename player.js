Player.prototype = Object.create(Phaser.Sprite.prototype);

Player.prototype.constructor = Player;

Player.prototype.force = {x:0.0, y:0.0};

var wasd;
var fire;
var action;
var player;
var position;
var HealthValue;

function Player(game, x, y, speed) {
	console.log("Creating Player");

	Phaser.Sprite.call(this, game);

	player = this.game.add.sprite(x,y, 'player');

	player.animations.add('left', [9, 10, 11, 10], speed, true);
	player.animations.add('right', [3, 4, 5, 4], speed, true);
	player.animations.add('up', [0, 1, 2, 1], speed, true);
	player.animations.add('down', [6, 7, 8, 7], speed, true);
	game.physics.p2.enable(player, true);
	player.anchor.setTo(.5,.5);
	player.body.clearShapes();
	player.body.addRectangle(25, 18, 0, 18);
	player.body.fixedRotation = true;
	player.scale.setTo(.7,.7);
	player.weapon_part = 0;

	this.game = game;
	player.body.collideWorldBounds = true;

	player.weapon = new WeaponGroup(this.game , player.x , player.y , 10, 'rock');

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
	HealthValue = 100;
	this.HealthBar.setPercent(100);

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

	fire = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
	action = game.input.keyboard.addKey(Phaser.Keyboard.E);

	game.add.existing(this);	
}

Player.prototype.update = function() {

	
	// reset the player's movement every loop to make sure they stay still 
	player.body.setZeroVelocity();

	if(this.isDead()){
		player.x = 0;
		player.y = 0;
	}else{

	this.HealthBar.setPosition(player.x , player.y -20);
	}
	if (wasd.down.isDown) {
		player.animations.play('down');
		
		player.body.y += 3;

		position.faceLeft = false;
 		position.faceRight = false;
 		position.faceUp = false;
 		position.faceDown = true;
	}
	else if (wasd.left.isDown) {
		player.animations.play('left');
		player.body.x -= 3;
		position.faceLeft = true;
 		position.faceRight = false;
 		position.faceUp = false;
 		position.faceDown = false;
	}
	else if (wasd.right.isDown) {
		player.animations.play('right');
		player.body.x += 3;
		position.faceLeft = false;
 		position.faceRight = true;
 		position.faceUp = false;
 		position.faceDown = false;
	}
	else if (wasd.up.isDown) {
		player.animations.play('up');
		player.body.y -= 3;
		position.faceLeft = false;
 		position.faceRight = false;
 		position.faceUp = true;
 		position.faceDown = false;;

	} 
	if (fire.isDown) {
		console.log("shooting ...");

		if(position.faceLeft == true){
		     player.weapon.fire(player.x , player.y , 0 , -400);
		} 
		else if (position.faceRight == true){
		     player.weapon.fire(player.x , player.y , 0 , 400);
		}
		else if (position.faceUp == true){
		     player.weapon.fire(player.x , player.y , -400 , 0);
		}
		else if(position.faceDown == true){
		     player.weapon.fire(player.x , player.y , 400 , 0);
		}         
	}

}


Player.prototype.getCoordinates = function() {

	//console.log("Halllo",player.x , player.y);
	var location = {x:player.x , y:player.y};

	return location;
}

//weapon has to be a sprite
Player.prototype.change_weapon = function(weapon) {
	
	this.weapon = new WeaponGroup(weapon);
}
Player.prototype.reduceHealth = function(power) {
	
	if(HealthValue <= 1){
		console.log("very down", HealthValue)
		this.dies();
	}

	console.log("reduceHealth ", HealthValue);
	HealthValue -= power;
	this.HealthBar.setPercent(HealthValue);

}

Player.prototype.dies = function(){
	console.log("is about to die")
   player.destroy();
   this.HealthBar.setPosition(-1 , -1); // not good
   player.x = 0 ;
   player.y = 0;
}

Player.prototype.isDead = function(){
	if(HealthValue <= 0){
		return true;
	}
}

Player.prototype.addHealth = function(power) {
	var amount = power;
	
	if (HealthValue + power > 100){
		amount = 100 - HealthValue;
	}
	
	HealthValue += amount;
	this.HealthBar.setPercent(HealthValue);
}

