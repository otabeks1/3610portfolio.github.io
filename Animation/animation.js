"use strict";

var Scene = {
  canvas : undefined,
  canvasContext : undefined,
  sprite1: undefined,
  background: undefined
};

Scene.start = function () {
  Scene.canvas = document.getElementById("myCanvas");
  Scene.canvasContext = Scene.canvas.getContext("2d");

  Scene.sprite1 = sprite1;
  Scene.sprite1.img = new Image();
  Scene.sprite1.img.src = Scene.sprite1.src;

  Scene.sprite2 = sprite2;
  Scene.sprite2.img = new Image();
  Scene.sprite2.img.src = Scene.sprite2.src;

  Scene.background = new Image();
  Scene.background.src = "background.jpg";

  Scene.bubble1 = new Image();
  Scene.bubble1.src = "bubble1.jpg";

  Scene.bubble2 = new Image();
  Scene.bubble2.src = "bubble2.jpg";

  Scene.bubble3 = new Image();
  Scene.bubble3.src = "bubble3.jpg";

  Scene.bubble4 = new Image();
  Scene.bubble4.src = "bubble4.jpg";

  Scene.background.onload = function() {
    Scene.canvasContext.drawImage(Scene.background,0,0);
    Scene.sprite1.offset=-100;
    Scene.sprite2.offset=1050;
    Scene.mainLoop();
  }
};

Scene.mainLoop = function() {
    Scene.canvasContext.drawImage(Scene.background,0,0);
    Scene.update();
    Scene.draw();
    window.setTimeout(Scene.mainLoop, 500);
};

Scene.update = function () {

  // Set the location of the next frame.
    Scene.sprite1.offset+=25;
  if(Scene.sprite1.offset>900)
    Scene.sprite1.offset=-100;

    Scene.sprite2.offset-=25;
  if(Scene.sprite2.offset<50)
    Scene.sprite2.offset=1050;
};

Scene.draw = function () {
  if(Scene.sprite1.offset>250)
  {
  Scene.sprite1.frame = 3;
  Scene.canvasContext.drawImage(
    Scene.sprite1.img,
    Scene.sprite1.frames[Scene.sprite1.frame].frame.x,
    Scene.sprite1.frames[Scene.sprite1.frame].frame.y,
    Scene.sprite1.frames[Scene.sprite1.frame].frame.w,
    Scene.sprite1.frames[Scene.sprite1.frame].frame.h,
    250,
    340,
    Scene.sprite1.frames[Scene.sprite1.frame].frame.w,
    Scene.sprite1.frames[Scene.sprite1.frame].frame.h);
    Scene.canvasContext.drawImage(Scene.bubble1,300,220);
    if(Scene.sprite1.offset>475)
    {
      Scene.canvasContext.drawImage(Scene.bubble3,300,220);
    }
  }
  else {
    Scene.canvasContext.drawImage(
      Scene.sprite1.img,
      Scene.sprite1.frames[Scene.sprite1.frame].frame.x,
      Scene.sprite1.frames[Scene.sprite1.frame].frame.y,
      Scene.sprite1.frames[Scene.sprite1.frame].frame.w,
      Scene.sprite1.frames[Scene.sprite1.frame].frame.h,
      Scene.sprite1.offset,
      340,
      Scene.sprite1.frames[Scene.sprite1.frame].frame.w,
      Scene.sprite1.frames[Scene.sprite1.frame].frame.h);

  // Advance to the next frame.
  Scene.sprite1.frame++;

  // At the end of the sprite sheet, start at the first frame.
  if(Scene.sprite1.frame==Scene.sprite1.frames.length)
    Scene.sprite1.frame=1;
  }

  if(Scene.sprite2.offset<650)
  {
    Scene.sprite2.frame = 0;
    Scene.canvasContext.drawImage(
      Scene.sprite2.img,
      Scene.sprite2.frames[Scene.sprite2.frame].frame.x,
      Scene.sprite2.frames[Scene.sprite2.frame].frame.y,
      Scene.sprite2.frames[Scene.sprite2.frame].frame.w,
      Scene.sprite2.frames[Scene.sprite2.frame].frame.h,
      650,
      200,
      Scene.sprite2.frames[Scene.sprite2.frame].frame.w,
      Scene.sprite2.frames[Scene.sprite2.frame].frame.h);
      Scene.canvasContext.drawImage(Scene.bubble2,450,80);
      if(Scene.sprite2.offset<300)
      {
        Scene.canvasContext.drawImage(Scene.bubble4,450,80);
      }
  }
  else {
    Scene.canvasContext.drawImage(
      Scene.sprite2.img,
      Scene.sprite2.frames[Scene.sprite2.frame].frame.x,
      Scene.sprite2.frames[Scene.sprite2.frame].frame.y,
      Scene.sprite2.frames[Scene.sprite2.frame].frame.w,
      Scene.sprite2.frames[Scene.sprite2.frame].frame.h,
      Scene.sprite2.offset,
      200,
      Scene.sprite2.frames[Scene.sprite2.frame].frame.w,
      Scene.sprite2.frames[Scene.sprite2.frame].frame.h);

  // Advance to the next frame.
  Scene.sprite2.frame++;

  // At the end of the sprite sheet, start at the first frame.
  if(Scene.sprite2.frame==Scene.sprite2.frames.length)
    Scene.sprite2.frame=0;

  }

  };
