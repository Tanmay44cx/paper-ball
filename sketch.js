
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin;
var ballImage;


function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ball = new Ball (200,450,20);	
//ballImage=loadImage("sprites/paper.png");
//ball=addImage(ballImage);
dustbin = new Dustbin(1000,670);
ground = new Ground (width/2,690,1600,20);
	Engine.run(engine);
 
}


function draw() {
  rectMode(CENTER);
  background(100);
  dustbin.display();
  ground.display();
  ball.display();
 }


 function keyPressed (){

if (keyCode === UP_ARROW){

  Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});

}
   

 }
