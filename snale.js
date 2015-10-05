Dragon.prototype = Object.create(Phaser.Sprite.prototype);

Dragon.prototype.constructor = Dragon;

Dragon.prototype.force = {x:0.0, y:0.0}; 


var dragon;
var HealthBar;

function Dragon(game, x, y ) {
    console.log("Creating Dragon");
    dragon = new Enemy(game , x , y , 'dragon');
    //Phaser.Sprite.call(this, game, x, y, spriteType);
}


Dragon.prototype.attack= function(){

    // does something that the Dragon does
}

Dragon.prototype.update = function(){

	if(dragon.inCamera){
	     dragon.move();
	  }
	  
}
