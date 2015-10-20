var boundsx = 800*.8, boundsy = 600*.8;
var game = new Phaser.Game(boundsx, boundsy, Phaser.AUTO, "game");

game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('instr', instructState);
game.state.add('lvl1_d', level1DayState);
game.state.add('lvl1_n', level1NightState);
/*game.state.add('lvl2_d', level2DayState);
game.state.add('lvl2_n', level2NightState);
game.state.add('lvl3_d', level3DayState);
game.state.add('lvl3_n', level3NightState);
game.state.add('lvl4', level4State);
game.state.add('end', gameOverState); */

game.state.start('boot');
























/*
var wasd;
var dragon;
var cursors;
var position;
var speed;


function preload(){
	game.load.spritesheet('dragon', 'assets/enemySprites/dragon1.png', 24, 32);
 
	game.load.spritesheet('dragon', 'assets/enemySprites/skyll-spriteLeft.png', 24, 32);
	game.load.spritesheet('player', 'assets/playerSprites/warrior_m.png', 32, 36);
	game.load.spritesheet('dragon', 'assets/enemySprites/skyll-spriteLeft.png', 32, 36);
	game.load.spritesheet('npc', 'assets/playerSprites/warrior_f.png', 32, 36);
     game.load.spritesheet('rock', 'assets/rock.png', 32, 36)

	game.load.tilemap("Level1", 'assets/backgroundSprites/TileMaps/Level1.json', null, Phaser.Tilemap.TILED_JSON);
	game.load.image('DesertTiles','assets/backgroundSprites/Tilesets/desert_1.png');
	game.load.image("Collisiontile", 'assets/backgroundSprites/Tilesets/collision.png');
	game.load.image('food', 'assets/burger.png');
	game.load.image('water', 'assets/water.png');
	game.load.image('wood', 'assets/wood.png');	
}

function create(){

	// START MAP CONSTRUCTION
	game.map = game.add.tilemap('Level1');
	// ADDS THE TILE SETS INTO THE MAP OBKECT 
	game.map.addTilesetImage('collision', "Collisiontile");
	game.map.addTilesetImage('desert_1', 'DesertTiles');
	//game.map.addTilesetImage('Night', 'NightTile');
	

	// these lines begin drawing the different layers of the map in order
	
	background = game.map.createLayer('BackgroundLayer');
	background2 = game.map.createLayer('Extra_Seaweed');
	background3 = game.map.createLayer('Rock_Layer');
	background4 = game.map.createLayer('Collision');
	
	// sets the opacity for the collision layer at 40%
	background4.alpha = 0;
	

	// resize the entire world bounds to fit the map that I created 
	background.resizeWorld();
	game.world.setBounds(0,0,960,960);


	// start the new physics system
	game.physics.startSystem(Phaser.Physics.P2JS);
	//game.physics.startSystem(Phaser.Physics.ARCADE);
	//game.physics.p2.setBoundsToWorld(true, true, true, true, false);

	// create player and enemy objects 
    game.npc = new Npc(game , 200 , 100 , 8,'npc');
	game.player = new Player(game ,148 , 757, 8);


	game.dragon = game.add.group();
	for (var i = 0; i< 4;i++ ){

		 var enemy = new Enemy(game , 300 , 100, 'dragon');
		 game.dragon.add(enemy);
	}
	

	//draws the foreground so the player looks like they are walking behind objects


	// create player and enemy objects 

	//draws the foreground so the player looks like they are walking behind objects
	// example: the tops of the trees!
	foreground = game.map.createLayer('Foreground');
	
	// these two lines set and define the collision objects, in this case
	// it refers to the red squares that you can kind of see on the map 
	game.map.setCollision(313, true, "Collision");
	console.log("set collision!");
	game.physics.p2.convertTilemap(game.map, 'Collision');
	//background5 = game.map.createLayer('Night');
	//background5.alpha = .7;
	// these two lines set and define the collision objects, in this case
	// it refers to the red squares that you can kind of see on the map 
	game.food = new Collectible(game, 500, 500, 'food');
	game.water = new Collectible(game, 540, 500, 'water');
	game.wood = new Collectible(game, 460, 500, 'wood');
}

function update(){
	game.camera.follow(game.player);
	
	
}

*/
