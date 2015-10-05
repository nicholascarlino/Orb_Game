npc.prototype = Object.create(Phaser.Sprite.prototype);

npc.prototype.constructor = Npc;

npc.prototype.force = {x:0.0, y:0.0};

function Npc(game, x, y, spriteType) {
	console.log("Creating NPC");
	Phaser.Sprite.call(this, game, x, y, spriteType);
	game.physics.enable(this, Phaser.Physics.ARCADE);
	this.body.allowRotation = false;
	game.add.existing(this);
}
npc.prototype.talk = function(game, npc_value) {
	var message;
	var style = {font: "30px Arial", fill: "#ff0044", align: "center" };

	if (npc_value == 1){
		message = "Help me, please.  I have been stranded here for days.  I miss my family! ... You look pretty capable... Do you think that I could hang with you? I bet we would survive better if we stuck together";
	}
	else if (npc_value == 2){
		message = "What do you want, boy? I'm very busy.  But I guess you look capable.  What do you say, want to fight with me against these bastards?"
	}	
	
	var text = game.add.text(game.world.centerX, game.world.centerY, message, style);
	text.anchor.set(0.5);
	text.wordWrap = true;
	text.wordWrapWidth = window.innerWidth - 50;
}
