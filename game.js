var boundsx = 800, boundsy = 600;
var game = new Phaser.Game(boundsx, boundsy, Phaser.AUTO, "game", {preload:
		preload, update:update, create:create});


var wasd;
var dragon;
var cursors;
var position;
var speed;

function preload(){
	game.load.spritesheet('dragon', 'assets/enemySprites/dragon1.png', 24, 32);
	game.load.spritesheet('dragon', 'assets/enemySprites/skyll-spriteLeft.png', 24, 32);
	game.load.spritesheet('player', 'assets/playerSprites/warrior_m.png', 24, 32);

}

function create(){

	game.player = new Player(game , game.world.centerX , game.world.centerY , 2);

	var coor = game.player.getCoordinates();
	console.log("player is ", coor);
	game.dragon = new Dragon(game , 50 , 100);

	/*dragon = game.add.sprite(50,50, 'dragon');

	dragon.animations.add('left',[9,10,11,10], 12, true);
	dragon.animations.add('right', [3,4,5,4], 12, true);
	dragon.animations.add('up', [0,1,2,1], 12, true);
	dragon.animations.add('down',[6,7,8,7], 12, true);

	game.physics.arcade.enable(dragon);
	cursors = game.input.keyboard.createCursorKeys();
	wasd = {
		up: game.input.keyboard.addKey(Phaser.Keyboard.W),
		down: game.input.keyboard.addKey(Phaser.Keyboard.S),
		left: game.input.keyboard.addKey(Phaser.Keyboard.A),
		right: game.input.keyboard.addKey(Phaser.Keyboard.D),
	}
	position = {
		faceLeft:false,
		faceRight:false,
		faceUp:false,
		faceDown:true,
	}
	speed = 100;*/
}

function update(){

	/*dragon.body.velocity.x = 0;
	dragon.body.velocity.y = 0;
	if (cursors.left.isDown){

		dragon.body.velocity.x = -speed;

 		dragon.animations.play('left');

 		position.faceLeft = true;
 		position.faceRight = false;
 		position.faceUp = false;
 		position.faceDown = false;
	}	
	else if (cursors.right.isDown){

		dragon.body.velocity.x = speed;

		dragon.animations.play('right');

		position.faceRight = true;
		position.faceLeft = false;
		position.faceUp = false;
 		position.faceDown = false;
	}
	else if (cursors.up.isDown){

		dragon.body.velocity.y = -speed;

		dragon.animations.play('up');

		position.faceUp = true;
		position.faceDown = false;
		position.faceLeft = false;
		position.faceRight = false;
	}
	else if (cursors.down.isDown){

		dragon.body.velocity.y = speed;

		dragon.animations.play('down');

		position.faceDown = true;
		position.faceUp = false;
		position.faceLeft = false;
		position.faceRight = false;
	}
	else{
		if (position.faceLeft==true){
			dragon.animations.play('left');
		}
		else if(position.faceRight==true){
			dragon.animations.play('right');
		}
		else if (position.faceUp==true){
			dragon.animations.play('up');
		}
		else if (position.faceDown==true){
			dragon.animations.play('down');
		}

	}*/
}






