const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies


var engine,world,ball,ground
function setup() {
  createCanvas(800,400);
var groundOptions ={
isStatic: true
}

var ballOptions ={
restitution: 1
}

  engine = Engine.create();
  world = engine.world;
  ball = Bodies.circle(200,50,40,ballOptions);
  ground = Bodies.rectangle(400,360,800,5,groundOptions);


  World.add(world,ball);
 World.add(world,ground);
}

function draw() {
  background(0);
  

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,5);
  circle(ball.position.x,ball.position.y,80);
  Engine.update(engine);

}