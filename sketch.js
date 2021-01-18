var ground;
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=250;

var score=0;

var particle;
var gameState="play";

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function preload()
{
	
}

function setup() {
	createCanvas(650,650);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,645,900,10);
	
	for(var i = 0; i<=width; i = i +120){
        divisions.push(new Division(i, height-divisionHeight/2, 5,divisionHeight));
	  }
	  
	for (var r =25; r <=width; r=r+50){
		plinkos.push(new Plinko(r,75));
	}

	for (var r =10; r <=width-10 ; r=r+50){
		plinkos.push(new Plinko(r,175));
	}

	for (var r =20; r <=width-10 ; r=r+50){
		plinkos.push(new Plinko(r,275));
	}

	if(particle!= null){
		particle.display();
	
		if(particle.body.position.y>760){
		  if(particle.body.position.x<300){
			 score=score+500;

			// particle=null;

			 if(score>=5) gameState="end";
			 
		  } 
		   
		}
	}  

	
	if(particle!= null){
		particle.display();
	
		if(particle.body.position.y>760){
		  if(particle.body.position.x>301 && particle.body.position.x<600){
			
			score=score+100;
           // particle=null;
            if(score>=5) gameState="end";
			 
		  } 
		   
		}
	}  

	if(particle!= null){
		particle.display();
	
		if(particle.body.position.y>760){
		  if(particle.body.position.x>601 && particle.body.position.x<900){
			
			score=score+200;
           // particle=null;
            if(score>=5) gameState="end";
			 
		  } 
		   
		}
	}

	  Engine.run(engine);
  }  
  	
	

	
  
 


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);

  for(var i = 0; i< divisions.length; i++){
  	 divisions[i].display();
   }

   for(var r=0; r<plinkos.length; r++){
	   plinkos[r].display();
   }

   if(frameCount%60===0){
	particles.push(new Particle(random(width/2-10,width/2+10),10,10));
   }
   
   for(var k=0; k<particles.length; k++){
	particles[k].display();
} 


  


  ground.display();
  mousePressed();

  drawSprites();

  fill("white");
  stroke("white");
  strokeWeight(1);
  text("Score : "+score,20,30);


 
}
function mousePressed(){
	 if(gameState !== "end"){
	  score++;
	  particle = new Particle(mouseX,10,10,10);
	 }
	  }


