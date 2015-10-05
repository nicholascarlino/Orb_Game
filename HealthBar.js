HealthBar.prototype = Object.create(Phaser.Sprite.prototype);

HealthBar.prototype.constructor = HealthBar;

HealthBar.prototype.force = {x:0.0, y:0.0}; 


var HealthBar;


function HealthBar(game, x, y ) {
    console.log("Creating HealthBar");
   // Phaser.Sprite.call(this, game, x, y, 'HealthBar');

    this.barProgress = 128;
        
        // the bar itself
    this.bar = this.add.bitmapData(128, 8);
        
    game.add.sprite(game.world.centerX - (this.bar.width * 0.5), game.world.centerY, this.bar);
        
    game.add.tween(this).to({barProgress: 0}, 2000, null, true, 0, Infinity);
}

HealthBar.prototype.reduce= function(amount){
    this.barProgress -= amount;
    
}
HealthBar.prototype.HealthPoints = function(){
    return this.barProgress;
}

HealthBar.prototype.update = function() {
        
    this.bar.context.clearRect(0, 0, this.bar.width, this.bar.height);
        
        // some simple colour changing to make it look like a health bar
        if (this.barProgress < 32) {
           this.bar.context.fillStyle = '#f00';   
        }
        else if (this.barProgress < 64) {
            this.bar.context.fillStyle = '#ff0';
        }
        else {
            this.bar.context.fillStyle = '#0f0';
        }
        
        // draw the bar
        this.bar.context.fillRect(0, 0, this.barProgress, 8);
        
        // important - without this line, the context will never be updated on the GPU when using webGL
        this.bar.dirty = true;
}