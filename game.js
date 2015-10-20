var boundsx = 800*.8, boundsy = 600*.8;
var game = new Phaser.Game(boundsx, boundsy, Phaser.AUTO, "game");

game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('instr', instructState);
game.state.add('lvl1_d', level1DayState);
game.state.add('lvl1_n', level1NightState);
game.state.add('lvl2_d', level2DayState);
game.state.add('lvl2_n', level2NightState);
/*game.state.add('lvl3_d', level3State);
game.state.add('end', gameOverState); */

game.state.start('boot');
