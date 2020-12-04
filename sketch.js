var car,wall,s,w,d;
function setup() {
  createCanvas(1600,400);
  car=createSprite(50, 200, 50, 50);
  wall=createSprite(1200, 200, 110, 200);



  s=random(55,90);
  w=random(400,1500);
  d=0
}

function draw() {
  background("black"); 
  if (car.collide(wall)){

   car.collide(wall)

  d=((0.5*s*s*w)/22500)
  if (d<=100){
    car.shapeColor="green"
  }
  if (d>=100 && d<=180){
    car.shapeColor="yellow"
  }
  if (d>180){
    car.shapeColor="red"
  }
  }

  car.velocityX=s;

  drawSprites();
}