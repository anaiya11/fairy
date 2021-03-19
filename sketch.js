var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;
var world, engine;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	//fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);
	// fairyVoice.play();

	fairy = createSprite(130, 420);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	
	engine = Engine.create();
	world = engine.world;
	World.add(world, starBody);
	Engine.run(engine);

}


function draw() {
  background(bgImg);
  keyPressed();
  fairy.velocityX = 0

  Engine.update(engine);
  star.x = starBody.position.x
  star.y = starBody.position.y 
  ellipseMode(RADIUS);
  ellipse(starBody.position.x, starBody.position.y,25,25)
  
  if (starBody.position.y>420 && star.y>420 ){
Matter.Body.setStatic(starBody,true)
  }

  drawSprites();

}

function keyPressed() {
	if (keyCode === LEFT_ARROW){
		fairy.velocityX = -7
	}
	else if (keyCode === RIGHT_ARROW){
		fairy.velocityX = 7
	}
	else if (keyCode === DOWN_ARROW) {
		//World.add(world,star)
		//starBody.isStatic = false;
		//starBody.velocityY = -0.1;
Matter.Body.setStatic(starBody,false)

		
	}
	
	
}
