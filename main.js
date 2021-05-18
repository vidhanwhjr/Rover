var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

Rover_width = 80;
Rover_height = 90;

var background_img = "mars.jpg";
var rover_img = "rover.png";

rover_x = 0;
rover_y = 0;

function add(){
    background_img2 = new Image();
    background_img2.onload = upbg();
    background_img2.src = background_img;
    rover_img2 = new Image();
    rover_img2.onload = uprover();
    rover_img2.src = rover_img;
}

function upbg(){
    ctx.drawImage(background_img2, 0, 0 , canvas.width, canvas.height )
}

function uprover(){
    ctx.drawImage(rover_img2, rover_x, rover_y , Rover_width, Rover_height )
}

window.addEventListener("keydown", My_keydown);

function My_keydown(e){
    var keypress = e.keyCode;
    if(keypress=='37'){
        console.log("left");
      }
      if(keypress=='38'){
        console.log("up");
      }
      if(keypress=='39'){
        console.log("right");
      }
      if(keypress=='40'){
        console.log("down");
      }
}