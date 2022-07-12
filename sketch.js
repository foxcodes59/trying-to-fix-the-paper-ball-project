
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground
var leftwall
var rightwall

var ball

var daworld, daengine

function preload()
{
 


}

function setup() {
	createCanvas(800, 700);
	daengine=Engine.create()
	daworld = daengine.world;
	
	var ball_options={
isStatic:false,
restitution:0.3,
friction:0,
density:1.2,
}

	

	//Create the Bodies Here.
	ball = Bodies.circle(100,100,25,ball_options)

 ground = new Ground (200,390,1500,20)
rightwall = new Ground(550,350,20,100)
leftwall = new Ground(700,350,20,100)

	
World.add(daworld,ball)


Engine.run(daengine);
  
}


function draw() {
  rectMode(CENTER);
ellipseMode(CENTER) 
  background(0);
  
ellipse(ball.position.x,ball.position.y,50)

ground.show()
rightwall.show()
leftwall.show()

if(keyCode === UP_ARROW){
launched1()

}

  drawSprites();
 
}
function launched1(){

	Matter.Body.applyForce(ball,{x:0,y:0},{x:5,y:-10})
}



