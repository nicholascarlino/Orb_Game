Weapon.prototype = Object.create(Phaser.Sprite.prototype);

Weapon.prototype.constructor = Weapon;

Weapon.prototype.force = {x:0.0, y:0.0}; 

var weapon;
var weaponTime = 0;

function Weapon(game, x, y , power, sprite) {
    console.log("Creating Weapon");

    Phaser.Sprite.call(this, game, x, y, sprite);

    //weaponGroup = game.add.group();

    // CONFUSING PHYSICS SYSTEMS 
   // weaponGroup.enableBody = true;
    //weaponGroup.physicsBodyType = Phaser.Physics.ARCADE;
    //weaponGroup.createMultiple(30, sprite);
    //weaponGroup.setAll('anchor.x', 0.5);
    //weaponGroup.setAll('anchor.y', 1);
    //weaponGroup.setAll('outOfBoundsKill', true);
    //weaponGroup.setAll('checkWorldBounds', true);


    game.physics.p2.enable(this);
    this.body.fixedRotation = true;
    
    //this.scale.setTo(0.09, 0.09);
    //this.anchor.setTo(0.5, 0.5);
    //this.spriteType = sprite;

    this.game = game;
    this.power = power;

    game.add.existing(this);

    //WeaponGroup = game.add.sprite(x,y, this.spriteType);
    //Phaser.Sprite.call(this, game, x, y, spriteType);
}


Weapon.prototype.fire= function(x , y , speedY , speedX){
/*
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
    } */
    this.reset(x, y+8);
    this.body.velocity.y = speedY;
    this.body.velocity.x = speedX;

    // does something that the WeaponGroup does
}

Weapon.prototype.setPos = function(x , y){
     this.x = x;
     this.body.x = x;
     this.y = y;
     this.body.y = y;

}	
Weapon.prototype.update = function(){

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
Weapon.prototype.damage_enemy = function(group)
{
	var enemy;
	var dam_dist = 15;

	var distx;
	var disty;

	for (var i = 0; i < group.length; i++) {
		enemy = group.getAt(i);

		distx = this.x - enemy.x;
		disty = this.y - enemy.y;

		if ((distx > -dam_dist) && (distx < dam_dist) && (disty > -dam_dist) && (disty < dam_dist)){
			enemy.reduceLife(this.power);
			this.kill();
		}
	}
/*
	var distx = this.x - group.x;
	var disty = this.y - group.y;

	
	if ((distx > -dam_dist) && (distx < dam_dist) && (disty > -dam_dist) && (disty < dam_dist)){
			this.game.dragon.reduceLife(this.power);
			this.kill();
*/
}
