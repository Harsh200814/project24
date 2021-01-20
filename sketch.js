
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var plane,hammer,stone,rubber,sand1,sand2,sand3,sand4,sand5,sand6
sand7,sand8,sand9,iron;
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
    stone=new Stone();
	plane=new Plane();
  hammer=new Hammer();
  rubber=new Rubber();
  sand1=new Sand(300,680);
  sand2=new Sand(320,680);
  sand3=new Sand(340,680);
  sand4=new Sand(400,680);
  sand5=new Sand(540,680);
  sand6=new Sand(560,680);
  sand7=new Sand(580,680);
  sand8=new Sand(100,680);
  sand9=new Sand(130,680);
  iron=new Iron();
  Engine.run(engine);
  
}
function draw() {
  background("lightblue");
  fill("red");
  hammer.display();
  plane.display();
  stone.display();
  rubber.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();
  sand9.display();
  iron.display();
  drawSprites();
 
}



