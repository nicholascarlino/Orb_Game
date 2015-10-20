Enemy.prototype = Object.create(Phaser.Sprite.prototype);

Enemy.prototype.constructor = Enemy;

Enemy.prototype.force = {x:0.0, y:0.0}; 



function Enemy(game, x, y , sprite) {
    console.log("Creating this");
    Phaser.Sprite.call(this, game, x, y, sprite);

    //CHANGE: THIS WAS AFTER GAME>ADD>EXISTING>THIS
    if(this.spriteType != 'worm'){
        console.log("enemy sprite created");

        this.animations.add('left',[9,10,11,10], 12, true);
        this.animations.add('right', [3,4,5,4], 12, true);
        this.animations.add('up', [0,1,2,1], 12, true);
        this.animations.add('down',[6,7,8,7], 12, true);
    }else{

        this.animations.add('left',[0,1,2,3], 12, true);
        this.animations.add('right', [4,5,6,7], 12, true);
        
        this.position = {
           faceLeft:false,
           faceRight:false,
           faceUp:false,
           faceDown:true,
        
       }
        console.log("worm created");
    }
    
    game.physics.p2.enable(this, true); 
    this.anchor.setTo(0.5, 0.5);
    this.body.clearShapes();
    this.body.addRectangle(24,24,0,12);
    this.body.fixedRotation = true;
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
    this.HealthValue = 100;
    this.HealthBar.setPercent(100);
}

Enemy.prototype.reduceLife= function(amount){

    if(this.HealthValue <= 1){
        console.log("enemy health very down", this.HeathValue);
        this.destroy();
    }
    this.HealthValue -=amount;
    this.HealthBar.setPercent(this.HealthValue);
    console.log("enemy health", HealthValue);
}

Enemy.prototype.dies = function(){
   this.destroy();
}

Enemy.prototype.move = function move() {


    var speed = 1;
    var painDist = 25;

    var coor = this.game.player.getCoordinates();

    var dist1 = this.x - coor.x;
    var dist2 = this.y - coor.y;

    this.HealthBar.setPosition(this.x , this.y - 20);

  if( Math.abs(dist1) > Math.abs(dist2)){
        if(dist1 > painDist ){
        this.animations.play('left');
        moveHorizontal(-speed);
        this.body.x -= speed;

      

        this.position.faceLeft = true;
        this.position.faceRight = false;
        this.position.faceUp = false;
        this.position.faceDown = false;

    }else if (dist1 < -painDist){

        this.animations.play('right');

        moveHorizontal(speed);
        this.body.x += speed;

        this.position.faceRight = true;
        this.position.faceLeft = false;
        this.position.faceUp = false;
        this.position.faceDown = false;
    }
  }else{
        if(dist2> painDist){
        this.animations.play('up');

        moveVertical(-speed);
        this.body.y-= speed;

        this.position.faceUp = true;
        this.position.faceDown = false;
        this.position.faceLeft = false;
        this.position.faceRight = false;
    } else if (dist2 < -painDist){
        this.animations.play('down');

        moveVertical(speed);
        this.body.y += speed;

        this.position.faceDown = true;
        this.position.faceUp = false;
        this.position.faceLeft = false;
        this.position.faceRight = false;
    }
    else if ((dist1> -painDist) && (dist1 < painDist) && (dist2 >-painDist) && (dist2 < painDist)){
        if (this.position.faceLeft==true){
            this.animations.play('left');
        }
        else if(this.position.faceRight==true){
            this.animations.play('right');
        }
        else if (this.position.faceUp==true){
            this.animations.play('up');
        }
        else if (this.position.faceDown==true){
            this.animations.play('down');
        }

        this.game.player.reduceHealth(.5);

    }
    }
}    

function moveVertical(speed){

    this.y += speed;

}
function moveHorizontal(speed){

    this.x += speed;

} 
Enemy.prototype.update = function() {
    
    this.body.setZeroVelocity();
    if (!this.game.player.isDead()){
        this.move();
    }
    if(this.HealthValue<= 0){
        this.HealthBar.setPosition(-1000, -1000);
	this.destroy();

    }
}
