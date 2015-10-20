var instructState = {
	create: function(){
		var nameLabel = game.add.text(game.width/2 - 300, game.height/2 - 200, 'The rules are simple: WASD for movement. Space to fire. E for actions moving through text fields. Do your best', {font: '25px Arial', fill: '#ffffff', wordWrap: true, wordWrapWidth: 600});
		var backLabel = game.add.text (game.width/2, game.height/2 + 50, 'Hit Enter to go Back', {font: '25px Arial', fill: '#ffffff' });

		var backKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
		backKey.onDown.addOnce(this.back, this);
	},
	back: function(){
		game.state.start('menu');
	},
}
