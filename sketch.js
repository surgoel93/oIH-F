var treeIMG, treeSprite;
var groundSprite;
var boy;
var mang1,mang2;
var shot;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

 

function preload()
{
treeIMG=loadImage("pictures/pluckingmangoes/tree.png")	
}

function setup() {
	createCanvas(1350, 650);
	rectMode(CENTER);

groundSprite=createSprite(675,630,1350,200);
groundSprite.shapeColor=color(rgb(169,64,100));


	treeSprite=createSprite(1000,250,10,10);
	treeSprite.addImage(treeIMG);
	treeSprite.scale=0.5;

	
engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

boy = new Boy(300,500,100,150);

mang1 = new Mango(1000,200,50);
mang2 = new Mango(1200,100,50);
mang3 = new Mango(1030,200,50);
mang4 = new Mango(1220,100,50);
mang5 = new Mango(1100,150,50);
mang6 = new Mango(900,200,50);
mang7 = new Mango(800,250,50);
mang8 = new Mango(950,50,50);
mang9 = new Mango(920,40,50);
mang10 = new Mango(750,200,50);

rock = new Stone(240,445,30);

spring= new Sling(rock.body,{x:240,y:445});
	//Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(rgb(255,228,225));
  Engine.update(engine);
  
  drawSprites();

  mang1.display();
  mang2.display();
  mang3.display();
  mang4.display();
  mang5.display();
  mang6.display();
  mang7.display();
  mang8.display();
  mang9.display();
  mang10.display();

  boy.display();
  rock.display();
  spring.display();

  detectollision(rock,mang1);
  detectollision(rock,mang2);
  detectollision(rock,mang3);
  detectollision(rock,mang4);
  detectollision(rock,mang5);
  detectollision(rock,mang6);
  detectollision(rock,mang7);
  detectollision(rock,mang8);
  detectollision(rock,mang9);
  detectollision(rock,mang10);
  

  }

function mouseDragged() {
Matter.Body.setPosition(rock.body,{x:mouseX,y:mouseY});

}

function mouseReleased(){
spring.fly();

}

function detectollision(lstone,lmango){
mangoBodyPosition=lmango.body.position
stoneBodyPosition=lstone.body.position

var distance=dist(stoneBodyPosition.x ,stoneBodyPosition.y , mangoBodyPosition.x ,mangoBodyPosition.y )

if(distance<+lmango.radius+lstone.radius)
{
  Matter.Body.setStatic(lmango.body,false);
}
}


function keyPressed(){
  if(keyCode===32) {
    spring.attach(rock.body);  
  }  
 }
 


