
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, basket1, ground1, basket2, basket3;

function preload()
{
	
}

function setup() {
	createCanvas(990, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new Ground(495,650,990,20);
	paper = new Paper(100,50);

	basket1 = new Basket(750,640,200,20);
	basket2 = new Basket(640,550,20,200);
	basket3 = new Basket(860,550,20,200);

  
}


function draw() {
  //rectMode(CENTER);
  background(255,248,220);

 Engine.update(engine);

fill("black");
textSize("30");
text("use the up arrow key to make the ball go up and the down arrow key to make it go down", 100,100);

  
  ground1.display();
  paper.display();
  basket1.display();
  basket2.display();
  basket3.display();
 

 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position,{x:650, y:-700});
	}
	/*else if(keyCode === RIGHT_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position,{x:5, y:0});
	}*/
}


