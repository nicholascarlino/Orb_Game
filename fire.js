Fire.prototype = Object.create(Phaser.Sprite.prototype);

Fire.prototype.constructor = Fire;

Fire.prototype.force = {x:0.0, y:0.0}; 


var fire;
var HealthBar;

function Fire(game, x, y ) {
    console.log("Creating Fire");

    Phaser.Sprite.call(this, game);

    fire = new  Weapon(game , x , y , 'fire');

    game.add.existing(this);
    this.game = game;
    //Phaser.Sprite.call(this, game, x, y, spriteType);
}


Fire.prototype.attack= function(){

    // does something that the Fire does
}

Fire.prototype.update = function(){

	/*if(Fire.inCamera){
		//console.log("in update Fire")
		if(!this.game.player.isDead()){
	          Fire.move();
	      }
	  }*/
	  //console.log("about to move Fire")
	  //Fire.move();

	  if(!this.game.player.isDead()){
	          Fire.move();
	      }
}
