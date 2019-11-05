var data;
var profile = [];
var randomText = [];


function preload(){
  var file = 'js/profile.json';
  data = loadJSON(file);
  console.log(file);

}

function setup(){
  createCanvas(700, 700);
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
  angleMode(DEGREES);

  var names = data.name;
  append(profile, names.givenName);
  append(profile, names.familyName);
  append(profile, names.formattedName);
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
      append(randomText, list[j]);
      console.log(randomText);
    }
    
  }
}

function draw() {
  background(0);

  var amount = 5;
  var spacing = 20;
  var radius = 140;
  
    for (var i = 0; i < amount; i++) {
        createNumberRing(radius + spacing * i, 30 + 10 * i, i);
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





