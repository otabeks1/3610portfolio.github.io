//render the canvas at 2x dpi
var canvas = document.getElementById('myCanvas');
canvas.width = 1920;
canvas.height = 816;
canvas.style.width = "1000px";
canvas.style.height = "408px";
//rescale the grid system for 2xdpi
var ctx = canvas.getContext('2d');
ctx.scale(2, 2);

//start drawing the scene
var canvasElement = document.querySelector("#myCanvas");
var ctx = canvasElement.getContext("2d");

var skyY = 100;
var skyYDirection = 1;

function drawsky() {
    //generate the sky gradient
    var sky = ctx.createLinearGradient(0, skyY, 0, 0);
    sky.addColorStop(0, "#a7bde0");
    sky.addColorStop(1, "#3c68b1");

    //draw the sky
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, 960, 408);
}

function drawcloud(){
  //draw the clouds
  ctx.beginPath();
ctx.moveTo(170, 80);
ctx.bezierCurveTo(130, 100, 130, 150, 230, 150);
ctx.bezierCurveTo(250, 180, 320, 180, 340, 150);
ctx.bezierCurveTo(420, 150, 420, 120, 390, 100);
ctx.bezierCurveTo(430, 40, 370, 30, 340, 50);
ctx.bezierCurveTo(320, 5, 250, 20, 250, 50);
ctx.bezierCurveTo(200, 5, 150, 20, 170, 80);
ctx.closePath();
ctx.lineWidth = 2;
ctx.fillStyle = '	rgb(255, 255, 255)';
ctx.fill();


}

function drawground() {
    //draw the ground
    ctx.fillStyle = "#66FF66";
    ctx.fillRect(0, 297, 960, 111);
}
function drawhouse(){

  //draw house
//draw rectangle
ctx.beginPath();
ctx.rect(5, 220, 160, 100);
ctx.stroke();
ctx.closePath();
ctx.fillStyle = "#4A646C";
ctx.fill();

  // Draw roof

  ctx.beginPath();
  ctx.moveTo(5,220);
  ctx.lineTo(167,220);
  ctx.lineTo(83.5,160,);
  ctx.closePath();

  ctx.fillStyle="#FBE870";
  ctx.fill();

  //windows left
  ctx.fillStyle="white";
  ctx.fillRect(20,240,37,52);
  ctx.fillStyle="#0000FF";
  ctx.fillRect(24,243,13,23);
  ctx.fillRect(41,243,13,23);
  ctx.fillRect(41,268,13,21);
  ctx.fillRect(24,268,13,21);

  // windows Right
  ctx.fillStyle="white";
  ctx.fillRect(113,240,37,52);
  ctx.fillStyle="#0000FF";
  ctx.fillRect(117,243,13,23);
  ctx.fillRect(134,243,13,23);
  ctx.fillRect(134,268,13,21);
  ctx.fillRect(117,268,13,21);

  //door
  ctx.fillStyle = "#754719";
  ctx.fillRect(71,260,30,60);

  //door knob
  ctx.beginPath();
  ctx.fillStyle = "#F2F2F2";
  ctx.arc(97,290,3,0,2*Math.PI);
  ctx.fill();
  ctx.closePath();
}

function drawmountain1() {
    //draw mountain1
    ctx.beginPath();
    ctx.moveTo(516, 297);
    ctx.lineTo(595, 297);
    ctx.lineTo(632, 182);
    ctx.closePath();
    //fill
    ctx.fillStyle = "#50BFE6";
    ctx.fill();
    //wallb
    ctx.beginPath();
    ctx.moveTo(595, 297);
    ctx.lineTo(764, 297);
    ctx.lineTo(632, 182);
    ctx.closePath();
    //fill
    ctx.fillStyle = "#5DADEC";
    ctx.fill();
}

function drawmountain2() {
    //draw mountain2
    ctx.beginPath();
    ctx.moveTo(322, 297);
    ctx.lineTo(410, 297);
    ctx.lineTo(497, 100);
    ctx.closePath();
    //fill
    ctx.fillStyle = "#50BFE6";
    ctx.fill();
    //wallb
    ctx.beginPath();
    ctx.moveTo(410, 297);
    ctx.lineTo(695, 297);
    ctx.lineTo(497, 100);
    ctx.closePath();
    //fill
    ctx.fillStyle = "#5DADEC";
    ctx.fill();
}

function drawmountain3() {
    //draw mountain3
    ctx.beginPath();
    ctx.moveTo(179, 297);
    ctx.lineTo(245, 297);
    ctx.lineTo(324, 122);
    ctx.closePath();
    //fill
    ctx.fillStyle = "#50BFE6";
    ctx.fill();
    //wallb
    ctx.beginPath();
    ctx.moveTo(245, 297);
    ctx.lineTo(541, 297);
    ctx.lineTo(324, 122);
    ctx.closePath();
    //fill
    ctx.fillStyle = "#5DADEC";
    ctx.fill();
}

function clearCanvas() {
    //clear the canvas
    ctx.clearRect(0, 0, 960, 408);
}

function drawsun(x, y) {
    //draw the sun
    ctx.beginPath();
    ctx.arc(x, y, 80, 0, 2 * Math.PI, false);
    ctx.fillStyle = "yellow";
    ctx.fill();
}

var sunX = 700;
var sunY = 100;




//render the scene

function render() {
    //clear canvas
    clearCanvas();
    drawsky();
    drawsun(sunX, sunY);
    drawground();
    drawhouse();
    drawmountain1();
    drawmountain2();
    drawmountain3();
    drawcloud();

}

render();
