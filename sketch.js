const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder, ball, ground;
var stand1, stand2;
var box1, block;
function preload(){
  papaImg = loadImage("father.PNG");
  childImg = loadImage("child.PNG");
}

function setup() {
  createCanvas(2400, 600);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  block1 = createSprite(2300, 440);
  ground = new Base();
  stand1 = new Ground(390, 300, 250, 10);
  stand2 = new Ground(700, 200, 200, 10);
  stand3 = new Ground(900, 100, 250, 10);
  stand4 = new Ground(1200, 300, 250, 10);
  stand5 = new Ground(1400, 400, 250, 10);
  stand6 = new Ground(1700, 500, 250, 10);
  stand7 = new Ground(2300, 500, 250, 10);
  block = new Block(100, 580, 40, 40);
  box1 = createSprite(390, 275, 40, 40);
  box1.shapeColor = "red";
  box2 = createSprite(700, 175, 40, 40);
  box2.shapeColor = "red";
  box3 = createSprite(900, 75, 40, 40);
  box3.shapeColor = "red";
  box4 = createSprite(1200, 275, 40, 40);
  box4.shapeColor = "red";
  box5 = createSprite(1400, 375, 40, 40);
  box5.shapeColor = "red";
  box6 = createSprite(1700, 475, 40, 40);
  box6.shapeColor = "red";
  
  fill("yellow");
}
function draw() {
  background(153, 217, 234);
 text("END", 2300, 380);

  block1.display();
  ground.display();
  stand1.display();
  stand2.display();
  stand3.display();
  stand4.display();
  stand5.display();
  stand6.display();
  stand7.display();
  block.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  imageMode(CENTER);
  image(papaImg, block1.position.x, block1.position.y, 100, 100);
}
