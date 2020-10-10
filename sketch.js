
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, roof, string1;
var bob2, string2;
var bob3, string3;
var bob4, string4;
var bob5, string5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof=new Roof(450,350, width-550, 25);
	bob1=new Bob(350, 350, 23);
	string1=new Line(bob1.body, {x:350,y:350});
	bob2=new Bob(400-5, 350, 20);
	string2=new Line(bob2.body, {x:400-5,y:350});
	bob3=new Bob(450-10, 350, 20);
	string3=new Line(bob3.body, {x:450-10,y:350});
	bob4=new Bob(500-15, 350, 20);
	string4=new Line(bob4.body, {x:500-15,y:350});
	bob5=new Bob(550-20, 350, 20);
	string5=new Line(bob5.body, {x:550-20,y:350});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  roof.display();
  bob1.display();
  string1.display();
  bob2.display();
  string2.display();
  bob3.display();
  string3.display();
  bob4.display();
  string4.display();
  bob5.display();
  string5.display();
  drawSprites();
 action();
}

function action(){
	if(keyCode==UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-5,y:-0});
	}
	if(keyCode==DOWN_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:2,y:-0});
	}
	if(keyCode==LEFT_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:0,y:-0});
	}
}

