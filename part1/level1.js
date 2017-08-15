function Level1(){
    this.terrainGroup = new Group();

    this.generate = function(){
        var ground = new Ground(0,0,7);
        this.terrainGroup.add(ground.sprite);
        ground = new Ground(9,0,7);
        this.terrainGroup.add(ground.sprite);
    }

    this.update = function(){

    }
}