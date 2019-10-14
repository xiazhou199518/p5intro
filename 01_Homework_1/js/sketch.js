//WE DECLARE OUR ANIMATION AS A VARIABLE


//WE LOAD OUR IMAGES IN THE BUILT-IN PRELOAD FUNCTION. 
//THIS HELPS OUR PAGE LOAD FASTER 

//var greenDuck;
var img;

var x1 = 100;
var y1 = 100;
const shapeOne = rect(x1, y1, 1, 1);

function preload(){
	//greenDuck = loadAnimation('assets/goop1.png','assets/goop8.png');
	img = loadAnimation('img/Elves1.png','img/Elves8.png');
	//lookingRight = loadAnimation('img/Elves1.png','img/Elves8.png');
}

function setup() {
	var canvas = createCanvas(windowWidth-10, windowHeight);
	canvas.parent("drawingCanvas");
	background(134,185,255);

    move = createSprite(width / 2, height / 2, 100, 100);
    move.addAnimation("img", img);

}

function draw() {
	//animation(img, width/2, height/2);

	//if (img.getFrame()==img.getLastFrame()) {
		//img.goToFrame(0);
	//}

	//if(img.getFrame()==0){
		//img.play();
	//}

	if(keyIsDown(RIGHT_ARROW)){
		img.play();
	}

	if (img.getFrame()==img.getLastFrame()) {
		img.stop();
	}

	if (keyIsDown(LEFT_ARROW)) {
		img.goToFrame(0);
	}

	drawSprites();

	  if (mouseX > move.position.x + random(50)) {
	    move.velocity.x = 20;
	    move.animation.goToFrame(7);
	  } else if (mouseX < move.position.x - random(50)) {
	    move.velocity.x = -20;
	    move.animation.goToFrame(0);
	  } else {
	    move.velocity.x = 0;
	    move.animation.goToFrame(4);
	  }


	  var numCols=50;
	  var numRows=50;
	  var stepX =width/numCols;
	  var stepY =height/numRows;
	  
	  let yellow = color(244, 238, 38);

	  // rect(x1, y1, 100, 100);

	  for(var i = 0; i< width; i+=stepX){
	    for(var j = 0; j< height; j += stepY){
	      line(i, 0, i, height);
	      line(0, j, width, j);
	      drawTriangle(i,j,stepX,stepY);  
	      //fill(yellow);
	    }
	    animation(img, width/2, height/2);
	    const shapeOne = rect(x1, y1, 1, 1);
	  }

//DRAW THE ANIMATION AND GIVE IT AN X AND Y!
//ANIMATION(VARIABLE, X, Y) IS THE FUNCTION WE USE TO DO THIS

}

function drawTriangle(i, j, stepX, stepY){
  var pts = [[i,j], [i+stepX,j], [i+stepX,j+stepY], [i,j+stepY]];
  var randomNum = floor(random(4));
  triangle(pts[randomNum][0],pts[randomNum][1],
  pts[(randomNum+1)%4][0],pts[(randomNum+1)%4][1], 
  pts[(randomNum+2)%4][0], pts[(randomNum+2)%4][1]);
}

function keyPressed() {
  if (key === "w") {
    //y1 -= 10;
    var colorOne = color(random(250), 10, 255);
    background(colorOne);
    shapeOne;
    //image(img1, x1, y1);
  } else if (key === "s") {
    //y1 += 10;
    var colorTwo = color(240, random(250), 255);
    fill(colorTwo);
   	shapeOne;
  } else if (key === "a") {
    //x1 -= 10;
    var colorThree = color(random(100), 80, 255);
    fill(colorThree);
 	shapeOne;
  } else if (key === "d") {
  	//x1 += 10;
    var colorFour = color(255, 90, random(255));
    fill(colorFour);
    shapeOne;  
  }
}





