var boundsx = 800*.8, boundsy = 600*.8;
var game = new Phaser.Game(boundsx, boundsy, Phaser.AUTO, "game");

game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('instr', instructState);
game.state.add('lvl1_d', level1DayState);
game.state.add('lvl1_n', level1NightState);
game.state.add('lvl2_d', level2DayState);
game.state.add('lvl3_d', level3DayState);
/*game.state.add('lvl2_n', level2NightState);
game.state.add('lvl3_d', level3DayState);
game.state.add('lvl3_n', level3NightState);
game.state.add('lvl4', level4State);
=======
game.state.add('lvl2_n', level2NightState);
/*game.state.add('lvl3_d', level3State);
>>>>>>> 1f02b5896691ac5de6a47d16e9d374bb10123c93
game.state.add('end', gameOverState); */

game.state.start('boot');
