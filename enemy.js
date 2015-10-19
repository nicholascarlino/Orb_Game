Enemy.prototype = Object.create(Phaser.Sprite.prototype);

Enemy.prototype.constructor = Enemy;

Enemy.prototype.force = {x:0.0, y:0.0}; 


var enemy;
var velocity;
//var this.position;

function Enemy(game, x, y , sprite) {
    console.log("Creating enemy");
    Phaser.Sprite.call(this, game);

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
    
    game.physics.p2.enable(enemy, true); 
   // game.physics.enable(enemy, Phaser.Physics.ARCADE);
    enemy.anchor.setTo(0.5, 0.5);
    enemy.body.clearShapes();
    enemy.body.addRectangle(24,24,0,12);
    enemy.body.fixedRotation = true;
    game.add.existing(this);
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
    //THIS WAS UNCOMMENTED


    
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
        console.log("enemy health very down", this.HeathValue);
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
    var painDist = 30;

    var coor = this.game.player.getCoordinates();

    //var dist1 = this.body.x - coor.x; // used to be enemy.x
    //var dist2 = this.body.y - coor.y; // used to be enemy.y
    var dist1 = enemy.x - coor.x;
    var dist2 = enemy.y - coor.y;

    this.HealthBar.setPosition(enemy.x , enemy.y - 20);

  if( Math.abs(dist1) > Math.abs(dist2)){
        if(dist1 > painDist ){
        //move to the left
        enemy.animations.play('left');
        moveHorizontal(-speed);
        //enemy.body.x += -speed;

      

        this.position.faceLeft = true;
        this.position.faceRight = false;
        this.position.faceUp = false;
        this.position.faceDown = false;

    }else if (dist1 < -painDist){

        enemy.animations.play('right');

        moveHorizontal(speed);
       // enemy.body.x += speed;

        this.position.faceRight = true;
        this.position.faceLeft = false;
        this.position.faceUp = false;
        this.position.faceDown = false;
    }
  }else{
        if(dist2> painDist){
        //move up
        enemy.animations.play('up');

        moveVertical(-speed);
       // enemy.body.y += -speed;

        this.position.faceUp = true;
        this.position.faceDown = false;
        this.position.faceLeft = false;
        this.position.faceRight = false;
    }else if (dist2 < -painDist){
        // move down
        enemy.animations.play('down');

        moveVertical(speed);
        //enemy.body.y += speed;

        this.position.faceDown = true;
        this.position.faceUp = false;
        this.position.faceLeft = false;
        this.position.faceRight = false;
    }
    else if ((dist1> -painDist) && (dist1 < painDist) && (dist2 >-painDist) && (dist2 < painDist)){
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

        this.game.player.reduceHealth(.5);

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
    //enemy.body.y += -speed;
    enemy.body.y += speed;

}

function moveHorizontal(speed){

    enemy.x += speed;
   // enemy.body.x += speed;
    enemy.body.x += speed;

}

Enemy.prototype.update = function() {
    //game.physics.arcade.overlap(this, this.game.player.body, this.game.player.reduceHealth(.1));
    
    enemy.body.setZeroVelocity();
    if (!this.game.player.isDead()){
        this.move();
    }
    if(this.HealthValue<= 0){
        this.dies();
    }
    /*var bool = game.physics.arcade.overlap(this.game.player, enemy, this.game.player.reduceHealth()  , null , this);
    console.log(bool);*/
}

/*
Enemy.prototype.attack= function(){

    //console.log("attack", dragon.weapon.x , dragon.weapon.y)
    
    //var weapon = new Weapon(game , this.x , this.y , 'fire');

    if(dragon.position.faceLeft == true){
        dragon.weapon.shoot('left', 1);
        //dragon.weapon.x = dragon.x;
     }else if(dragon.position.faceRight == true){
        dragon.weapon.shoot('right', 1);
     // dragon.weapon.setPos(dragon.x , dragon.y);
     }else  if(dragon.position.faceUp == true){
        dragon.weapon.shoot('up', 1);
        //dragon.weapon.y = dragon.y;
     }else if(dragon.position.faceDown == true){
     dragon.weapon.shoot('down', 1);
        //dragon.weapon.y = dragon.y;
     }// does something that the Dragon does
    // dragon.weapon.setPos(dragon.x , dragon.y);
} */


