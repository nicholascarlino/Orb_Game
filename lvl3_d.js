var level3DayState = {
	create: function(){
		// START MAP CONSTRUCTION

		game.map = game.add.tilemap('Level3Day');
		console.log("after MAP 1");
		// ADDS THE TILE SETS INTO THE MAP OBJECT
		game.map.addTilesetImage('completeSet', 'CompleteTile');
		console.log("after MAP 2");
		game.map.addTilesetImage('Collision3', 'Collisiontile'); //check
		console.log("after MAP 3");

		// DRAW DIFFERENT LAYERS OF MAP
		background = game.map.createLayer('Background3');
		background2 = game.map.createLayer('Cliffs');

		// SETS OPACITY
		if (npc_is_attached == true){
			game.player.addNPC(new Npc(game, game.player.x - 10, game.player.y + 10, 8, 'npcFem'));
			followPlayer = true;
		}
		if (plasma == true){
			game.player.change_weapon('plasma', 20);
		}

		// RESIZE WORLD BOUNDS TO FIT CREATED MAP
		background.resizeWorld();
		game.world.setBounds(0,0,1920,1920);
		game.enemies = game.add.group();
		// PLAYER AND ENEMIES
		game.player = new Player(game, 148, 757, 8);

		game.time.events.loop(Phaser.Timer.SECOND * 10, this.createBlueDragons, this);
		game.time.events.loop(Phaser.Timer.SECOND * 15, this.createGoldDragons, this);
		game.time.events.loop(Phaser.Timer.SECOND * 20, this.createGolem, this);


		// DRAW FOREGROUND
		// makes it look like characters are walking behind objects
		foreground = game.map.createLayer('Foreground3');

		background3 = game.map.createLayer('Mausoleum');
		background4 = game.map.createLayer('Collision');
		background4.alpha = 0;

		// DEFINE COLLISION OBJECTS IN MAP
		game.map.setCollision(3825, true, 'Collision');
		console.log("set collision");
		game.physics.p2.convertTilemap(game.map, 'Collision');
	},
	update: function(){

	    game.pHealth = HealthValue
		if (game.player.isDead() == true) {
			game.player.wood = false;
			text = game.add.text(game.width / 2, game.height / 2, 'You have died. Press action to continue',{ font: "25px Arial", fill: "#000000", wordWrap: true, wordWrapWidth: 500, align: "left"});
			if (action.isDown){
				HealthValue = 100;
				game.state.start('lvl1_d');
			}
		}	
		game.camera.follow(game.player);
	},
	createBlueDragons: function(){
		console.log("creating blue dragons");
		 for (var i = 0; i < 3; i++){
			var enemy = new Enemy(game, 832, 1280, 'dragon');
			game.enemies.add(enemy);
		  }
	},
	createGoldDragons: function(){
		console.log("creating gold dragons");
		 for (var i = 0; i < 2; i++){
			var enemy = new Enemy(game, 1728, 256, 'GoldDragon');
			game.enemies.add(enemy);
		  }
	},
	createGolem: function(){
		console.log("creating golems");
		 for (var i = 0; i < 2; i++){
		 	console.log(i);
			var enemy = new Enemy(game, 128, 128, 'golem');
			game.enemies.add(enemy);
		  }
	},

}


