document.addEventListener('DOMContentLoaded',domloaded,false);
function domloaded(){

  var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
      preload: preload,
      create: create,
      update: update
    }
  };

  var game = new Phaser.Game(config);

  function preload ()
  {
    this.load.image('pic1', 'pic1.jpg');
    this.load.image('pic2', 'pic2.png');
    this.load.image('pic3', 'pic3.png');
    this.load.image('pic4', 'pic4.png');
    this.load.image('pic5', 'pic5.png');
    this.load.image('pic6', 'pic6.png');
    this.load.image('pic7', 'pic7.png');
    this.load.image('pic8', 'pic8.png');
    this.load.image('pic10', 'pic10.png');
    this.load.image('pic11', 'pic11.png');


  }

  function create ()
  {
    var pic1 = this.add.image(400, 300, 'pic1');
    var pic2 = this.add.sprite(750, 170, 'pic2');
    var pic3 = this.add.sprite(755, 350, 'pic3');
    var pic4 = this.add.sprite(45, 212, 'pic4');
    var pic5 = this.add.sprite(45, 460, 'pic5');
    var pic6 = this.add.sprite(45, 285, 'pic6');
    var pic7 = this.add.sprite(45, 550, 'pic7');
    var pic8 = this.add.sprite(50, 50, 'pic8');
    var pic10 = this.add.sprite(755, 45, 'pic10');
    var pic11 = this.add.sprite(20, 375, 'pic11');


    pic8.setInteractive();
    pic10.setInteractive();
    pic2.setInteractive();
    pic7.setInteractive();
    pic5.setInteractive();
    pic3.setInteractive();
    pic11.setInteractive();
    pic4.setInteractive();
    pic6.setInteractive();

    this.input.setDraggable(pic8);
    this.input.setDraggable(pic10);
    this.input.setDraggable(pic2);
    this.input.setDraggable(pic7);
    this.input.setDraggable(pic5);
    this.input.setDraggable(pic3);
    this.input.setDraggable(pic11);
    this.input.setDraggable(pic4);
    this.input.setDraggable(pic6);

    this.key = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);

    this.input.on('drag', function (pointer, gameObject, dragX, dragY) {

      gameObject.x = dragX;
      gameObject.y = dragY;

    });
    }

    function update() {
      if (this.key.isDown) {
        this.scene.restart();
      }
    }
  }
