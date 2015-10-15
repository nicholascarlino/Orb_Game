WeaponGroup.prototype = Object.create(Phaser.Sprite.prototype);

WeaponGroup.prototype.constructor = WeaponGroup;

WeaponGroup.prototype.force = {x:0.0, y:0.0}; 


var weaponGroup;
var weapon;
var weaponTime = 0;

function WeaponGroup(game, x, y , power, sprite) {
    console.log("Creating WeaponGroup");

    Phaser.Sprite.call(this, game);

    weaponGroup = game.add.group();

    // CONFUSING PHYSICS SYSTEMS 
    weaponGroup.enableBody = true;
    weaponGroup.physicsBodyType = Phaser.Physics.ARCADE;
    weaponGroup.createMultiple(30, sprite);
    weaponGroup.setAll('anchor.x', 0.5);
    weaponGroup.setAll('anchor.y', 1);
    weaponGroup.setAll('outOfBoundsKill', true);
    weaponGroup.setAll('checkWorldBounds', true);


    game.physics.p2.enable(this);
    
    //this.scale.setTo(0.09, 0.09);
    //this.anchor.setTo(0.5, 0.5);
    //this.spriteType = sprite;

    this.game = game;
    this.power = power;

    game.add.existing(this);

    //WeaponGroup = game.add.sprite(x,y, this.spriteType);
    //Phaser.Sprite.call(this, game, x, y, spriteType);
}


WeaponGroup.prototype.fire= function(x , y , speedY , speedX){

    if (game.time.now > weaponTime)
    {
        //  Grab the first bullet we can from the pool
        weapon = weaponGroup.getFirstExists(false);

        if (weapon)
        {
            //  And fire it
            weapon.reset(x, y + 8);
            weapon.body.velocity.y = speedY;
            weapon.body.velocity.x = speedX;
            weaponTime = game.time.now + 200;
        }
    }
    // does something that the WeaponGroup does
}

WeaponGroup.prototype.setPos = function(x , y){
     WeaponGroup.x = x;
     WeaponGroup.y = y;

}	
WeaponGroup.prototype.update = function(){

	/*if(WeaponGroup.inCamera){
		//console.log("in update WeaponGroup")
		if(!this.game.player.isDead()){
	          WeaponGroup.move();
	      }
	  }*/
	  //console.log("about to move WeaponGroup")
	  //WeaponGroup.move();

	this.damage_enemy(this.game.dragon);	
}
WeaponGroup.prototype.damage_enemy = function(group)
{
/*	var enemy;

	var distx;
	var disty;

	for (var i = 0; i < group.length; i++) {
		enemy = group.getAt(i);

		distx = this.x - enemy.x;
		disty = this.y - enemy.y;

		if ((distx > -2) && (distx < 2) && (disty > -2) && (disty < 2)){
			this.kill();
			enemy.reduceLife(this.power);
		}
	}
*/
	var distx = this.x - group.x;
	var disty = this.y - group.y;

	
	if ((distx > -2) && (distx < 2) && (disty > -2) && (disty < 2)){
			this.kill();
			this.game.dragon.reduceLife(this.power);
		}
}
