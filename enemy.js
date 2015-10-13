Enemy.prototype = Object.create(Phaser.Sprite.prototype);

Enemy.prototype.constructor = Enemy;

Enemy.prototype.force = {x:0.0, y:0.0}; 


var enemy;
var velocity;
//var this.position;

function Enemy(game, x, y , sprite) {
    console.log("Creating enemy");
    Phaser.Sprite.call(this, game);

    //THIS WAS AFTER ANCHOR SETTO and NOT COMMENTED 
    //enemy.spriteType = sprite;

    //CHANGE: THIS WAS AFTER GAME>ADD>EXISTING>THIS
    if(this.spriteType != 'worm'){
        enemy = game.add.sprite(x,y, sprite);

        enemy.animations.add('left',[9,10,11,10], 12, true);
        enemy.animations.add('right', [3,4,5,4], 12, true);
        enemy.animations.add('up', [0,1,2,1], 12, true);
        enemy.animations.add('down',[6,7,8,7], 12, true);
    }else{
        enemy = game.add.sprite(x,y, sprite);//USED TO BE this.spriteType

        enemy.animations.add('left',[0,1,2,3], 12, true);
        enemy.animations.add('right', [4,5,6,7], 12, true);
        
        this.position = {
           faceLeft:false,
           faceRight:false,
           faceUp:false,
           faceDown:true,
       }

    }
    
    this.anchor.setTo(0.5, 0.5);
    
    //this.spriteType = sprite;
    

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
    game.add.existing(this); //THIS WAS UNCOMMENTED


    
     game.physics.p2.enable(this); 
    //this.body.clearShapes(); // this
    //this.body.addRectangle(24,24,0,12);// this 
    //this.body.fixedRotation = true;// this 
   // this.scale.setTo(0.09, 0.09);
 //   game.enemy = enemy;
}


Enemy.prototype.attack= function(){
    // does something to kill the enemy
}

Enemy.prototype.reduceLife= function(amount){

    if(this.HealthValue <= 1){
        console.log("enemy health very down", this.HeathValue)
        this.destroy();
    }
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

    //var dist1 = this.body.x - coor.x; // used to be enemy.x
    //var dist2 = this.body.y - coor.y; // used to be enemy.y
    var dist1 = enemy.x - coor.x;
    var dist2 = enemy.y - coor.y;

    this.HealthBar.setPosition(enemy.x , enemy.y);

  if( Math.abs(dist1) > Math.abs(dist2)){
        if(dist1 > 1 ){
        //move to the left
        //console.log("move to the left");

        moveHorizontal(-speed);
        this.body.x += -speed;

        enemy.animations.play('left');

        this.position.faceLeft = true;
        this.position.faceRight = false;
        this.position.faceUp = false;
        this.position.faceDown = false;

    }else if (dist1 < -1){
       // console.log("move to the right");

        enemy.animations.play('right');

        moveHorizontal(speed);
        this.body.x += speed;

        this.position.faceRight = true;
        this.position.faceLeft = false;
        this.position.faceUp = false;
        this.position.faceDown = false;
    }
  }else{
        if(dist2> 1){
        //move up
       //  console.log("move up");
        enemy.animations.play('up');

        moveVertical(-speed);
        this.body.y += -speed;

        this.position.faceUp = true;
        this.position.faceDown = false;
        this.position.faceLeft = false;
        this.position.faceRight = false;
    }else if (dist2 < -1){
        // move down
        //console.log("move down");
        enemy.animations.play('down');

        moveVertical(speed);
        this.body.y += speed;

        this.position.faceDown = true;
        this.position.faceUp = false;
        this.position.faceLeft = false;
        this.position.faceRight = false;
    }
    else if ((dist1> -1) && (dist1 < 1) && (dist2 >-1) && (dist2 < 1)){
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

    }

    }
}    


/*
    if(dist1 < 1 ){

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

        this.game.player.reduceHealth(.2);
       /* if(this.game.player.isDead()){
            enemy.x = 50;
            enemy.y = 50;
        }else{
            this.game.player.reduceHealth(1);
        } //

    }  */

function moveVertical(speed){

    enemy.y += speed;
    //enemy.body.y += speed;

}

function moveHorizontal(speed){

    enemy.x += speed;
    //enemy.body.x += speed;

}

Enemy.prototype.update = function() {

    

    if(this.HealthValue<= 0){
        this.dies();
    }
    console.log("in update enemy");
    /*var bool = game.physics.arcade.overlap(this.game.player, enemy, this.game.player.reduceHealth()  , null , this);
    console.log(bool);*/
}




