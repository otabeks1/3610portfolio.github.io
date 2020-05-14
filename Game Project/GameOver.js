Game.GameOver = function(game){
};

var gameover;
var score;
var scoreString = '';
var scoreText;

Game.GameOver.prototype = {
  create:function(game){
          gameover = game.add.sprite(0, 0, 'gameover');


      this.createButton(game, "Play Again", game.world.centerX, game.world.centerY + 50, 200, 100, function(){
        this.state.start("Level");
        endmusic.stop();
      });

        this.createButton(game, "Main Menu", game.world.centerX, game.world.centerY + 150, 200, 100, function(){
          this.state.start("MainMenu");
          endmusic.stop();
        });

          scoreString = 'Your score is: ';
          scoreText = this.add.text(315, 250, scoreString + score, { font: '24px Arial', fill: 'black' });

          endmusic = new Phaser.Sound(game,'endmusic',1,true);
          endmusic.play();
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
