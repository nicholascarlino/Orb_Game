Player.prototype = Object.create(Phaser.Sprite.prototype);

Player.prototype.constructor = Player;

Player.prototype.force = {x:0.0, y:0.0};

var wasd;
var fire;
var action;
var position;
var HealthValue;
var npc;
var distNpc;
var weaponTime = 0;
var weaponDelay = 400;
function Player(game, x, y, speed) {
    console.log("Creating Player");

    Phaser.Sprite.call(this, game );
    this.body = this.game.add.sprite(x,y, 'player');
    console.log("Hola");
    
    this.body.animations.add('left', [9, 10, 11, 10], speed, true);
    this.body.animations.add('right', [3, 4, 5, 4], speed, true);
    this.body.animations.add('up', [0, 1, 2, 1], speed, true);
    this.body.animations.add('down', [6, 7, 8, 7], speed, true);
    console.log("Animations");

    game.physics.p2.enable(this, true);
    this.anchor.setTo(.5,.5);
    console.log("Anchor");

    //this.body.clearShapes();

    //this.body.addRectangle(25, 18, 0, 18);
    console.log("Rectangles");
    this.fixedRotation = true;
    this.scale.setTo(.7,.7);
    console.log("Scale/rotation");
    this.weapon_part = 0;
    console.log("Weapon_part");

    npc = game.npc;
    this.game = game;
    this.collideWorldBounds = true;

    this.weapon = new Weapon(this.game , this.x , this.y , 10, 'rock');

    //might need to look at this

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
    this.HealthBar = new HealthBar(game, barConfig);
    HealthValue = 100;
    this.HealthBar.setPercent(100);

    wasd = {
        up: game.input.keyboard.addKey(Phaser.Keyboard.W),
        down: game.input.keyboard.addKey(Phaser.Keyboard.S),
        left: game.input.keyboard.addKey(Phaser.Keyboard.A),
        right: game.input.keyboard.addKey(Phaser.Keyboard.D),
    };

    position = {
           faceLeft:false,
           faceRight:false,
           faceUp:false,
           faceDown:true,
       }

    fire = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    action = game.input.keyboard.addKey(Phaser.Keyboard.E);

    game.add.existing(this);    
}

Player.prototype.update = function() {

    
    // reset the player's movement every loop to make sure they stay still 
    //this.body.body,setZeroVelocity();

    if(this.isDead()){
        this.x = 0;
        this.y = 0;
    }else{
        distNpc = Math.sqrt( (this.x- npc.body.x)*(this.x- npc.body.x) + 
                             (this.y- npc.body.y)*(this.y- npc.body.y) );
        

        //console.log("dist NPC is ", distNpc);
    this.HealthBar.setPosition(this.x , this.y -20);
    }
    if (wasd.down.isDown) {
        this.body.animations.play('down');
        this.y += 3;
        this.body.y += 3;

        position.faceLeft = false;
        position.faceRight = false;
        position.faceUp = false;
        position.faceDown = true;
    }
    else if (wasd.left.isDown) {
        this.body.animations.play('left');
        this.x -= 3;
        this.body.x -= 3;
        position.faceLeft = true;
        position.faceRight = false;
        position.faceUp = false;
        position.faceDown = false;
    }
    else if (wasd.right.isDown) {
        this.body.animations.play('right');
        this.x += 3;
       this.body.x += 3;
        position.faceLeft = false;
        position.faceRight = true;
        position.faceUp = false;
        position.faceDown = false;
    }
    else if (wasd.up.isDown) {
        this.body.animations.play('up');
        this.y -= 3;
        this.body.y -= 3;
        position.faceLeft = false;
        position.faceRight = false;
        position.faceUp = true;
        position.faceDown = false;;

    } 
    if (fire.isDown) {
        console.log("shooting ...");

        if(game.time.now > weaponTime){
            console.log("shooting ...");

            if(position.faceLeft == true){
            this.weapon = new Weapon(this.game ,this.x -8, this.y ,10, 'rock', -400, 0);
             //player.weapon.fire(player.x , player.y , 0 , -400);
            } 
            else if (position.faceRight == true){
            this.weapon = new Weapon(this.game ,this.x +8,this.y ,10, 'rock', 400, 0);

            // player.weapon.fire(player.x , player.y , 0 , 400);
            }
            else if (position.faceUp == true){
            this.weapon = new Weapon(this.game ,this.x ,this.y -8,10, 'rock', 0, -400);

            // player.weapon.fire(player.x , player.y , -400 , 0);
            }
            else if(position.faceDown == true){
        this.weapon = new Weapon(this.game ,this.x ,this.y+15 ,10, 'rock', 0, 400);

            // player.weapon.fire(player.x , player.y , 400 , 0);
            }  
            weaponTime = game.time.now + weaponDelay;
        }       
    }

    if(action.isDown && distNpc < 50){
        console.log("about to talk");
        npc.talk(this.game , 1);
    }

}


Player.prototype.getCoordinates = function() {

    //console.log("Halllo",player.x , player.y);
    var location = {x:this.x , y:this.y};

    return location;
}

//weapon has to be a sprite
Player.prototype.change_weapon = function(weapon) {
    
    this.weapon = new Weapon(weapon);
}
Player.prototype.reduceHealth = function(power) {
    
    if(HealthValue <= 1){
        //console.log("very down", HealthValue)
        this.dies();
    }

    //console.log("reduceHealth ", HealthValue);
    HealthValue -= power;
    this.HealthBar.setPercent(HealthValue);

}

Player.prototype.dies = function(){
    //console.log("is about to die")
    console.log("is about to die")
    this.destroy();
    this.HealthBar.setPosition(-1 , -1); // not good
    this.x = 0 ;
    this.y = 0;
}

Player.prototype.isDead = function(){
    if(HealthValue <= 0){
        return true;
    }
}

Player.prototype.addHealth = function(power) {
    var amount = power;
    
    if (HealthValue + power > 100){
        amount = 100 - HealthValue;
    }
    
    HealthValue += amount;
    this.HealthBar.setPercent(HealthValue);
}

Player.prototype.addNPC = function(New_npc) {
    this.npc = New_npc;
}
