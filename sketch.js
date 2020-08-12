var fixedrect, movingrect, square1, square2, rect1, rect2, rect3;


function setup() {
  createCanvas(800,800);
  fixedrect = createSprite(200, 200, 50, 100);
  movingrect = createSprite(250, 250, 100, 50);

  movingrect.shapeColor = "purple"; 
  fixedrect.shapeColor = "purple"; 
  
  movingrect.debug = true;
  fixedrect.debug = true;

  square1 = createSprite(400, 0, 50, 50);
  square1.shapeColor = "pink";
  square1.velocityY = 5;
  square1.debug = true;
  
  square2 = createSprite(400, 800, 50, 50);
  square2.shapeColor = "blue";
  square2.velocityY = -5;
  square2.debug = true;

  rect1 = createSprite(300, 200, 50, 100);
  rect1.shapeColor = "green";

  rect2 = createSprite(400, 200, 50, 100);
  rect2.shapeColor = "green";

  rect3 = createSprite(500, 200, 50, 100);
  rect3.shapeColor = "green";

}

function draw() {
  background(0);  
  drawSprites();

  movingrect.x = mouseX;
  movingrect.y = mouseY;

  if (isTouching(movingrect, rect2)){

    movingrect.shapeColor = "red"; 
    rect2.shapeColor = "red"; 
  } else {

    movingrect.shapeColor = "purple"; 
    rect2.shapeColor = "purple"; 
 

  }

  bounceOff(square1, square2);

}

