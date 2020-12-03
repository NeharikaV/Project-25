class Ground{
    constructor(x,y,width,height){
        this.body = Bodies.rectangle(x,y,width,height,{isStatic: true});
        World.add(world,this.body); 
        this.width = width;
        this.height = height;
    }

    display(){
        var p = this.body.position;

        rectMode(CENTER);
        fill("purple"); 
        rect(p.x,p.y,this.width,this.height);
    }
}