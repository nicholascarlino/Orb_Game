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

		game.wood = new Collectible(game, 848, 48, 'wood');
		game.food = new Collectible(game, 48, 304, 'food');
		game.water = new Collectible(game, 880, 496, 'water');
		
		// DRAW FOREGROUND
		// makes it look like characters are walking behind objects
		foreground = game.map.createLayer('Foreground');

		// DEFINE COLLISION OBJECTS IN MAP
		game.map.setCollision(313, true, 'Collision');
		console.log("set collision");
		game.physics.p2.convertTilemap(game.map, 'Collision');

	},
	update: function(){
		game.pHealth = HealthValue;
		if (game.player.wood == true) {//change userself
			game.add.text(750, 50, 'Brace yourself... The night is upon you. Hit action to continue', {font: '25px Arial', fill: '#000000', wordWrap: true, wordWrapWidth: 200 });
			if (action.isDown){
				game.state.start('end');
			}
		}
		game.camera.follow(game.player);
	},
}
