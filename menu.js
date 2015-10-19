var menuState = {
	create: function(){
		var nameLabel = game.add.text(game.width / 2, game.height/2, 'Press enter to Start', {font: '50px Arial', fill: '#ffffff' });

		var instrLabel = game.add.text(game.width/2, game.height/2 + 50, 'Press i for Instructions',  {font: '25px Arial', fill: '#ffffff'});

		var entKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
		var inkey = game.input.keyboard.addKey(Phaser.Keyboard.I);

		entKey.onDown.addOnce(this.start, this);
		inkey.onDown.addOnce(this.instr, this);

	},
	start: function() {
		game.state.start('lvl1_d');
	},
	instr: function() {
		game.state.start('instr');
	},
}
