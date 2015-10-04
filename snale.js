Snale.prototype = Object.create(Phaser.Sprite.prototype);

Snale.prototype.constructor = Snale;

Snale.prototype.force = {x:0.0, y:0.0}; 


var snale;
var HealthBar;

function Snale(game, x, y ) {
    console.log("Creating Snale");
    snale = new Enemy(game , x , y , 'snale');
    //Phaser.Sprite.call(this, game, x, y, spriteType);
}

Snale.prototype.attack= function(){
    // does something that the snale does
}

Snale.prototype.update = function(){

   this.accelerateToObject(player, 600, 250, 250);

}