
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;




function preload(){

  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

  ground = new Ground(650,590,1300,20)

  ball = new Ball(200,300,70,70)
  console.log(ball)

   block = new Block(350,590,50,50)
   block1 = new Block(350,590,50,50)
   block2 = new Block(350,590,50,50)
   block3 = new Block(350,590,50,50)
   block4 = new Block(350,590,50,50)
   block5 = new Block(350,580,50,50)
   block6 = new Block(350,580,50,50)
   block7 = new Block(400,580,50,50)
   block8 = new Block(400,580,50,50)
   block9 = new Block(400,580,50,50)
   block10 = new Block(400,580,50,50)
   block11 = new Block(450,580,50,50)
   block12 = new Block(450,580,50,50)
   block13 = new Block(450,580,50,50)
   block14 = new Block(450,580,50,50)

   sli = new Slingshot(ball.body, { x: 300, y: 250 })

  Engine.run(engine);
}

function draw() {
 background(230);

  ground.display()
  ball.display()
  
  block.display()
  block1.display()
  block2.display()
  block3.display()
  block4.display()
  block5.display()
  block6.display()
  block7.display()
  block8.display()
  block9.display() 
  block10.display()
  block11.display() 
  block12.display() 
  block13.display() 
  block14.display() 
  
 sli.display()

}