class Paper{
    constructor(x,y,radius){
        var options = {
             isStatic:false,
             restitution:0.3,
             friction:0.5,
             density:1.2
         }
        this.body = Bodies.circle(x,y,radius,options);
        World.add(world,this.body);

        this.radius = radius;
        this.image = loadImage("paper.png");
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.radius*3,this.radius*3); 
    }
} 
