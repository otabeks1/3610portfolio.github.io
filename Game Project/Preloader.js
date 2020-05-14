Game.Preloader = function(game){
};

Game.Preloader.prototype = {
  preload:function(){

    this.time.advancedTiming = true;

    this.load.tilemap('map', 'assets/tilesets/Level.csv');
    this.load.image('tileset', 'assets/tilesets/tileset.png');

    this.load.spritesheet('player', 'assets/images/player.png', 24,26);

    this.load.image('coin', 'assets/images/coin.png');
    this.load.image('enemy', 'assets/images/enemy.png');
    this.load.image('background', 'assets/images/background.png');
    this.load.image('titlescreen', 'assets/images/titlescreen.png');
    this.load.image('gameover', 'assets/images/gameover.png');
    this.load.image('controls', 'assets/images/controls.png');
    this.load.image('helpbg', 'assets/images/help.png');
    this.load.image('newgame', 'assets/images/newgame.png');
    this.load.image('button', 'assets/images/button.png');

    this.load.audio('coinfx', 'assets/sounds/coin.mp3');
    this.load.audio('hurtfx', 'assets/sounds/hurt.mp3');
    this.load.audio('background', 'assets/sounds/background.mp3');
    this.load.audio('intro', 'assets/sounds/intro.mp3');
    this.load.audio('endmusic', 'assets/sounds/endmusic.mp3');
    this.load.audio('gameoverfx', 'assets/sounds/gameover.mp3');
  },

  create:function(){
    this.state.start('MainMenu');
  }
};
