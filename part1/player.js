var movementSpeed = 0.35,
playerFriction = 0.1,
jumpSpeed = 20,
gravity = 1; 

function Player(x,y){
var position = gridToWorldSpace(x,y);
this.sprite = createSprite(position.x,position.y,64,92);
this.sprite.scale = 0.55;
this.sprite.addAnimation("stand", "assets/p1_stand.png");
this.sprite.addAnimation("walk", "assets/p1_walk0001.png","assets/p1_walk0002.png","assets/p1_walk0003.png"
,"assets/p1_walk0004.png","assets/p1_walk0005.png","assets/p1_walk0006.png"
,"assets/p1_walk0007.png","assets/p1_walk0008.png","assets/p1_walk0009.png"
,"assets/p1_walk0010.png","assets/p1_walk0011.png");
this.sprite.friction = playerFriction;
this.sprite.setCollider("rectangle",0,0,64,92);

//to make sure player is not able jump in air.
this.inAir = false;

this.update = function(){
    if(!this.sprite.touching.bottom){
        this.sprite.addSpeed(gravity,90);
    }else{
        //player is touching the ground
        this.inAir = false;   
    }

    this.handleInputs();
}
this.moveLeft = function(mult = 1){
    this.sprite.mirrorX(-1);
    if(this.sprite.getAnimationLabel()=="stand")
        this.sprite.changeAnimation("walk");
    this.sprite.addSpeed(movementSpeed*mult,-180);
}
this.moveRight = function(mult = 1){
    console.log(mult)
    this.sprite.mirrorX(1);
    if(this.sprite.getAnimationLabel()=="stand")
        this.sprite.changeAnimation("walk");
    this.sprite.addSpeed(movementSpeed*mult,0);
}

this.jump = function(){
    if(!this.inAir){
        this.sprite.addSpeed(jumpSpeed,-90);
        this.inAir = true;
    }
}

this.handleInputs = function(){
    if(keyDown('A'))
        this.moveLeft();
    if(keyDown('D'))
        this.moveRight();
    //keyWentDown() returns true only for the first when key is pressed.
    //keyDown() retruns true for each frame in which the key is pressed.
    if(keyWentDown(' ')){
        this.jump();
    }
}
}