"use strict";

var Scene = {
  canvas : undefined,
  canvasContext : undefined,
  sprite: undefined
};

Scene.start = function () {
  Scene.canvas = document.getElementById("myCanvas");
  Scene.canvasContext = Scene.canvas.getContext("2d");
  Scene.sprite = numbers;
  Scene.sprite.img = new Image();
  Scene.sprite.img.src = Scene.sprite.src;

  Scene.sprite.img.onload = function() {
    Scene.sprite.offset=-Scene.sprite.frames[Scene.sprite.frame].frame.w;
    Scene.draw3();
  }
};


Scene.clearCanvas = function () {
  Scene.canvasContext.fillStyle = "white";
  Scene.canvasContext.fillRect(0, 0, Scene.canvas.width, Scene.canvas.height);
};

Scene.mainLoop = function() {
  document.getElementById("Start").disabled = true;
  Scene.clearCanvas();
  Scene.draw();

  if(Scene.sprite.frame == 10)
  {
    window.setTimeout(Scene.draw2, 500);

  }
  else {
    window.setTimeout(Scene.mainLoop, 500);
  }
};


Scene.draw = function () {
  Scene.canvasContext.drawImage(
    Scene.sprite.img,
    Scene.sprite.frames[Scene.sprite.frame].frame.x,
    Scene.sprite.frames[Scene.sprite.frame].frame.y,
    Scene.sprite.frames[Scene.sprite.frame].frame.w,
    Scene.sprite.frames[Scene.sprite.frame].frame.h,
    150,
    0,
    Scene.sprite.frames[Scene.sprite.frame].frame.w,
    Scene.sprite.frames[Scene.sprite.frame].frame.h);

    Scene.sprite.frame++;
  };

  Scene.draw2 = function () {
    Scene.clearCanvas();

    Scene.sprite.frame=1;

    Scene.canvasContext.drawImage(Scene.sprite.img, Scene.sprite.frames[Scene.sprite.frame].frame.x, Scene.sprite.frames[Scene.sprite.frame].frame.y, Scene.sprite.frames[Scene.sprite.frame].frame.w, Scene.sprite.frames[Scene.sprite.frame].frame.h, 50, 0, Scene.sprite.frames[Scene.sprite.frame].frame.w, Scene.sprite.frames[Scene.sprite.frame].frame.h);

    Scene.sprite.frame=0;

    Scene.canvasContext.drawImage(Scene.sprite.img, Scene.sprite.frames[Scene.sprite.frame].frame.x, Scene.sprite.frames[Scene.sprite.frame].frame.y, Scene.sprite.frames[Scene.sprite.frame].frame.w, Scene.sprite.frames[Scene.sprite.frame].frame.h, 200, 0, Scene.sprite.frames[Scene.sprite.frame].frame.w, Scene.sprite.frames[Scene.sprite.frame].frame.h);

    document.getElementById("Start").disabled = false;
  };

  Scene.draw3 = function () {
    Scene.clearCanvas();
    Scene.sprite.frame=0;
    Scene.canvasContext.drawImage(
      Scene.sprite.img,
      Scene.sprite.frames[Scene.sprite.frame].frame.x,
      Scene.sprite.frames[Scene.sprite.frame].frame.y,
      Scene.sprite.frames[Scene.sprite.frame].frame.w,
      Scene.sprite.frames[Scene.sprite.frame].frame.h,
      150,
      0,
      Scene.sprite.frames[Scene.sprite.frame].frame.w,
      Scene.sprite.frames[Scene.sprite.frame].frame.h);

      Scene.sprite.frame++;
    };
