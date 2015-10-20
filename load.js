var loadState = {
	preload: function(){
		var loadingLabel = game.add.text(80, 150, 'loading...', {font: '30px Courier', fill: '#ffffff'});


		/*game.load.image('rock', 'assets/Weapons/rock.png');

		game.load.image('plasma', 'assets/Weapons/plasma.png');

		game.load.spritesheet('dragon', 'assets/enemySprites/dragon1.png', 24, 32);
		game.load.spritesheet('GoldDragon', 'assets/enemySprites/dragon2.png', 24, 32);
		game.load.spritesheet('Golem', 'assets/enemySprites/golem.png', 24, 32);
		game.load.spritesheet('worml', 'assets/enemySprites/skyll-spriteLeft.png', 24, 32);
		game.load.spritesheet('wormr', 'assets/enemySprites/skyll-spriteRight.png', 24, 32);
		game.load.spritesheet('player', 'assets/playerSprites/warrior_m.png', 32, 36);
		game.load.spritesheet('npcFem', 'assets/playerSprites/warrior_f.png', 32, 36);
*/

		

		game.load.image('plasma', 'assets/Weapons/plasma.png');
		game.load.spritesheet('dragon', 'assets/enemySprites/dragon1.png', 24, 32);
		game.load.spritesheet('player', 'assets/playerSprites/warrior_m.png', 32, 36);
		game.load.spritesheet('GoldDragon', 'assets/enemySprites/dragon2.png', 24, 32);
		game.load.spritesheet('npcFem', 'assets/playerSprites/warrior_f.png', 32, 36);
		game.load.spritesheet('golem', 'assets/enemySprites/golem2.png', 24, 32);
		game.load.image('rock', 'assets/Weapons/rock.png');

		game.load.tilemap("Level1Day", 'assets/backgroundSprites/TileMaps/Level1Day.json', null, Phaser.Tilemap.TILED_JSON);
		game.load.tilemap("Level1Night", 'assets/backgroundSprites/TileMaps/Level1Night.json', null, Phaser.Tilemap.TILED_JSON);
		game.load.tilemap("Level2Day", 'assets/backgroundSprites/TileMaps/Level2Day.json', null, Phaser.Tilemap.TILED_JSON);
		game.load.tilemap("Level2Night", 'assets/backgroundSprites/TileMaps/Level2Night.json', null, Phaser.Tilemap.TILED_JSON);
		game.load.tilemap("Level3Day", 'assets/backgroundSprites/TileMaps/Level3.json', null, Phaser.Tilemap.TILED_JSON);
		game.load.image("CompleteTile", 'assets/backgroundSprites/Tilesets/MegaTileset.png');
		game.load.image('DesertTiles', 'assets/backgroundSprites/Tilesets/desert_1.png');
		game.load.image("Collisiontile", 'assets/backgroundSprites/Tilesets/collision.png');
		game.load.image("NightTile", 'assets/backgroundSprites/Tilesets/night.png');
		game.load.image("BlackTile", 'assets/backgroundSprites/Tilesets/darkBackground.png');
		game.load.image("WallTile", 'assets/backgroundSprites/Tilesets/wallTile.png');
		game.load.image('food', 'assets/burger.png');
		game.load.image('water', 'assets/water.png');
		game.load.image('wood', 'assets/wood.png');
		game.load.image('obelisk', 'assets/enemySprites/obelisk.png');

		game.load.audio('Level1Music', 'assets/music/Level1Day.mp3');
		game.load.audio('Level2Music', 'assets/music/Level2Day.mp3');
		game.load.audio('LevelNightMusic', 'assets/music/LevelNight.mp3');
		game.load.audio('Level3Music', 'assets/music/Level3.mp3');
	},
	create: function(){
		game.state.start('menu');
	},
};
