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
		game.plasma = new Collectible(game, 1184, 1136, 'plasma');

		game.wood = new Collectible(game, 688, 20, 'wood');


        game.player.wood = false;
		// DRAW FOREGROUND
		foreground = game.map.createLayer('Foreground2');

		// DEFINE COLLISION OBJECTS
		game.map.setCollision(36, true, 'Collision');
		console.log("set collision2");
		game.physics.p2.convertTilemap(game.map, 'Collision');

		backgroundMusic = game.add.audio('Level2Music');
		backgroundMusic.loop = true;
		backgroundMusic.play();

	},
	update: function(){
		game.pHealth = HealthValue
		if (game.player.wood == true) {
			text = game.add.text(688, 50, 'Night approaches... Press action to continue', {font: '15px Arial', fill: '#ffffff', wordWrap: true});
			if(action.isDown){
				backgroundMusic.loop = false;
				backgroundMusic.stop();
				game.state.start('lvl2_n');
			}
		}
		
		game.camera.follow(game.player);
	},
}
