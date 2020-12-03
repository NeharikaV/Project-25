var box1,box2,box3,paper,ground,aniBox,box4,engine,world;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	aniBox = loadImage("dustbingreen.png");
}




function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	box1 = new Box (570,650,200,20);
    box2 = new Box (660,610,20,100);
	box3 = new Box (470,610,20,100);
	//box4 = new AniBox (570,610,235,100); 
	
	
	
	paper = new Paper (160,600,30);

	ground = new Ground (200,670,10000,20);
	


  
}


function draw() {
  background(255,255,255);
  Engine.update(engine);


  box1.display();
  box2.display();
  box3.display();
  paper.display();
  ground.display();
  //box4.display();
imageMode(CENTER);
image(aniBox,570,610,235,100);
  
  

 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:110,y:-110});
	}
}



