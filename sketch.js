var car,wall;

var speed, weight, thickness;

function setup() {
 createCanvas(1600, 400);

	speed=random(223, 321)
	weight=random(30,52)
	car=createSprite(50, 200, 50, 5);  
	car.velocityX = speed;
	car.shapeColor=color(255);
	thickness = random(22, 83)
 	wall=createSprite(1200,200, thickness, height/2)
	wall.shapeColor=color(230, 230, 230)
	
}


function draw() {
 background(0);




 if(hasCollided(car, wall))
 {
 	car.velocityX=0;
 	var deformation=0.5 * weight * speed * speed/(thickness * thickness * thickness);
	if(deformation>10)
  {
		car.shapeColor=color(255,0,0);
  }
  
	if(deformation<10)
	{
		car.shapeColor=color(0,255,0);
	}
 } 

 drawSprites();

}

function hasCollided(lcar, lwall)
{
	carRightEdge = lcar.x + car.width;
	wallLeftEdge = lwall.x;
	if(carRightEdge>= wallLeftEdge)
	{
		return true
	} 
	return false 
}
