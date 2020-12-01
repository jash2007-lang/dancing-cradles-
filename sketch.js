
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800,700);
    

	engine = Engine.create();
	world = engine.world;
  ground = new Ground(400,100,300,10)
	//Create the Bodies Here.
    bob1 = new Bob(300,500,25)
    bob2 = new Bob(350,500,25)
    bob3 = new Bob(400,500,25)
    bob4 = new Bob(450,500,25)
    bob5 = new Bob(500,500,25)
    chain = new Chain(bob1.body,ground.body)
    chain1 = new Chain(bob2.body,ground.body)
    chain2 = new Chain(bob3.body,ground.body)
    chain3 = new Chain(bob4.body,ground.body)
    chain4 = new Chain(bob5.body,ground.body)
		Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display()
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  chain.display()
  chain1.display()
  chain2.display()
  chain3.display()
  chain4.display()

  
  drawSprites();
 
}

function keyPressed(){ 
if(keyCode === UP_ARROW) 
{ Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-50, y: -45})
   } 
  }

