var width = 800,
    height = 500,
    gridSize = 50;

var player;
var currentLevel;
function setup(){
    //creating canvas object on which everyhting will be drawn.
    //this works as our play area.
    createCanvas(800,500);
    //let create a player object at 0,0 in our grid space.
    player = new Player(0,1);
    currentLevel = new Level1();
    currentLevel.generate();
}

function draw(){
    //setting skyblue background on each draw call.
    background(176,224,230);
    currentLevel.update();
    player.sprite.collide(currentLevel.terrainGroup);
    player.update();
    //p5.play function call which draws all the sprites created.
    drawSprites();
}

function gridToWorldSpace(x,y){
    x = x*gridSize + gridSize/2;
    y = height - y*gridSize - gridSize/2;
    return {
        'x' : x, 'y' : y
    }
}