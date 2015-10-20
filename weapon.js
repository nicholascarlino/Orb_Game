Weapon.prototype = Object.create(Phaser.Sprite.prototype);

Weapon.prototype.constructor = Weapon;

Weapon.prototype.force = {x:0.0, y:0.0}; 



function Weapon(game, x, y , power, sprite, speedX, speedY) {
    console.log("Creating Weapon" , sprite);

    Phaser.Sprite.call(this, game, x, y, sprite);
    this.velocityY = speedY;
    this.velocityX = speedX;
    this.x = x;
    this.y = y;
    this.checkWorldBounds = true;
    this.outOfBoundsKill = true;
    
    //this.scale.setTo(0.8, 0.8);


    game.physics.p2.enable(this, true);
    this.body.fixedRotation = true;

    this.game = game;
    this.power = power;

    game.add.existing(this);

}
Weapon.prototype.update= function(){

    //console.log("in shooting update", this);
    
    this.body.velocity.y = this.velocityY;
    this.body.velocity.x = this.velocityX;

    var tile = game.map.getTileWorldXY(this.x + (this.velocityX / 22), this.y + (this.velocityY / 22), 16, 16, "Collision");
    if (tile == null){
        this.damage_enemy(this.game.enemies);
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
        	console.log("In weapon for loop");
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
