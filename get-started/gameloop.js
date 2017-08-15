var width = 800,
    height = 500,
    gridSize = 50;

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