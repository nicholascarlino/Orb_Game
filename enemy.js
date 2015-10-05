Enemy.prototype = Object.create(Phaser.Sprite.prototype);

Enemy.prototype.constructor = Enemy;

Enemy.prototype.force = {x:0.0, y:0.0}; 


var enemy;
//var HealthBar;
//var spriteType;
var velocity;
var position;

function Enemy(game, x, y , sprite) {
    console.log("Creating enemy");
    //Phaser.Sprite.call(this, game, x, y, spriteType);
    game.physics.arcade.enable(this);
    this.scale.setTo(0.09, 0.09);
    this.anchor.setTo(0.5, 0.5);
    this.spriteType = sprite;

    var barConfig = {x:x , y:y)};
    this.HealthBar = new HealthBar(game , barConfig);
    this.HeathValue = 100;

    this.addChild(HealthBar);
    game.add.existing(this);

    if(spriteType != 'worm'){
        enemy = game.add.sprite(x,y, spriteType);

        enemy.animations.add('left',[9,10,11,10], 12, true);
        enemy.animations.add('right', [3,4,5,4], 12, true);
        enemy.animations.add('up', [0,1,2,1], 12, true);
        enemy.animations.add('down',[6,7,8,7], 12, true);
    }else{
        enemy = game.add.sprite(x,y, spriteType);

        enemy.animations.add('left',[0,1,2,3], 12, true);
        enemy.animations.add('right', [4,5,6,7], 12, true);
        
        position = {
           faceLeft:false,
           faceRight:false,
           faceUp:false,
           faceDown:true,
       }

    }

}


Enemy.prototype.attack= function(){
    // does something to kill the enemy
}

Enemy.prototype.reduceLife= function reduce(amount){
    // does something to kill the enemy
    this.HealthBar.setPercent( this.HeathValue - amount);
    //this.destroy();
}

Enemy.prototype.dies = function(){
   this.destroy();
}

Enemy.prototype.move = function move() {

    enemy.body.velocity.x = 0;
    enemy.body.velocity.y = 0;

    if (cursors.left.isDown){

        enemy.body.velocity.x = -speed;

        enemy.animations.play('left');

        position.faceLeft = true;
        position.faceRight = false;
        position.faceUp = false;
        position.faceDown = false;
    }   
    else if (cursors.right.isDown){

        enemy.body.velocity.x = speed;

        enemy.animations.play('right');

        position.faceRight = true;
        position.faceLeft = false;
        position.faceUp = false;
        position.faceDown = false;
    }
    else if (cursors.up.isDown){

        enemy.body.velocity.y = -speed;

        enemy.animations.play('up');

        position.faceUp = true;
        position.faceDown = false;
        position.faceLeft = false;
        position.faceRight = false;
    }
    else if (cursors.down.isDown){

        enemy.body.velocity.y = speed;

        enemy.animations.play('down');

        position.faceDown = true;
        position.faceUp = false;
        position.faceLeft = false;
        position.faceRight = false;
    }
    else{
        if (position.faceLeft==true){
            enemy.animations.play('left');
        }
        else if(position.faceRight==true){
            enemy.animations.play('right');
        }
        else if (position.faceUp==true){
            enemy.animations.play('up');
        }
        else if (position.faceDown==true){
            enemy.animations.play('down');
        }

    }

}

Enemy.prototype.update = function() {

    if(this.HealthBar.healthPoints() <= 0){
        this.dies();
    }

}




