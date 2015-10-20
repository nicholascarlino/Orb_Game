Weapon.prototype = Object.create(Phaser.Sprite.prototype);

Weapon.prototype.constructor = Weapon;

Weapon.prototype.force = {x:0.0, y:0.0}; 



function Weapon(game, x, y , power, sprite, speedX, speedY) {


    Phaser.Sprite.call(this, game, x, y, sprite);
    this.velocityY = speedY;
    this.velocityX = speedX;
    this.x = x;
    this.y = y;
    this.checkWorldBounds = true;
    this.outOfBoundsKill = true;


    game.physics.p2.enable(this);
    if (sprite == 'rock'){
        this.body.fixedRotation = true;
    }   
    else{
       // this.scale.setTo(.2, .2);
        this.body.fixedRotation = true;
    }
    
    this.game = game;
    this.power = power;

    game.add.existing(this);

}
Weapon.prototype.update= function(){


    var size;


    this.body.velocity.y = this.velocityY;
    this.body.velocity.x = this.velocityX;
    if(this.game.map.key == "Level3Day"){

        size = 32;
    }else{
        size = 16;
    }
    var tile = game.map.getTileWorldXY(this.x + (this.velocityX / 18), this.y + (this.velocityY / 18), size, size, "Collision");
    if (tile == null){
        if (this.game.obelisk != null){
            var dam_dist = 60;
            var distx = this.x - game.obelisk.x;
            var disty = this.y - game.obelisk.y;
  
            if ((distx > -dam_dist) && (distx < dam_dist) && (disty > -dam_dist) && (disty < dam_dist)){
                game.obelisk.HealthValue -= this.power/2;
                game.obelisk.HealthBar.setPercent(game.obelisk.HealthValue);
                this.destroy();
            }
        }
        if(game.enemies){

                 this.damage_enemy(game.enemies);
             }
           
    }
    else if (tile.collides == true){
        this.destroy();
    }
}
Weapon.prototype.damage_enemy = function(group)
{
    var enemy;
    var dam_dist = 35;

    var distx;
    var disty;

    if (group != null){
    	for (var i = 0; i < group.length; i++) {

		enemy = group.getAt(i);

        	distx = this.x - enemy.x;
        	disty = this.y - enemy.y;

      	 	if ((distx > -dam_dist) && (distx < dam_dist) && (disty > -dam_dist) && (disty < dam_dist)){
         	enemy.reduceLife(this.power);
         	this.destroy();
        	}
    	}
   }
}
