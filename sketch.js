var bullet1, thickness ;
var wall, speed,weight;


function setup() {
  createCanvas(1600,400);
 
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83)
  fill(80,80,80)
  wall1=createSprite(1060,45,thickness,height/2);

  

 bullet1 = createSprite(100,45,20,10);

 
bullet1.velocityX =speed;





  

}
function draw() {

background("black");
  
  
  if(wall1.x-bullet1.x < (bullet1.width+wall1.width)/2){
  bullet1.velocityX=0;
  var deformation=0.5 * weight * speed* speed/22509;
  if(deformation>180){
    
  bullet1.shapeColor=color(255,0,0);
    
}
if(deformation>100 && deformation<180){
  
  bullet1.shapeColor=color(96,255,128);
}
if(deformation<100) {
  
  bullet1.shapeColor=color(80,208,255);
  
 } 

}

drawSprites();
}
