var data;
var profile = [];
var randomText = [];

var timer = 9;
var song;

function preload(){
  var file = 'js/profile.json';
  data = loadJSON(file);
  console.log(file);

}

function setup(){
  createCanvas(700, 700);
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
  //angleMode(DEGREES);

  song = loadSound("js/instrument.mp3",loaded);
  song.setVolume(0.5);

  var names = data.name;
  append (profile, names.givenName);
  append (profile, names.familyName);
  append (profile, names.formattedName);
  console.log(profile);

  // for (var i = 0; i < profile.length; i++){
  //    console.log(profile.length);
  //    createP(profile[i]);
  // }

  var dispalyname = data.displayName;
  //createP(dispalyname);
  append (profile, dispalyname);
  console.log(dispalyname);

  var email = data.emails[0].value;
  //createP(email);
  append (profile, email);
  console.log(email);

  var birthday = data.birthday
  //createP(birthday);
  append (profile, birthday);
  console.log(birthday);

  var gender = data.gender.type;
  //createP(gender);
  append (profile, gender);
  console.log(gender);

  for (var i = 0; i < profile.length; i++){
    console.log(profile.length);
    console.log("It is my profile:" + profile[i]);
    var list = profile[i].split('');
    console.log(profile[i].split(''));
    //createP(profile[i]); 
     
    for(var j=0; j < list.length; j++){
      append (randomText, list[j]);
      console.log(randomText);
    }
    
  }
}

function loaded(){
  song.play();
}

function draw() {
  background(0);

   var amount = 5;
   var spacing = 20;
   var radius = 140;
  
   if (frameCount % 60 == 0 && timer > 0) { 
    timer --;
    //console.log(timer);
   }

  if(timer > 5){
    angleMode(DEGREES);

    for (var i = 0; i < amount; i++) {
        createNumberRing(radius + spacing * i, 30 + 10 * i, i);
        console.log("Ring");
    }
  }

  if (timer <= 5 && timer > 2) { 
    angleMode(RADIANS);
    Flower(radius);
    console.log("Flower");
  }

  if (timer <= 2) { 
    angleMode(RADIANS);
    Animation(radius);
    console.log("Animation");
  }

  if (timer == 0) { 
    timer = 9;     
  } 
}

function createNumberRing(radius, amount) {
  //randomSeed(seed);
  //var randomText = [];
  // for (var i = 0; i <= amount; i++) {
  //     //randomText.push(parseInt(random(2), 10));
  // }
  var spacing = 360/amount;
  
  push();
  translate(width / 2, height / 2);

  var rotSpeed = 0.05;
  rotate(frameCount * random(-rotSpeed, rotSpeed));

  for (var i = 0; i < amount; i++) {
      push();    
      rotate(i*spacing);
      
      var char = new Char(randomText[i], 0 + radius, 0, 90, random(50, 255));
      char.render();
      pop();
  }

  pop();
}

function Char(msg, x, y, rot, clr) {
  this.x = x;
  this.y = y;
  this.rot = rot;
  this.msg = msg;
  this.color = clr;

  this.render = function() {
      push();
      fill(this.color);
      translate(this.x, this.y);
      rotate(this.rot);
      text(this.msg, 0, 0);
      pop();
  }
}

function Flower(radius) {

  translate(width/2, height/2);
	for (var i = 0; i < 8; i++) {
		push();
		rotate(TWO_PI * i / 8);
		var tx = 200 * noise(0.01*frameCount);
		translate(tx, 0);
    var char = new Char(randomText[i], 0 + radius, 0, 90, random(50, 255));
    char.render();
		for (var j = 0; j < 6; j++) {
			push();
			rotate(TWO_PI * j / 6);
			var rx = 60 * noise(0.01*frameCount + 10);
      var char = new Char(randomText[i], 0 + radius, 0, 90, random(50, 255));
      char.render();
			pop();
    }	
   	
		translate()
		pop();
	}
}

function Animation(radius) {

  var phase = 0;
  var speed = 0.03;
  var maxCircleSize = 20;
  var numRows = 10;
  var numCols = 16;
  var numStrands = 2;

  phase = frameCount * speed;
  
  for(var strand = 0; strand < numStrands; strand += 1) {
    var strandPhase = phase + map(strand, 0, numStrands, 0, TWO_PI);
    
    for(var i = 0; i < numCols; i += 1) {
      var colOffset = map(i, 0, numCols, 0, TWO_PI);
      var x = map(i, 0, numCols, 50, width - 50);
      
      for(var j = 0; j < numRows; j += 1) {
        var y = height/2 + j * 10 + sin(strandPhase + colOffset) * 50;
        var sizeOffset = (cos(strandPhase - (j / numRows) + colOffset) + 1) * 0.5;
        var circleSize = sizeOffset * maxCircleSize;
             
        var char = new Char(randomText[j], x, y, circleSize, random(50, 255));
        char.render();
        
        //ellipse(x, y, circleSize, circleSize);
      }
    }

  
	}
}


