var menuState = {
	create: function(){
		var startLabel = game.add.text(game.world.width / 2, game.world.height / 2, 'Press Enter to Start', {font: '25px Arial', fill: '#ffffff' });
		var instrLabel = game.add.text(game.world.width / 2, game.world.height / 2 + 50, 'Press i for Instructions', {font: '25px Arial', fill: '#ffffff' });
		var startKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
		var instrKey = game.input.keyboard.addKey(Phaser.Keyboard.I);

		startKey.onDown.addOnce(this.start, this);
		instrKey.onDown.addOnce(this.instr, this);
	},
	start: function(){
		game.state.start('lvl1_d');
	},
	instr: function(){
		game.state.start('instr');
	},
};
