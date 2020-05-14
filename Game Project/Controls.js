Game.Controls = function(game){

};

var background;

Game.Controls.prototype = {
  create:function(game){

      background = game.add.sprite(0, 0, 'controls');

      this.createButton(game, "Main Menu", game.world.centerX, game.world.centerY + 210, 200, 100, function(){
        this.state.start("MainMenu");
      });
  },

  update:function(game){

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
