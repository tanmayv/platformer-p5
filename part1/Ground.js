function Ground(x,y, length = 1, depth = 1){
    var img = loadImage("assets/grassMid.png");
    var position = gridToWorldSpace(x,y);
    
    x = position.x;
    y = position.y;
    // convert length and depth from grid space to world space.
    length = x + (length-1) * 50;
    depth = y + (depth-1)  * 50;
    
    for(var i = x; i <=length; i+= 50){
        for(var j = y; j<=depth; j+=50){
            var sprite = createSprite(i,j,70,70);
            sprite.addImage(img);
            sprite.scale = 0.72;
        }
    }

    this.sprite = createSprite(x + (length-x)/2,y + (depth-y)/2,0, 0);
    this.sprite.immovable =true;
    this.sprite.setCollider("rectangle",0,0,length-x + 50,depth-y + 50);
    this.sprite.debug = true;
}