var i = 0;
var text;
var introState = {
	create: function(){
		message1 = "One day... in a far off place...";
		message2 = "You were sailing on a boat.  Your own boat.  One you had crafted yourself";
		message3 = "Suddenly, a storm hit";
		message4 = "And washed you onto a mysterious beach";
		message5 = "You were scared at first... but then calmed down";
		message6 = "You decided to try to find some food and water: enter to start";
		messages = [message1, message2, message3, message4, message5, message6];
	var entkey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
	entkey.onDown.addOnce(this.start, this);
	text = game.add.text(game.width/2 - 200, game.height/2 - 200, messages[i], {font: "50px Arial", fill: "#ffffff", wordWrap: true, wordWrapWidth: 400, align: "left"});
	},
	update: function(){
		text.kill();
		text = game.add.text(game.width/2 - 200, game.height/2 - 200, messages[i], {font: "50px Arial", fill: "#ffffff", wordWrap: true, wordWrapWidth: 400, align: "left"});
	},
	start: function(){
		game.state.start('lvl1_d');
	},
}
