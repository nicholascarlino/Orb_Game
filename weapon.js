Weapon.prototype = Object.create(Phaser.Sprite.prototype);

Weapon.prototype.constructor = Weapon;

Weapon.prototype.force = {x:0.0, y:0.0}; 


var weapon;
var HealthBar;

function Weapon(game, x, y , sprite) {
    console.log("Creating Weapon");

    Phaser.Sprite.call(this, game);

  //  weapon = new Enemy(game , x , y , 'Weapon');

    game.physics.arcade.enable(this);
    this.scale.setTo(0.09, 0.09);
    this.anchor.setTo(0.5, 0.5);
    this.spriteType = sprite;

    this.game = game;
    game.add.existing(this);

    weapon = game.add.sprite(x,y, this.spriteType);
    //Phaser.Sprite.call(this, game, x, y, spriteType);
}


Weapon.prototype.shoot= function(direction , speed){

	if(direction == 'down'){
		console.log("shooting down")
		weapon.y += speed * 10;
		/*while(weapon.y < this.game.height){
     	    weapon.y += speed;
     	}*/
    }else if ( direction == 'up'){
    	console.log("shooting up")
    	weapon.y -=speed*10;
    	/*while(weapon.y >= 0){
    		weapon.y -= speed;
    	}*/
    }else if(direction == 'left'){
    	console.log("shooting left")
    	 weapon.x -= speed * 10;
    	/*while(weapon.x >= 0){
    	   weapon.x -= speed;
    	}*/
    }else if (direction == 'right'){
    	console.log("shooting right");
    	 weapon.x += speed * 10;
    	/*while(weapon.x < this.game.width){
    	    weapon.x += speed;
    	}*/
    }
    // does something that the Weapon does
}

Weapon.prototype.setPos = function(x , y){
     weapon.x = x;
     weapon.y = y;

}	
Weapon.prototype.update = function(){

	/*if(Weapon.inCamera){
		//console.log("in update Weapon")
		if(!this.game.player.isDead()){
	          Weapon.move();
	      }
	  }*/
	  //console.log("about to move Weapon")
	  //Weapon.move();

	
}
