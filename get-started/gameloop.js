var width = 800;
var height = 500;

function setup(){
    //creating canvas object on which everyhting will be drawn.
    //this works as our play area.
    createCanvas(800,500);
}

function draw(){
    //setting skyblue background on each draw call.
    background(176,224,230);
    
    //p5.play function call which draws all the sprites created.
    drawSprites();
}