

var divisions=[]
var plinkos=[];
var particles=[];
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;

function preload()
{
	
}


var divisionHeight=300;
function setup() {
	createCanvas(500, 800);

	engine = Engine.create();
	world = engine.world;
	
	for (var k = 0; k <width; k = k + 80) {
		divisions.push(new Divisions(k, height-divisionHeight/2, 10,divisionHeight))
	}
	for(var j = 40; j <=width-10;j=j+50) 
	{
		plinkos.push(new Plinko(j,75));
	}
	for(var j = 15; j <=width-10; j=j+50){
		plinkos.push(new Plinko(j,175))
	}
	for(var j = 65; j <=width-10; j=j+50){
		plinkos.push(new Plinko(j,275))
	}
	for(var j = 90; j <=width-10; j=j+50){
		plinkos.push(new Plinko(j,375))
	}
	
	ground=new Ground(0,700,10000,10);
	
	


	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  if(frameCount%60===0){
	particles.push(new Particle(random(width/2-10,width/2+10), 10,10))
}
  ground.display();
  

  for (var k=0; k < divisions.length; k++){
	  divisions[k].display();
  }
  for(var j =0; j < plinkos.length; j++){
	plinkos[j].display();
}
for (var t=0; t < particles.length; t++){
	particles[t].display();
}

  drawSprites();
 
}



