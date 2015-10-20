var level2DayState = {
	create: function() {
		// START MAP CONSTRUCTION
		game.map = game.add.tilemap('Level2Day');

		// ADDS THE TILE SETS INTO THE MAP OBJECT
		game.map.addTilesetImage('Collision2', 'Collisiontile');
		game.map.addTilesetImage('wallTileset', 'WallTile');
		game.map.addTilesetImage('darkBackground', 'BlackTile');
	
		// DRAW LAYERS
		background = game.map.createLayer('Background2');
		background2 = game.map.createLayer('StoneBridge ');
		background4 = game.map.createLayer('Collision');
		
		// OPACITY
		background4.alpha = 0;

		// RESIZE WORLD BOUNDS
		background.resizeWorld();
		game.world.setBounds(0,0,1280,1280);

		// PLAYER AND NPC
		game.npc = new Npc(game, 1168, 1088, 8, 'npcFem');
		game.player = new Player(game, 640, 1248, 8, game.pHealth);
		game.food = new Collectible(game, 864, 1104, 'food');
		game.water = new Collectible(game, 176, 160, 'water');
		game.spear = new Collectible(game, 1184, 1136, 'spear');
		game.wood = new Collectible(game, 688, 20, 'wood');


		// DRAW FOREGROUND
		foreground = game.map.createLayer('Foreground2');

		// DEFINE COLLISION OBJECTS
		game.map.setCollision(36, true, 'Collision');
		console.log("set collision2");
		game.physics.p2.convertTilemap(game.map, 'Collision');

	},
	update: function(){
		game.pHealth = HealthValue
		if (game.player.wood = true) {
			var coord = game.player.getCoordinates();
			text = game.add.text(coord.x - 400, coord.y - 50, 'Night approaches... Press action to continue', {font: '15px Arial', fill: '#ffffff', wordWrap: true});
			if(action.isDown){
				game.state.start('lvl2_n');
			}
		}
		game.camera.follow(game.player);
	},
}
