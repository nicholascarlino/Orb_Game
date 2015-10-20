var loadState = {
	preload: function(){
		var loadingLabel = game.add.text(80, 150, 'loading...', {font: '30px Courier', fill: '#ffffff'});

		game.load.spritesheet('dragon', 'assets/enemySprites/dragon1.png', 24, 32);
		game.load.spritesheet('worm', 'assets/enemySprites/skyll-spriteLeft.png', 24, 32);
		game.load.spritesheet('player', 'assets/playerSprites/warrior_m.png', 32, 36);
		game.load.image('rock', 'assets/rock.png');
		game.load.tilemap("Level1Day", 'assets/backgroundSprites/TileMaps/Level1Day.json', null, Phaser.Tilemap.TILED_JSON);
		game.load.tilemap("Level1Night", 'assets/backgroundSprites/TileMaps/Level1Night.json', null, Phaser.Tilemap.TILED_JSON);
		game.load.image('DesertTiles', 'assets/backgroundSprites/Tilesets/desert_1.png');
		game.load.image("Collisiontile", 'assets/backgroundSprites/Tilesets/collision.png');
		game.load.image("NightTile", 'assets/backgroundSprites/Tilesets/night.png');
		game.load.image('food', 'assets/burger.png');
		game.load.image('water', 'assets/water.png');
		game.load.image('wood', 'assets/wood.png');
	},
	create: function(){
		game.state.start('menu');
	},
};
