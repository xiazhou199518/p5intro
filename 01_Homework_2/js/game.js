//WE DECLARE OUR ANIMATION AS A VARIABLE


//WE LOAD OUR IMAGES IN THE BUILT-IN PRELOAD FUNCTION. 
//THIS HELPS OUR PAGE LOAD FASTER 

//var greenDuck;
//Moving sprites
var ghost, circle;
var direction = 90; //circle initial direction moving down

function setup() {
  createCanvas(800, 1000);

  //create the sprites
  ghost = createSprite(600, 200, 50, 100);
  ghost.addAnimation('floating', 'img/bee1.png', 'img/bee2.png');

  circle = createSprite(400, 200, 50, 100);
  circle.addAnimation('floating', 'img/bee3.png', 'img/bee4.png');

  background(51);

}

function draw() {
  background(255, 255, 255);

  //aside of setting the velocity directly you can move a sprite
  //by providing a speed and an angle
  direction += 2;
  //speed, angle
  circle.setSpeed(3, direction);

  //you can rotate the sprite according the direction it is moving
  //uncomment this
  //circle.rotateToDirection = true;

  //or by applying a force toward a point
  //force (acceleration), pointx, pointy
  ghost.attractionPoint(0.2, mouseX, mouseY);
  //since the force keeps incrementing the speed you can
  //set a limit to it with maxSpeed
  ghost.maxSpeed = 5;

  //draw the sprite
  drawSprites();
}