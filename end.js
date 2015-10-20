var i = 0;
var gameOverState = {
	create: function() {
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
			message5 = "END";
			message6 = "To restart, hit enter";
			messages = [message1, message2, message3, message4, message5, message6];
		}
		var entkey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);

		entkey.onDown.addOnce(this.restart, this);

	},
	update: function() {
		var text = game.add.text(game.width / 2, game.height / 2, messages[i], {font: "50px Arial", fill: "#ffffff", wordWrap: true, wordWrapWidth: 400, align: "left" });
			if (action.isDown){
				i++;
			}

	},
	restart: function() {
		game.state.start('menu');
	},
}	


