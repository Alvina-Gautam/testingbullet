var wall , thickness;
var bullet , speed , weight;

function setup() {
  createCanvas(800,400);
  
  speed=random(55,90);
  weight=random(400,1500);
  thickness=random(22,83);
  
  wall=createSprite(600, 200, thickness, 150);
  bullet=createSprite(100,200,50,10);
  
  wall.shapeColor=color(160,82,45);
  bullet.shapeColor=color(80,80,80);
}

function draw() {
  background(0,0,0); 
  
  bullet.velocityX=speed;

  if(wall.x-bullet.x < (bullet.width+wall.width)/2){
    bullet.velocityX=0
    var deformation=0.5 * weight * speed * speed/22509;
      if(deformation<10){
        bullet.shapeColor=color(255,0,0);
        wall.shapeColor=color(255,0,0);
      }
      if(deformation>10){
        bullet.shapeColor=color(0,255,0);
        wall.shapeColor=color(0,255,0);
      }
  }
  
  drawSprites();
}