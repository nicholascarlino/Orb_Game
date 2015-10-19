var level1NightState = {
	create: function(){
		// START MAP CONSTRUCTION

		game.map = game.add.tilemap('Level1Day');
		
		// ADDS THE TILE SETS INTO THE MAP OBJECT
		game.map.addTilesetImage('collision', 'Collisiontile');
		game.map.addTilesetImage('desert_1', 'DesertTiles');
		game.map.addTilesetImage('Night', 'NightTile');

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
		
		// PLAYER AND ENEMIES
		game.player = new Player(game, 148, 757, 8);

		game.enemies = game.add.group();
		for (var i = 0; i < 4; i++){
			var enemy = new Enemy(game, 300, 100, 'dragon');
			game.enemies.add(enemy);
		}

		// DRAW FOREGROUND
		// makes it look like characters are walking behind objects
		foreground = game.map.createLayer('Foreground');

		// DEFINE COLLISION OBJECTS IN MAP
		game.map.setCollision(313, true, 'Collision');
		console.log("set collision");
		game.physics.p2.convertTilemap(game.map, 'Collision');
		background5 = game.map.createLayer('Night');
		background5.alpha = .7;
	},
	update: function(){
		game.camera.follow(game.player);
	},
}
