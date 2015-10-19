Player.prototype = Object.create(Phaser.Sprite.prototype);

Player.prototype.constructor = Player;

Player.prototype.force = {x:0.0, y:0.0};

var wasd;
var fire;
var action;
var player;
var position;
var HealthValue;
var weaponTime = 0;
var weaponDelay = 400;


function Player(game, x, y, speed) {
	console.log("Creating Player");

	Phaser.Sprite.call(this, game);

	//Phaser.Sprite.call(this, game, x, y, 'player');

	player = this.game.add.sprite(x,y, 'player');

	player.animations.add('left', [9, 10, 11, 10], speed, true);
	player.animations.add('right', [3, 4, 5, 4], speed, true);
	player.animations.add('up', [0, 1, 2, 1], speed, true);
	player.animations.add('down', [6, 7, 8, 7], speed, true);
	game.physics.p2.enable(player, true);
	//game.physics.enable(player, Phaser.Physics.ARCADE);
	player.anchor.setTo(.5,.5);
	player.body.clearShapes();
	player.body.addRectangle(25, 18, 0, 18);
	player.body.fixedRotation = true;
	player.scale.setTo(.7,.7);
	player.wood = 0;


	//player.body.onBeginContact.add(this.contactHandler);

	this.game = game;
	//this.body.allowRotation = false;
	player.body.collideWorldBounds = true;


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

	fire = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
	action = game.input.keyboard.addKey(Phaser.Keyboard.E);

	game.add.existing(this);	
}

Player.prototype.update = function() {

	
	// reset the player's movement every loop to make sure they stay still 
	player.body.setZeroVelocity();

	//console.log("in update", player.x , player.y);
	if(this.isDead()){
		player.x = 0;
		player.y = 0;
	}else{

	this.HealthBar.setPosition(player.x , player.y -20);
	if (wasd.down.isDown) {
		player.animations.play('down');
		
		player.body.y += 3;
		//player.body.velocity.y = 20;


		position.faceLeft = false;
 		position.faceRight = false;
 		position.faceUp = false;
 		position.faceDown = true;
	}
	else if (wasd.left.isDown) {
		player.animations.play('left');
		player.body.x -= 3;
		//player.body.velocity.x = -20
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
		
		if(game.time.now > weaponTime){
			console.log("shooting ...");

			if(position.faceLeft == true){
				player.weapon = new Weapon(this.game , player.x -8, player.y ,10, 'rock', -400, 0);
		     //player.weapon.fire(player.x , player.y , 0 , -400);
			} 
			else if (position.faceRight == true){
				player.weapon = new Weapon(this.game , player.x +8, player.y ,10, 'rock', 400, 0);

		    // player.weapon.fire(player.x , player.y , 0 , 400);
			}
			else if (position.faceUp == true){
				player.weapon = new Weapon(this.game , player.x , player.y -8,10, 'rock', 0, -400);

		    // player.weapon.fire(player.x , player.y , -400 , 0);
			}
			else if(position.faceDown == true){
			player.weapon = new Weapon(this.game , player.x , player.y+15 ,10, 'rock', 0, 400);

		    // player.weapon.fire(player.x , player.y , 400 , 0);
			}  
			weaponTime = game.time.now + weaponDelay;
		}       
	}
    /* var bool = game.physics.arcade.overlap(player, this.game.enemy, function(){
     		console.log("reduceHealth ", this.HeathValue);
			this.HealthValue -= 2;
			this.HealthBar.setPercent(this.HealthValue);		
     }  , this);


    console.log(bool);*/

	

	/*
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


}

	// Find specific name of function
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

//weapon has to be a sprite
Player.prototype.change_weapon = function(weapon) {
	
	this.weapon = new Weapon(weapon);
}
Player.prototype.reduceHealth = function(power) {
	
	if(HealthValue <= 1){
		console.log("very down", HealthValue)
		this.dies();
	}

	console.log("reduceHealth ", HealthValue);
	HealthValue -= power;
	this.HealthBar.setPercent(HealthValue);
	//console.log("reduceHealth ", HealthValue);

}

Player.prototype.dies = function(){
	console.log("is about to die")
   player.destroy();
   this.HealthBar.setPosition(-1 , -1); // not good
   player.x = 0 ;
   player.y = 0;
   //this.destroy();
}

Player.prototype.isDead = function(){
	if(HealthValue <= 0){
		return true;
	}
}

Player.prototype.addHealth = function(power) {
	this.HealthBar.increase(power);
}



Player.prototype.contactHandler = function(body, shape1, shape2, equation) {
	if (body.sprite == null) {
		return;
	}
	else if (body.sprite.name == 'wood') {
		this.wood++;
	}
	else if (body.sprite.name == 'water') {
		this.addHealth(10);
	}
	else if (body.sprite.name == 'food') {
		this.addHealth(20);
	}
	else {
		this.reduceHealth(body.power);
	}
}
