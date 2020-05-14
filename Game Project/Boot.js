var Game = {};

Game.Boot = function(game){

};

Game.Boot.prototype = {
  init:function(){

      this.input.maxPointers = 1;

      this.stage.disableVisibiltyChange = true;
  },

  create:function(){
    this.state.start('Preloader');
  }
};
