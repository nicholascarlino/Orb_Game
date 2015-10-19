Weapon.prototype = Object.create(Phaser.Sprite.prototype);

Weapon.prototype.constructor = Weapon;

Weapon.prototype.force = {x:0.0, y:0.0}; 



function Weapon(game, x, y , power, sprite, speedX, speedY) {
    console.log("Creating Weapon");

    Phaser.Sprite.call(this, game, x, y, sprite);

  //  weaponGroup = game.add.group();
    this.velocityY = speedY;
    this.velocityX = speedX;
    this.x = x;
    this.y = y;

    // CONFUSING PHYSICS SYSTEMS 
  //  weaponGroup.enableBody = true;
    //weaponGroup.physicsBodyType = Phaser.Physics.ARCADE;
    //weaponGroup.createMultiple(30, sprite);
    //weaponGroup.setAll('anchor.x', 0.5);
    //weaponGroup.setAll('anchor.y', 1);
    //weaponGroup.setAll('outOfBoundsKill', true);
    //weaponGroup.setAll('checkWorldBounds', true);

    this.checkWorldBounds = true;
    this.outOfBoundsKill = true;
    



    game.physics.p2.enable(this, true);
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


Weapon.prototype.update= function(){

    console.log("in shooting update");
    
        //  Grab the first bullet we can from the poo
            //  And fire it
       // this.reset(this.x, this.y);
    this.body.velocity.y = this.velocityY;
    this.body.velocity.x = this.velocityX;

   /* var tile;
    if (this.velocityX > 0){
        tile = game.map.getTileWorldXY(this.x + 32, this.y, "Collision");
    }
    else if (this.velocityX < 0){
        tile = game.map.getTileWorldXY(this.x-32, this.y, "Collision");   
    }
    else if (this.velocityY < 0){
         tile = game.map.getTileWorldXY(this.x, this.y-32,'Collision');
    }
    else if (this.velocityY > 0){
        tile = game.map.getTileWorldXY(this.x, this.y+32,'Collision');
    } */
    var tile = game.map.getTileWorldXY(this.x + (this.velocityX / 22), this.y + (this.velocityY / 22), 16, 16, "Collision");
    if (tile == null){
        this.damage_enemy(this.game.dragon);
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


	for (var i = 0; i < group.length; i++) {
		enemy = group.getAt(i);

		distx = this.x - enemy.x;
		disty = this.y - enemy.y;

		if ((distx > -dam_dist) && (distx < dam_dist) && (disty > -dam_dist) && (disty < dam_dist)){
			enemy.reduceLife(this.power);
			this.destroy();
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
