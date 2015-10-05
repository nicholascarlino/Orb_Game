Dragon.prototype = Object.create(Phaser.Sprite.prototype);

Dragon.prototype.constructor = Dragon;

Dragon.prototype.force = {x:0.0, y:0.0}; 


var dragon;
var HealthBar;

function Dragon(game, x, y ) {
    console.log("Creating Dragon");

    Phaser.Sprite.call(this, game);

    dragon = new Enemy(game , x , y , 'dragon');

    game.add.existing(this);
    //Phaser.Sprite.call(this, game, x, y, spriteType);
}


Dragon.prototype.attack= function(){

    // does something that the Dragon does
}

Dragon.prototype.update = function(){

	if(dragon.inCamera){
		//console.log("in update dragon")
	     dragon.move();
	  }
	  //console.log("about to move dragon")
	  //dragon.move();
}
