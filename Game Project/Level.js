Game.Level = function(game){};

var map;
var layer;

var player;
var controls = {};
var playerSpeed = 150;
var jumpTimer = 0;

var button;

var score;
var scoreString = '';
var scoreText;
var coin;
var coinCheck;
var health = 3;
var healthString = '';
var healthText;

var stepLimit = 150;

var helpbg;

Game.Level.prototype = {
  create:function(game){
    game.add.image(0, 0, 'background');
    this.physics.arcade.gravity.y = 1400;
    map = this.add.tilemap('map', 32, 32);
    map.addTilesetImage('tileset');
    layer = map.createLayer(0);
    layer.resizeWorld();
    map.setCollisionBetween(0, 4);

    score = 0;
    coin = this.add.sprite(this.rnd.integerInRange(20, 780), this.rnd.integerInRange(20, 550), 'coin');
    coin.anchor.setTo(0.5, 0.5);

    player = this.add.sprite(400, 300, 'player');
    player.anchor.setTo(0.5, 0.5);
    player.scale.x = 1.25;
    player.scale.y = 1.25;

    enemy = this.add.sprite(this.rnd.integerInRange(20, 780), this.rnd.integerInRange(20, 200), 'enemy');
    enemy.anchor.setTo(0.5, 0.5);
    enemy.scale.x = 0.8;
    enemy.scale.y = 0.8;

    player.animations.add('idle', [0,1], 1, true);
    player.animations.add('jump', [2], 1, true);
    player.animations.add('run', [3,4,5,6,7,8], 7, true);

    this.physics.arcade.enable(player);
    this.physics.arcade.enable(coin);
    this.physics.arcade.enable(enemy);

    player.body.collideWorldBounds = true;
    enemy.body.collideWorldBounds = true;

    enemy.body.velocity.x = game.rnd.integerInRange(125, 175) * game.rnd.sign();
    enemy.stepCount = game.rnd.integerInRange(0, stepLimit);

    helpbg = this.add.sprite(0, 0, 'helpbg');
    helpbg.visible = false;

    newgamebg = this.add.sprite(0, 0, 'newgame');
    newgamebg.visible = false;

    controls = {
      right: this.input.keyboard.addKey(Phaser.Keyboard.D),
      left: this.input.keyboard.addKey(Phaser.Keyboard.A),
      up: this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR),
      help: this.input.keyboard.addKey(Phaser.Keyboard.H),
      newgame: this.input.keyboard.addKey(Phaser.Keyboard.G),
      no: this.input.keyboard.addKey(Phaser.Keyboard.N),
      yes: this.input.keyboard.addKey(Phaser.Keyboard.Y),
      quit: this.input.keyboard.addKey(Phaser.Keyboard.Q),
    };

    scoreString = 'Score: ';
    scoreText = this.add.text(10, 10, scoreString + score, { font: '24px Arial', fill: 'black' });

    healthString = 'Lives: ';
    healthText = this.add.text(700, 10, healthString + health, { font: '24px Arial', fill: 'black' });

    coinfx = game.add.audio('coinfx');
    hurtfx = game.add.audio('hurtfx');
    gameoverfx = game.add.audio('gameoverfx');
    background = new Phaser.Sound(game,'background',1,true);
    coinfx.volume = .25;

    background.play();
  },

  update:function(game){
    this.physics.arcade.collide(player, layer);
    this.physics.arcade.collide(coin, layer);
    this.physics.arcade.collide(enemy, layer);

    player.body.velocity.x = 0;

    enemy.body.bounce.x = 1;
    enemy.stepCount++;
    if (enemy.stepCount > stepLimit) {
      enemy.body.velocity.x *= -1;
      enemy.body.velocity.y = -800;
      enemy.stepCount = 0;
    }

    if(enemy.y > 600)
    {
      enemy.reset(this.rnd.integerInRange(20, 780), this.rnd.integerInRange(20, 550));
      enemy.body.velocity.x = this.rnd.integerInRange(125, 175) * this.rnd.sign();
      enemy.stepCount = this.rnd.integerInRange(0, stepLimit);
    }

    if(player.y > 600)
    {
      health-=1;
      healthText.text = healthString + health;
      player.reset(400, 300);
      hurtfx.play();
      if(health < 1){
        gameoverfx.play();
        this.state.start('GameOver');
        background.stop();
        health = 3;
      }
    }

    if(coin.y > 600)
    {
      coin.kill();
      coin.reset(this.rnd.integerInRange(20, 780), this.rnd.integerInRange(20, 550));
    }

    if(controls.right.isDown){
      player.animations.play('run');
      player.scale.setTo(1.25, 1.25);
      player.body.velocity.x += playerSpeed;
    }
    if(controls.left.isDown){
      player.animations.play('run');
      player.scale.setTo(-1.25, 1.25);
      player.body.velocity.x -= playerSpeed;
    }
    if(controls.up.isDown && (player.body.onFloor() || player.body.touching.down) && this.time.now > jumpTimer){
      player.body.velocity.y = -575;
      jumpTimer = this.time.now + 750;
      player.animations.play('jump');
    }
    if(controls.newgame.isDown){
      newgamebg.visible = true;
      this.game.physics.arcade.isPaused=true;
    }
    if(controls.no.isDown){
      newgamebg.visible = false;
      this.game.physics.arcade.isPaused=false;
    }
    if(controls.yes.isDown){
        this.game.physics.arcade.isPaused=false;
        background.stop();
        health = 3;
        this.state.start("Level");
      }

    if(controls.help.isDown){
      helpbg.visible = true;
      this.game.physics.arcade.isPaused=true;
    }

    if(controls.quit.isDown){
      background.stop();
      health = 3;
      this.state.start("MainMenu");
    }

    this.input.keyboard.onDownCallback = function() {
      helpbg.visible = false;
      this.game.physics.arcade.isPaused=false;
    };

    if(player.body.velocity.x == 0 && player.body.velocity.y == 0){
      player.animations.play('idle');
    }

    this.physics.arcade.overlap(coin, player, getCoin, null, this);
    this.physics.arcade.overlap(enemy, player, loseHealth, null, this);

    if(coinCheck == false)
    {
      coin.reset(this.rnd.integerInRange(20, 780), this.rnd.integerInRange(20, 550));
      coin.body.gravity.y = 200;
      coinCheck = true;
    }

    function getCoin(coin, player){
      coin.kill();
      score+=10;
      scoreText.text = scoreString + score;
      coinCheck = false;
      coinfx.play();
    }

    function loseHealth(){
      health-=1;
      healthText.text = healthString + health;
      player.reset(400, 300);
      enemy.reset(this.rnd.integerInRange(20, 780), this.rnd.integerInRange(20, 550));
      enemy.body.velocity.x = this.rnd.integerInRange(125, 175) * this.rnd.sign();
      enemy.stepCount = this.rnd.integerInRange(0, stepLimit);
      hurtfx.play();
      if(health < 1){
        background.stop();
        gameoverfx.play();
        this.state.start('GameOver');
        health = 3;
      }
    }

  }

};
