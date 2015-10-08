Enemy.prototype = Object.create(Phaser.Sprite.prototype);

Enemy.prototype.constructor = Enemy;

Enemy.prototype.force = {x:0.0, y:0.0}; 


var enemy;
var velocity;
//var this.position;

function Enemy(game, x, y , sprite) {
    console.log("Creating enemy");
    Phaser.Sprite.call(this, game);

    
    game.physics.p2.enable(this, true);
    this.scale.setTo(0.09, 0.09);
    this.anchor.setTo(0.5, 0.5);
    this.spriteType = sprite;
    this.body.clearShapes();
    this.body.addRectangle(this.width, this.height/3, 0, this.height(2/3));
    this.body.fixedRotation = true;

    this.game = game;
    var barConfig ={
       width: 40,
       height: 10,
       x: x,
       y: y,
       bg: {
      color: '#651828'
      },
      bar: {
      color: '#0000FF'
      },
      animationDuration: 200,
      flipped: false
  };

    this.HealthBar = new HealthBar(game , barConfig);
    this.HeathValue = 100;
    this.HealthBar.setPercent(100);

    //this.addChild(HealthBar);
    game.add.existing(this);


    if(this.spriteType != 'worm'){
        enemy = game.add.sprite(x,y, this.spriteType);

        enemy.animations.add('left',[9,10,11,10], 12, true);
        enemy.animations.add('right', [3,4,5,4], 12, true);
        enemy.animations.add('up', [0,1,2,1], 12, true);
        enemy.animations.add('down',[6,7,8,7], 12, true);
    }else{
        enemy = game.add.sprite(x,y, this.spriteType);

        enemy.animations.add('left',[0,1,2,3], 12, true);
        enemy.animations.add('right', [4,5,6,7], 12, true);
        
        this.position = {
           faceLeft:false,
           faceRight:false,
           faceUp:false,
           faceDown:true,
       }

    }
    game.enemy = enemy;
}


Enemy.prototype.attack= function(){
    // does something to kill the enemy
}

Enemy.prototype.reduceLife= function reduce(amount){
    // does something to kill the enemy
    this.HeathValue -=amount;
    this.HealthBar.setPercent( this.HeathValue - amount);
    //this.destroy();
}

Enemy.prototype.dies = function(){
   this.destroy();
}

Enemy.prototype.move = function move() {


    var speed = 1;

    var coor = this.game.player.getCoordinates();

    var dist1 = enemy.x - coor.x;
    var dist2 = enemy.y - coor.y;

    this.HealthBar.setPosition(enemy.x , enemy.y);

  if( Math.abs(dist1) > Math.abs(dist2)){
        if(dist1 > 0 ){
        //move to the left
        //console.log("move to the left");

        moveHorizontal(-speed);

        enemy.animations.play('left');

        this.position.faceLeft = true;
        this.position.faceRight = false;
        this.position.faceUp = false;
        this.position.faceDown = false;

    }else if (dist1 < 0){
       // console.log("move to the right");

        enemy.animations.play('right');

        moveHorizontal(speed);

        this.position.faceRight = true;
        this.position.faceLeft = false;
        this.position.faceUp = false;
        this.position.faceDown = false;
    }
  }else{
        if(dist2> 0){
        //move up
       //  console.log("move up");
        enemy.animations.play('up');

        moveVertical(-speed);

        this.position.faceUp = true;
        this.position.faceDown = false;
        this.position.faceLeft = false;
        this.position.faceRight = false;
    }else if (dist2 < 0){
        // move down
        //console.log("move down");
        enemy.animations.play('down');

        moveVertical(speed);

        this.position.faceDown = true;
        this.position.faceUp = false;
        this.position.faceLeft = false;
        this.position.faceRight = false;
    }
}    



    if(dist1 == 0){

         if (this.position.faceLeft==true){
            enemy.animations.play('left');
        }
        else if(this.position.faceRight==true){
            enemy.animations.play('right');
        }
        else if (this.position.faceUp==true){
            enemy.animations.play('up');
        }
        else if (this.position.faceDown==true){
            enemy.animations.play('down');
        }

        this.game.player.reduceHealth(1);
       /* if(this.game.player.isDead()){
            enemy.x = 50;
            enemy.y = 50;
        }else{
            this.game.player.reduceHealth(1);
        }*/

    }

}

function moveVertical(speed){

    enemy.y += speed;

}

function moveHorizontal(speed){

    enemy.x += speed;

}

Enemy.prototype.update = function() {

    

    if(this.HealthValue<= 0){
        this.dies();
    }
    console.log("in update enemy");
    /*var bool = game.physics.arcade.overlap(this.game.player, enemy, this.game.player.reduceHealth()  , null , this);
    console.log(bool);*/
}




