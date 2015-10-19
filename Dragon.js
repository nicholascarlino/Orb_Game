Dragon.prototype = Object.create(Phaser.Sprite.prototype);

Dragon.prototype.constructor = Dragon;

Dragon.prototype.force = {x:0.0, y:0.0}; 


var dragon;
var HealthBar;

function Dragon(game, x, y ) {
    console.log("Creating Dragon");

    Phaser.Sprite.call(this, game);

    dragon = new Enemy(game , x , y , 'dragon');

    game.physics.p2.enable(dragon);
    dragon.body.clearShapes(); // this
    dragon.body.addRectangle(24,24,0,12);// this 
    dragon.body.fixedRotation = true;// this 
    dragon.anchor.setTo(.5,.5);
    game.add.existing(this);
    this.game = game;
}


Dragon.prototype.attack= function(){

    if(dragon.position.faceLeft == true){
     	dragon.weapon.shoot(dragon, 'left', 1);
     }else if(dragon.position.faceRight == true){
     	dragon.weapon.shoot( dragon ,'right', 1);
     }else  if(dragon.position.faceUp == true){
     	dragon.weapon.shoot(dragon, 'up', 1);
     }else if(dragon.position.faceDown == true){
     dragon.weapon.shoot(dragon ,'down', 1);
     }
}

Dragon.prototype.update = function(){
    dragon.body.setZeroVelocity();

	  if(!this.game.player.isDead()){
	          dragon.move();
	      }
}
