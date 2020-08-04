var helicopterIMG, helicopterSprite, packageSprite,packageIMG,b,h;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
Lis=[]

function preload()
{
	m=loadImage("OIP.jpg")
}

function setup() {
	createCanvas(displayWidth*5,displayHeight*5);
	engine = Engine.create();
  world = engine.world;
  a=createSprite(300,300,200,200)
  a.addImage("cge",m)
  a.scale=.3

	

  Engine.run(engine);


button=createButton("play")
  buttonm=createButton("stop")
  button.position(750,300)
  buttonm.position(750,150)
   button.mousePressed(()=>{
    a.velocityX=5
  
   })
  }


function draw() {
  rectMode(CENTER);
  background("white");


 

  drawSprites();
  

 
}



