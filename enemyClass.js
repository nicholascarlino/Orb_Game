EnemyClass.prototype = Object.create(Phaser.Sprite.prototype);

EnemyClass.prototype.constructor = EnemyClass;

EnemyClass.prototype.force = {x:0.0, y:0.0};


function EnemyClass(game, x, y, Stats, SpriteSheet ){
	Phaser.Sprite.call(this, game, x, y, SpriteSheet.image);
	this.anchor.setTo(0.5, 0.5);
	game.physics.p2.enable(this)
	//game.physics.enable(this, Phaser.physics.ARCADE);
	this.body.allowRotation = false;
	game.add.existing(this);
	this.health = HP; 
	this.speed = SPD;



})

EnemyClass.prototype.getHealth(){
	return this.health;
}
EnemyClass.prototype.reduceHealth(Weapon){
	health = health - Weapon.weaponDamage;
}
EnemyClass.prototype
