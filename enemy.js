Enemy.prototype = Object.create(Phaser.Sprite.prototype);

Enemy.prototype.constructor = Enemy;

Enemy.prototype.force = {x:0.0, y:0.0}; 


var enemy;
var HealthBar;

function Enemy(game, x, y , spriteType) {
    console.log("Creating enemy");
    Phaser.Sprite.call(this, game, x, y, spriteType);
    game.physics.arcade.enable(this);
    this.scale.setTo(0.09, 0.09);
    this.anchor.setTo(0.5, 0.5);

    HealthBar = new HealthBar(game);

    this.addChild(HealthBar);
    game.add.existing(this);
}

Enemy.prototype.attack= function(){
    // does something to kill the enemy
}

Enemy.prototype.reduceLife= function(){
    // does something to kill the enemy
    this.HealthBar.reduce();
    //this.destroy();
}

Enemy.prototype.dies = function(){
   this.destroy();
}

Enemy.prototype.move = function accelerateToObject(obj, speed) {
    if (typeof speed === 'undefined') { speed = 60; }
    var angle = Math.atan2(obj.y - this.y, obj.x - this.x);
    this.body.rotation = angle + game.math.degToRad(90);  // correct angle of angry bullets (depends on the sprite used)
    this.body.force.x = Math.cos(angle) * speed;    // accelerateToObject 
    this.body.force.y = Math.sin(angle) * speed;
}

Enemy.prototype.update = function() {

    if(this.HealthBar.healthPoints() <= 0){
        this.dies();
    }


}




