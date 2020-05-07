var wall,thickness;
var bullet,speed,weight,damage;


function setup() {
  createCanvas(1600,400);

  speed = random(233,321);
  weight = random(30,52);
  thickness = random(22,83);
 
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
  bullet = createSprite(50,200,40,30);
  bullet.shapeColor = color(255);
  bullet.velocityX = speed;
}

function draw() {
  background(0);
 
  if (wall.x - bullet.x <( bullet.width +wall.width)/2)
  {
    bullet.velocityX = 0;
   
    var damage =  0.5 * weight * speed * speed/thickness * thickness * thickness;
    
    if(damage < 10){
     wall.shapeColor = color(0,255,0);
    }

    if(damage > 10){
      wall.shapeColor = color(255,0,0);
    }
    
  }

 drawSprites();
  
}