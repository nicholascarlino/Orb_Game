var level2NightState = {
	create: function(){
		game.map = game.add.tilemap('Level2Night');
		console.log("TileMap");
		game.map.addTilesetImage('Collision2', 'Collisiontile');
		console.log("Tileset Collision");
		game.map.addTilesetImage('wallTileset', 'WallTile');
		console.log("Tileset wall");
		game.map.addTilesetImage('darkBackground', 'BlackTile');
		console.log("Tileset black");
		game.map.addTilesetImage('Night2', 'NightTile');
		console.log("tileset night");
		background = game.map.createLayer('Background2');
		console.log("layer background");
		background2 = game.map.createLayer('StoneBridge ');
		console.log("layer stone");
		background.resizeWorld();
		console.log("resize");
		game.world.setBounds(0,0,1280,1280);
		console.log("set Bounds");
		
		game.player = new Player(game, 640, 1248, 8);

		if (npc_is_attached == true){
			game.player.addNPC(new Npc(game, 635, 1250, 8, 'npcFem'));
			followPlayer = true;
		}
		if (plasma == true){
			game.player.change_weapon('plasma', 20);
		}
		game.enemies = game.add.group();
		console.log("make enemies");
		for (var i = 0; i < 5; i++){
			console.log("enemy for");
			var drag = new Enemy(game, 144, 128, 'dragon');
			game.enemies.add(drag);
			var gol = new Enemy(game, 592, 176, 'golem');
			game.enemies.add(gol);
		}
		console.log(game.enemies.length);
		foreground = game.map.createLayer('Foreground2');

		background4 = game.map.createLayer('Collision');
		
		background4.alpha = 0;
		game.map.setCollision(36, true, 'Collision');
		background3 = game.map.createLayer('Night2');
		background3.alpha = .7;

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
			game.player.wood = false;
			game.state.start('lvl3');
		}
		game.camera.follow(game.player);
	},
}
