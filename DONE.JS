const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var ball1, ball2, ball3, ball4, ball5;
var rope1, rope2, rope3, rope4, rope5;
var world;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

//	var ball_options = {

//		restitution: 0.1
//	}

	ball1 = Bodies.circle(320,250,20, restitution=0.9);
	World.add(world, ball1);
	ball2 = Bodies.circle(360,250,20, restitution= 0.1);
	World.add(world, ball2);
	ball3 = Bodies.circle(400,250,20, restitution= 0.1);
	World.add(world, ball3);
	ball4 = Bodies.circle(440,250,20, restitution=0.1);
	World.add(world, ball4);
	ball5 = Bodies.circle(480,250,20, restitution= 0.9);
	World.add(world, ball5);

	rope1 = Matter.Constraint.create({
		pointA:{x:320,y:100},
		bodyB:ball1,
		pointB:{x:0,y:0},
		length:200,
		stiffness:0.1
	});

	World.add(world,rope1);

	rope2 = Matter.Constraint.create({
		pointA:{x:360,y:100},
		bodyB:ball2,
		pointB:{x:0,y:0},
		length:200,
		stiffness:0.1
	});

	World.add(world,rope2);

	rope3 = Matter.Constraint.create({
		pointA:{x:400,y:100},
		bodyB:ball3,
		pointB:{x:0,y:0},
		length:200,
		stiffness:0.1
	});

	World.add(world,rope3);

	rope4 = Matter.Constraint.create({
		pointA:{x:440,y:100},
		bodyB:ball4,
		pointB:{x:0,y:0},
		length:200,
		stiffness:0.1
	});

	World.add(world,rope4);

	rope5 = Matter.Constraint.create({
		pointA:{x:480,y:100},
		bodyB:ball5,
		pointB:{x:0,y:0},
		length:200,
		stiffness:0.1
	});

	World.add(world,rope5);

	

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
push();
strokeWeight(2);
stroke(100);
line(rope1.pointA.x,rope1.pointA.y, ball1.position.x,ball1.position.y);
line(rope2.pointA.x,rope2.pointA.y, ball2.position.x,ball2.position.y);
line(rope3.pointA.x,rope3.pointA.y, ball3.position.x,ball3.position.y);
line(rope4.pointA.x,rope4.pointA.y, ball4.position.x,ball4.position.y);
line(rope5.pointA.x,rope5.pointA.y, ball5.position.x,ball5.position.y);
pop();
  
  //create ellipse shape for multiple bobs here

 ellipse(ball1.position.x,ball1.position.y,40);
 ellipse(ball2.position.x,ball2.position.y,40);
 ellipse(ball3.position.x,ball3.position.y,40);
 ellipse(ball4.position.x,ball4.position.y,40);
 ellipse(ball5.position.x,ball5.position.y,40);

}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed()
{
	if(keyCode==UP_ARROW)
	{
		Matter.Body.applyForce(ball1, {x:0,y:0},{x:0.05,y:0});
	}
}
