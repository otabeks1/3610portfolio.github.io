Game.MainMenu = function(game){

};

var titlescreen;

Game.MainMenu.prototype = {
  create:function(game){

      titlescreen = game.add.sprite(0, 0, 'titlescreen');


      this.createButton(game, "Play", game.world.centerX, game.world.centerY + 32, 200, 100, function(){
        this.state.start("Level");
        intro.stop();
      });

      this.createButton(game, "Controls", game.world.centerX, game.world.centerY + 132, 200, 100, function(){
        this.state.start("Controls");
        intro.stop();
      });

      intro = new Phaser.Sound(game,'intro',1,true);
      intro.volume = .25;
      intro.play();


  },

  update:function(){

  },

  createButton:function(game, string, x, y, w, h, callback){
    var button1 = game.add.button(x, y, 'button', callback, this, 2, 1, 0);

    button1.anchor.setTo(0.5, 0.5);
    button1.width = w;
    button1.height = h;

    var text = game.add.text(button1.x, button1.y, string, {font:'36px Arial', fill:"black", align:"center"});

    text.anchor.setTo(0.5, 0.5);
  }
};
