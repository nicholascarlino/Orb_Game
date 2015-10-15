var boundsx = 800*.8, boundsy = 600*.8;
var game = new Phaser.Game(boundsx, boundsy, Phaser.AUTO, "game", {preload:
		preload, update:update, create:create});


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
	game.load.spritesheet('player', 'assets/playerSprites/warrior_f.png', 32, 36);
     game.load.spritesheet('rock', 'assets/rock.png', 32, 36)

	game.load.tilemap("Level1", 'assets/backgroundSprites/TileMaps/Level1.json', null, Phaser.Tilemap.TILED_JSON);
	game.load.image('DesertTiles','assets/backgroundSprites/Tilesets/desert_1.png');
	game.load.image("Collisiontile", 'assets/backgroundSprites/Tilesets/collision.png');
}

function create(){

	// START MAP CONSTRUCTION

	map = game.add.tilemap('Level1');
	// ADDS THE TILE SETS INTO THE MAP OBKECT 
	map.addTilesetImage('collision', "Collisiontile");
	map.addTilesetImage('desert_1', 'DesertTiles');
	

	// these lines begin drawing the different layers of the map in order
	
	background = map.createLayer('BackgroundLayer');
	background2 = map.createLayer('Extra_Seaweed');
	background3 = map.createLayer('Rock_Layer');
	background4 = map.createLayer('Collision');
	// sets the opacity for the collision layer at 40%
	background4.alpha = 0;

	// resize the entire world bounds to fit the map that I created 
	background.resizeWorld();
	game.world.setBounds(0,0,960,960);


	// start the new physics system
	game.physics.startSystem(Phaser.Physics.P2JS);
	game.physics.p2.setBoundsToWorld(true, true, true, true, false);


	// create player and enemy objects 

	game.player = new Player(game ,148 , 757, 8);
	game.dragon = new Enemy(game , 300 , 100, 'dragon');
	//game.dragon = new Dragon(game , 100 , 100);
	//game.player = new Player(game ,148 , 757, 8);

	//draws the foreground so the player looks like they are walking behind objects
	// example: the tops of the trees!
	foreground = map.createLayer('Foreground');
	
	// these two lines set and define the collision objects, in this case
	// it refers to the red squares that you can kind of see on the map 
	map.setCollision(313, true, "Collision");
	console.log("set collision!");
	game.physics.p2.convertTilemap(map, 'Collision');

	//game.player.change_weapon('fire');
}

function update(){
	game.camera.follow(player);
	
	
}


