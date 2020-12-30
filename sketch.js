
//namespacing
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World =  Matter.World;

var engine, world, ball, ground;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world; 

  var options={
    isStatic:false,
    restitution:0.5,
    friction:1.0
  }
  var groundoptions={
    isStatic:true
  }
  ball = Bodies.circle(100,100,30,options);
  World.add(world,ball);
  
  ground = Bodies.rectangle(200,390,400,20,groundoptions);
  World.add(world,ground);
  

  console.log(ball.type);
  console.log(ball.position);
}

function draw() {
  background(12,10,22); 
  Engine.update(engine); 
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,40,40);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
}