var level3DayState = {
	create: function(){
		// START MAP CONSTRUCTION

		game.map = game.add.tilemap('Level3Day');
		// ADDS THE TILE SETS INTO THE MAP OBJECT
		game.map.addTilesetImage('completeSet', 'CompleteTile');
		game.map.addTilesetImage('Collision3', 'Collisiontile'); //check

		// DRAW DIFFERENT LAYERS OF MAP
		background = game.map.createLayer('Background3');
		background2 = game.map.createLayer('Cliffs');
//game.player = new Player(game, 148, 757, 8);
game.player = new Player(game, 1760, 1792, 8);
		// SETS OPACITY
		if (npc_is_attached == true){
			game.player.addNPC(new Npc(game, game.player.x - 10, game.player.y + 10, 8, 'npcFem'));
			followPlayer = true;
		}
		if (plasma == true){
			console.log("has plasma")
			game.player.change_weapon('plasma', 20);
		}
		game.food = new Collectible(game, 400, 1792, 'food');

		// RESIZE WORLD BOUNDS TO FIT CREATED MAP
		background.resizeWorld();
		game.world.setBounds(0,0,1920,1920);
		game.enemies = game.add.group();
		// PLAYER AND ENEMIES
		//game.player = new Player(game, 148, 757, 8);

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

		backgroundMusic = game.add.audio('Level3Music');
		backgroundMusic.loop = true;
		backgroundMusic.play();


		//CREATE THE OBELISK 768, 256
		game.obelisk = game.add.sprite(818, 300, 'obelisk');
		game.physics.p2.enable(game.obelisk);
		game.obelisk.body.clearShapes();
		game.obelisk.body.addRectangle(80, 70);
		game.obelisk.body.fixedRotation = true;
		game.obelisk.anchor.setTo(.5,.5);
		game.obelisk.body.x = game.obelisk.x;
		game.obelisk.body.y = game.obelisk.y;

	 	var barConfig ={
      	 width: 40,
       	 height: 10,
       	 x: 818,
       	 y: 210,
       	 bg: {
      	 color: '#651828'
      	 },
      	 bar: {
      	 color: '#0000FF'
      	 },
      	 animationDuration: 200,
       	flipped: false
   		 };
   		 game.obelisk.HealthValue = 100;
   		 game.obelisk.HealthBar = new HealthBar(game, barConfig);
   		 game.obelisk.HealthBar.setPercent(100);



	},
	update: function(){

	    game.pHealth = HealthValue
		if (game.player.isDead() == true) {
			game.player.wood = false;
			text = game.add.text(game.width / 2, game.height / 2, 'You have died. Press action to continue',{ font: "25px Arial", fill: "#000000", wordWrap: true, wordWrapWidth: 500, align: "left"});
			if (action.isDown){
				backgroundMusic.loop = false;
				backgroundMusic.stop();
				HealthValue = 100;
				game.state.start('lvl1_d');
			}
		}
		if(game.obelisk.HealthValue == 0){
			game.state.start('end');
		}	
		game.camera.follow(game.player);
	},
	createBlueDragons: function(){
		 for (var i = 0; i < 3; i++){
			var enemy = new Enemy(game, 832, 1280, 'dragon');
			game.enemies.add(enemy);
		  }
	},
	createGoldDragons: function(){
		 for (var i = 0; i < 2; i++){
			var enemy = new Enemy(game, 1728, 256, 'GoldDragon');
			game.enemies.add(enemy);
		  }
	},
	createGolem: function(){
		 for (var i = 0; i < 2; i++){
		 	console.log(i);
			var enemy = new Enemy(game, 128, 128, 'golem');
			game.enemies.add(enemy);
		  }
	},

}


