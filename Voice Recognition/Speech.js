var c = document.getElementById("mycanvas");
var ctx = c.getContext("2d");
var elem = document.getElementById("speechButton");
var rad = 25;
var diam;
var background = "white";
var color = "black";
var trueColor;

ctx.beginPath();
ctx.arc(400, 300, rad, 0, 2 * Math.PI);
ctx.strokeStyle = color;
ctx.fillStyle = color;
ctx.fill();
ctx.stroke();
ctx.closePath();

function change() {
    if (elem.innerHTML=="Speak") {
    elem.innerHTML = "Stop";
    dictate();
      }
    else {
      elem.innerHTML = "Speak";
      recognition.stop();
      }
    }

function isColor(strColor){
      var s = new Option().style;
      s.color = strColor;
      return s.color == strColor;
}


window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
const synth = window.speechSynthesis;
const recognition = new SpeechRecognition();

const dictate = () => {
  recognition.start();
  recognition.onresult = (event) => {
    const speechToText = event.results[0][0].transcript;

    if (event.results[0].isFinal) {
      elem.innerHTML = "Speak";

      if (speechToText.includes('color')) {
        ctx.clearRect(0, 0, c.width, c.height);
        color = speechToText.split(' ')[1];
        trueColor = isColor(color);
        if(trueColor == true){
          ctx.beginPath();
          ctx.rect(0, 0, 800, 600);
          ctx.fillStyle = background;
          ctx.fill();
          ctx.closePath();
          ctx.beginPath();
          ctx.arc(400, 300, rad, 0, 2 * Math.PI);
          ctx.strokeStyle = color;
          ctx.fillStyle = color;
          ctx.fill();
          ctx.stroke();
          ctx.closePath();
        }
        else {
          ctx.beginPath();
          ctx.rect(0, 0, 800, 600);
          ctx.fillStyle = background;
          ctx.fill();
          ctx.closePath();
          ctx.beginPath();
          ctx.arc(400, 300, rad, 0, 2 * Math.PI);
          ctx.strokeStyle = "black";
          ctx.fillStyle = "black";
          ctx.fill();
          ctx.stroke();
          ctx.closePath();
        }
      };

      if (speechToText.includes('background')) {
        ctx.clearRect(0, 0, c.width, c.height);
        background = speechToText.split(' ')[1];
        trueColor = isColor(background);
        if(trueColor == true){
        ctx.beginPath();
        ctx.rect(0, 0, 800, 600);
        ctx.fillStyle = background;
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        ctx.arc(400, 300, rad, 0, 2 * Math.PI);
        ctx.strokeStyle = color;
        ctx.fillStyle = color;
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
        }
        else{
          ctx.beginPath();
          ctx.rect(0, 0, 800, 600);
          ctx.fillStyle = "white";
          ctx.fill();
          ctx.closePath();
          ctx.beginPath();
          ctx.arc(400, 300, rad, 0, 2 * Math.PI);
          ctx.strokeStyle = color;
          ctx.fillStyle = color;
          ctx.fill();
          ctx.stroke();
          ctx.closePath();
        }
      };

      if (speechToText.includes('size')) {
        diam = speechToText.split(' ')[1];
        if(diam > 300){
          speak(sizeBig);
        }
        else if(diam < 1){
          speak(sizeSmall);
        }
        else {
          ctx.clearRect(0, 0, c.width, c.height);
          rad = diam/2;
          ctx.beginPath();
          ctx.rect(0, 0, 800, 600);
          ctx.fillStyle = background;
          ctx.fill();
          ctx.closePath();
          ctx.beginPath();
          ctx.arc(400, 300, rad, 0, 2 * Math.PI);
          ctx.strokeStyle = color;
          ctx.fillStyle = color;
          ctx.fill();
          ctx.stroke();
          ctx.closePath();
        }
      };

      if (speechToText.includes('help')) {
          speak(getHelp);
      };

      if (speechToText.includes('about')) {
          speak(getAbout);
      };
    }
  }
}

const speak = (action) => {
  utterThis = new SpeechSynthesisUtterance(action());
  synth.speak(utterThis);
};

const sizeBig = () => {
  return "Size too big, the size limit is 300.";
};

const sizeSmall = () => {
  return "Size too small, the minimal size is 1.";
};

const getHelp = () => {
  return "Say color, followed by a color, to set the circle color. Say background, followed by a color, to set the background color. Say size, followed by a number from 1 to 300, to set the diameter of the circle. Say about, to hear about the program.";
};

const getAbout = () => {
  return "This program was created by Alex Jones. It is a Voice Recognition program that allows you to change the size, background, and color of the canvas on the screen.";
};

