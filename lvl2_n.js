var level2NightState = {
	create: function(){
		game.map = game.add.tilemap('Level2Night');
		game.map.addTilesetImage('Collision2', 'Collisiontile');
		game.map.addTilesetImage('wallTileset', 'WallTile');
		game.map.addTilesetImage('darkBackground', 'BlackTile');
		game.map.addTilesetImage('Night2', 'NightTile');
		background = game.map.createLayer('Background2');
		background2 = game.map.createLayer('StoneBridge ');
		background3 = game.map.createLayer('Night2');
		background4 = game.map.createLayer('Collision');
		
		background4.alpha = 0;
		background.resizeWorld();
		game.world.setBounds(0,0,1280,1280);
		
		game.player = new Player(game, 640, 1248, 8, game.pHealth);

		if (game.npc == true){
			player.npc = new Npc(game, 635, 1250, 8, 'npcFem');
		}
		game.enemies = game.add.group();
		for (var i; i < 5; i++){
			var drag = new Enemey(game, 144, 128, 'dragon');
			game.enemies.add(drag);
			var gol = new Enemey(game, 592, 176, 'golem');
			game.enemies.add(gol);
		}
		foreground = game.map.createLayer('Foreground2');
		game.map.setCollision(36, true, 'Collision');
		game.physics.p2.convertTilemap(game.map, 'Collision');
	},
	update: function(){
		game.pHealth = HealthValue
		if (game.player.dead == true) {
			var coord = game.player.getCoordinates();
			text = game.add.text(coord.x - 400, coord.y - 50, 'You have died.  Press action to continue', {font: "15px Arial", fill: "#ffffff", wordWrap: true, wordWrapWidth: 500, align: "left"});
			if (action.isDown){
				game.player = new Player(game, 640, 1248, 8);
				game.state.start('lvl2_d');
			}
		}
		if (game.enemies.length == 0){
			game.state.start('lvl3');
		}
		game.camera.follow(game.player);
	},
}
