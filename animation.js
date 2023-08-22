
const { createCanvas } = require("canvas") ;

const canvas = createCanvas(640,480)
const context = canvas.getContext("2d");

let speed = 4;
let radius= 40;
let position = 0;
let moveSpeed = speed;

function moveBall(){
    if(position+radius > 640){
        moveSpeed = -speed;
    }
    else if(position - radius < 0){
        moveSpeed = speed;
    }
    position += radius ;
}
function drawBall(){
    context.clearRect(0,0,640,480);
    context.fillStyle = "#62687f";
    context.beginPath();
    context.arc(position,50,radius,0,2*Math.PI);
    context.fill();
}

function animate(){
    moveBall();
    drawBall();
    setImmediate(() => {
        animate();
      });
    }
    
    animate();