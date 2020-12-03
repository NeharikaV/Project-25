class AniBox{
    constructor(x,y,width,height){
        this.body = Bodies.rectangle(x,y,width,height,{isStatic:true});
        
        World.add(world,this.body);
        this.width = width;
        this.height = height;
        this.image = loadImage("dustbingreen.png");
        
    }
    display(){
         var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);
    }
}