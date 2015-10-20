var introState = {
	create: function(){
		i = 0;
		counter = 0;
		message1 = "One day... in a far off place...";
		message2 = "You were sailing on a boat.  Your own boat.  One you had crafted yourself";
		message3 = "Suddenly, a storm hit";
		message4 = "And washed you onto a mysterious beach";
		message5 = "You were scared at first... but then calmed down";
		message6 = "You decided to try to find some food and water: enter to start";
		messages = [message1, message2, message3, message4, message5, message6];
	texts = new Array(6);
	var entkey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
	entkey.onDown.addOnce(this.start, this);
	var style = {font: "30px Arial", fill: "#ffffff", wordWrap: true, wordWrapWidth: 600, align: "center"};
	prompt = game.add.text(25, 400, messages[0], style);
	i++;
	game.time.events.loop(Phaser.Timer.SECOND * 3, this.createText, this);
	},
	update: function(){
		prompt.y -=1;
		for (var i = 0; i < 5; i++){
			if (texts[i]){
				texts[i].y -= 1;
			}
		}
	
	},
	start: function(){
		game.state.start('lvl1_d');
	},
	createText: function(){
		if(i < 6){
			var style = {font: "30px Arial", fill: "#ffffff", wordWrap: true, wordWrapWidth: 600, align: "center"};
			texts[i] = game.add.text(25, 400, messages[i], style);
			i++;
		}
	},
}
