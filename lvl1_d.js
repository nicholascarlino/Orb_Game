var level1DayState = {
	create: function(){
		// START MAP CONSTRUCTION

		game.map = game.add.tilemap('Level1Day');
		
		// ADDS THE TILE SETS INTO THE MAP OBJECT
		game.map.addTilesetImage('collision', 'Collisiontile');
		game.map.addTilesetImage('desert_1', 'DesertTiles');

		// DRAW DIFFERENT LAYERS OF MAP
		background = game.map.createLayer('BackgroundLayer');
		background2 = game.map.createLayer('Extra_Seaweed');
		background3 = game.map.createLayer('Rock_Layer');
		background4 = game.map.createLayer('Collision');

		// SETS OPACITY
		background4.alpha = 0;

		// RESIZE WORLD BOUNDS TO FIT CREATED MAP
		background.resizeWorld();
		game.world.setBounds(0,0,960,960);
		
		// PLAYER
		game.player = new Player(game, 148, 757, 8);


		// DRAW FOREGROUND
		// makes it look like characters are walking behind objects
		foreground = game.map.createLayer('Foreground');

		// DEFINE COLLISION OBJECTS IN MAP
		game.map.setCollision(313, true, 'Collision');
		console.log("set collision");
		game.physics.p2.convertTilemap(game.map, 'Collision');
	},
	update: function(){
		if (game.player.wood) {
			var message = game.add.text(80, 80, 'Brace yourself... The night is upon you', {font: '25px Arial', fill: '#ffffff' });

			game.state.start('lvl1_n');
		}
		game.camera.follow(game.player);
	},
}