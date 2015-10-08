Dragon.prototype = Object.create(Phaser.Sprite.prototype);

Dragon.prototype.constructor = Dragon;

Dragon.prototype.force = {x:0.0, y:0.0}; 


var dragon;
var HealthBar;

function Dragon(game, x, y ) {
    console.log("Creating Dragon");

    Phaser.Sprite.call(this, game);

    dragon = new Enemy(game , x , y , 'dragon');

    //dragon.weapon = new Weapon(game , x , y , 'fire');
    game.add.existing(this);
    this.game = game;
    //Phaser.Sprite.call(this, game, x, y, spriteType);
}


Dragon.prototype.attack= function(){

	//console.log("attack", dragon.weapon.x , dragon.weapon.y)
    
	//var weapon = new Weapon(game , this.x , this.y , 'fire');

    if(dragon.position.faceLeft == true){
     	dragon.weapon.shoot('left', 1);
     	//dragon.weapon.x = dragon.x;
     }else if(dragon.position.faceRight == true){
     	dragon.weapon.shoot('right', 1);
     //	dragon.weapon.setPos(dragon.x , dragon.y);
     }else  if(dragon.position.faceUp == true){
     	dragon.weapon.shoot('up', 1);
     	//dragon.weapon.y = dragon.y;
     }else if(dragon.position.faceDown == true){
     dragon.weapon.shoot('down', 1);
     	//dragon.weapon.y = dragon.y;
     }// does something that the Dragon does
    // dragon.weapon.setPos(dragon.x , dragon.y);
}

Dragon.prototype.update = function(){

//	game.time.events.add(Phaser.Timer.SECOND , this.attack, this);

	/*if(dragon.inCamera){
		//console.log("in update dragon")
		if(!this.game.player.isDead()){
	          dragon.move();
	      }
	  }*/
	  //console.log("about to move dragon")
	  //dragon.move();

	  if(!this.game.player.isDead()){
	          dragon.move();
	      }
}
