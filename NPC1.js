Npc.prototype = Object.create(Phaser.Sprite.prototype);

Npc.prototype.constructor = Npc;

Npc.prototype.force = {x:0.0, y:0.0};

var npc;
var messges1;
var messages2;
var i;
var counter;
var texts;
var prompt;
var followPlayer;
var initialX;
var initialY;

var weaponTime2 = 0;
var weaponDelay2 = 400;
function Npc(game, x, y, speed ,spriteType) {
	console.log("Creating NPC");
	console.log("Creating Player");
	initialY = y;
	initialX = x;
	Phaser.Sprite.call(this, game);

	this.body = this.game.add.sprite(x,y, spriteType);
	game.physics.arcade.enable(this.body , true);
	console.log(this.body.x , this.body.y);
	this.body.animations.add('left', [9, 10, 11, 10],speed, true);
	this.body.animations.add('right', [3, 4, 5, 4],speed, true);
	this.body.animations.add('up', [0, 1, 2, 1], speed, true);
	this.body.animations.add('down', [6, 7, 8, 7], speed, true);
	
	this.body.anchor.setTo(0.5,0.5);
	this.body.checkCollision = true;



	this.body.scale.setTo(.9,.9);

	this.body.wood = 0;

	followPlayer = false;
	i = 0;
	counter = 0;
	texts = new Array(5);
	this.game = game;
	this.body.collideWorldBounds = true;
	yes = game.input.keyboard.addKey(Phaser.Keyboard.Y);
	no = game.input.keyboard.addKey(Phaser.Keyboard.N);
	game.add.existing(this);
}


Npc.prototype.talk = function(game, npc_value) {
	console.log("in Talk");

		if( i > 0  && counter %12 == 0 && i < 3){
			texts[i -1].kill();
		}
		if (npc_value == 1){
			message1 = "Help me, please.  I have been stranded here for days.  I miss my family! ... Press E";
			message2 = "You look pretty capable... Do you think that I could hang with you? I bet we would survive better if we stuck together"
			message3 = "Press Y if you want to help and N if you don't"
			messages = [message1 , message2 , message3];
		}
		else if (npc_value == 2){
			message = "What do you want, boy? I'm very busy.  But I guess you look capable.  What do you say, want to fight with me against these bastards?"
		}	
		 style = { font: "30px Arial", fill: "#ffffff", wordWrap: true, wordWrapWidth: 600, align: "left" };

	if( counter % 12 == 0 && i < 3){
		console.log(counter);
		if(i == 2){
			prompt = game.add.text(this.body.x - 500, this.body.y - 200, messages[i], style)
		}else{
	     texts[i] = game.add.text(this.body.x - 500, this.body.y - 200, messages[i], style);
	    }
	     i = i+1;
	 }
	 counter = counter + 1;


}

Npc.prototype.update = function(){
	
	if(no.isDown && prompt!=null){
		prompt.kill();
		this.game.hasNPC = false;
	}
	if(yes.isDown && prompt!=null){
		prompt.kill();
		this.game.player.addNPC(this);
		followPlayer = true;
		this.game.hasNPC = true;
	}

	if(followPlayer == true){
		//console.log(this.body.x , this.body.y);
		this.followPlayer();
	}else{
		//console.log("Before",this.body.x , this.body.y);
		this.body.x = initialX;
		this.body.y = initialY;
		//console.log("After",this.body.x , this.body.y);
	}
}

Npc.prototype.followPlayer = function(){

	console.log("npc follow");
	var dist1 = this.body.x - this.game.player.x;
 	var dist2 = this.body.y - this.game.player.y;
    	var speed = 5;
 	var painDist = 15;
  	if( Math.abs(dist1) > Math.abs(dist2)){
        	if(dist1 > painDist ){
        		this.body.animations.play('left');
        		this.moveHorizontal(-speed);

        		this.position.faceLeft = true;
        		this.position.faceRight = false;
		        this.position.faceUp = false;
		        this.position.faceDown = false;

	        }else if (dist1 < -painDist){

       			 this.body.animations.play('right');

		        this.moveHorizontal(speed);

		        this.position.faceRight = true;
        		this.position.faceLeft = false;
		        this.position.faceUp = false;
		        this.position.faceDown = false;
    		}
        }
       else {
        	if(dist2> painDist){
        		this.body.animations.play('up');

		        this.moveVertical(-speed);

		        this.position.faceUp = true;
		        this.position.faceDown = false;
		        this.position.faceLeft = false;
		        this.position.faceRight = false;
  	        }else if (dist2 < -painDist){
		        this.body.animations.play('down');

		        this.moveVertical(speed);

		        this.position.faceDown = true;
		        this.position.faceUp = false;
		        this.position.faceLeft = false;
		        this.position.faceRight = false;
    		}
		else if ((dist1> -painDist) && (dist1 < painDist) && (dist2 >-painDist) && (dist2 < painDist)){
       			if (this.position.faceLeft==true){
            			this.body.animations.play('left');
        		}
	        	else if(this.position.faceRight==true){
        	        	this.body.animations.play('right');
        		}
        		else if (this.position.faceUp==true){
            			this.body.animations.play('up');
        		}
        		else if (this.position.faceDown==true){
            			this.body.animations.play('down');
        		}
        	}
	}
}

Npc.prototype.moveVertical = function (speed)
{
   this.body.y += speed;

}


Npc.prototype.moveHorizontal = function moveHorizontal(speed){
   this.body.x+= speed;

}

Npc.prototype.Shoot = function(weaponSprite, power){

	console.log("npc shoot");
       if(game.time.now > weaponTime2){

         if(this.position.faceLeft == true){
                this.weapon = new Weapon(this.game ,this.body.x -8, this.body.y ,power, weaponSprite, -400, 0);
            } 
         else if (this.position.faceRight == true){
            this.weapon = new Weapon(this.game ,this.body.x +8,this.body.y ,power, weaponSprite, 400, 0);

            }
            else if (this.position.faceUp == true){
            this.weapon = new Weapon(this.game ,this.body.x ,this.body.y -8,power, weaponSprite, 0, -400);


            }
            else if(this.position.faceDown == true){
               this.weapon = new Weapon(this.game ,this.body.x ,this.body.x+ 25 ,power, weaponSprite, 0, 400);
         
            }  
            console.log("after!!!", weaponTime);
            weaponTime2 = game.time.now + weaponDelay2;
        }       

}


