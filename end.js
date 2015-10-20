var i = 0;
var gameOverState = {
	create: function() {
		 i = 0;
		 counter = 0;
		if (npc_is_attached == true){
			message1 = "Out of the Obelisk fell a glowing orb...";
			message2 = "It shined with a green light... A haunting light...";
			message3 = "The two both thought the same thing: << I must have it! >>";
			message4 = "They tore each other apart in a ravenous fury.";
			message5 = "At the end, the orb rolled away, as if by its own accord...";
			message6 = "END";
			message7 = "To restart, hit enter";

			messages = [message1, message2, message3, message4, message5, message6, message7];
		}else{
			message1 = "Out of the Obelisk fell a glowing orb...";
			message2 = "It shined with a green light... A haunting light...";
			message3 = "You pick it up off the ground and feel a strange energy course through you...";
			message4 = "You smile as you think of the possiblities...";
			message5 = "                END                        ";
			message6 = "To restart, hit enter";
			messages = [message1, message2, message3, message4, message5, message6];
		}
		texts = new Array(6);
		action = game.input.keyboard.addKey(Phaser.Keyboard.L);
		var entkey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
		var style = { font: "30px Arial", fill: "#ffffff", wordWrap: true, wordWrapWidth: 600, align: "center" };
		
		prompt = game.add.text(75, 400, messages[0], style);
		i++;
	    game.time.events.loop(Phaser.Timer.SECOND * 3 , this.createText, this);
		entkey.onDown.addOnce(this.restart, this);

	},
	update: function() {
			if (action.isDown){
				console.log("IN HERE");
				i++;
			}
			prompt.y -=1;
			for( var i = 0 ; i < 5 ; i++){
				if(texts[i]){
					texts[i].y -= 1;
				}
			}
		

	},
	restart: function() {
		game.state.start('menu');
	},
	createText: function() {
		if(i < 6){
	
		console.log("creating Text...")
		var style = { font: "30px Arial", fill: "#ffffff", wordWrap: true, wordWrapWidth: 600, align: "center" };
		texts[i] = game.add.text(75, 400, messages[i], style);
		i++;
	   }
	},
}	


