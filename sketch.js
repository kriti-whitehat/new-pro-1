var fixedrect, movingrect

function setup() {
  createCanvas(1200,600);
  fixedrect=createSprite(200, 200, 50, 80);
  fixedrect.shapeColor='green';
  fixedrect.velocityX=2
  fixedrect.velocityY=2
  movingrect=createSprite(400, 200, 50, 50);
  movingrect.shapeColor='green';
  movingrect.velocityX=-2
  movingrect.velocityY=-2
}

function draw() {
  background(255,255,255); 
 
  if (movingrect.x-fixedrect.x < fixedrect.width/2+movingrect.width/2 &&
     fixedrect.x-movingrect.x < fixedrect.width/2+movingrect.width/2
     &&movingrect.y-fixedrect.y < fixedrect.height/2+movingrect.height/2 &&
     fixedrect.y-movingrect.y < fixedrect.height/2+movingrect.height/2 )
     {
    fixedrect.shapeColor='red';
    movingrect.shapeColor='red';
  }
 else {fixedrect.shapeColor='green';
  movingrect.shapeColor='green';
 }
  drawSprites();
}