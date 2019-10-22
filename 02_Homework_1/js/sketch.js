// A wind direction vector

var wind;
var position;
var input;

//let bgcolor;
var visibility;
var velocity = 1;
var cloudcover;
//var humiditys;


function setup(){
  createCanvas(720,720);

  var url = 'http://api.weatherstack.com/current?access_key=68c02b239398fdc50ae5b945187128cb&query=London';
  loadJSON(url, gotWeather);

  var button = select('#submit');
  button.mousePressed(askWeather);
  input = select('#city');

  position = createVector(width/2, height/2);
  wind = createVector();

}

function draw(){
  //background(bgcolor);

  // Arrow pointing out the wind direction
  push();
  translate(32,height-32);
  //insert a variable
  rotate(wind.heading()+PI/2);
  noStroke();
  fill(255);
  ellipse(0,0,48,48);

  stroke(45,123,182);
  strokeWeight(3);
  line(0,-16,0,16);

  noStroke();
  fill(45,123,182);
  triangle(0,-18,-6,-10,6,-10);

  pop();

  // Create a shape following the wind
  position.add(wind);

  stroke(0);
  fill(51);
  ellipse(position.x, position.y, 16, 16);

  if(position.x > width) position.x = 0;
  if(position.x < 0) position.x = width;
  if(position.y > height) position.y = 0;
  if(position.y < 0) position.y = height;


  visibility = visibility + velocity;
  //console.log(visibility);
   // Remember, || means "or."
  if ((visibility > 256) || (visibility < 0)) {
    
    // If the object reaches either edge, multiply speed by -1 to turn it around.
    velocity = velocity * 1;
  }

  // Display circle with r value
  fill(visibility, 0, 0);

  // Try using r as alpha value
  fill(0, 200, 200, visibility);
  ellipse(100, 690,48,48);
  

  cloudcover = cloudcover + velocity;
  //console.log(cloudcover);

  // Remember, || means "or."
  if ((cloudcover > height/2) || (cloudcover < 0)) {
    
    // If the object reaches either edge, multiply speed by -1 to turn it around.
    velocity = velocity * -1;
  }
  fill(0, 130, 200);
  ellipse(600,600,cloudcover, cloudcover);
  
  //humiditys = humiditys + PI/4;
  //translate(width/2, height/2);
  //rotate(humiditys);
  //rect(0, 0, 180, 180);  

}

function askWeather(){
  // Get data from weatherstack.com
  //var url = 'http://api.weatherstack.com/current?access_key=68c02b239398fdc50ae5b945187128cb&query=London';
  
  var api = 'http://api.weatherstack.com/current?access_key=68c02b239398fdc50ae5b945187128cb&query=';
  // var city = 'London';
  var url = api + input.value();

  loadJSON(url,gotWeather);
}

function gotWeather(weather){
  var angle = radians(Number(weather.current.wind_degree));
  var windmag = Number(weather.current.wind_speed);

  var temperature = Number(weather.current.temperature);
  var pressure = Number(weather.current.pressure);

  cloudcover = Number(weather.current.cloudcover);
  
  visibility = Number(weather.current.visibility);
  //velocity = 1;

  humidity = Number(weather.current.humidity);
  
  
  if(temperature <= 5){
    bgcolor  = color(42, 75, 124);
    background(bgcolor);
    console.log(temperature);
    console.log('bule');
  } 

  else if(temperature > 5 && temperature <= 20){
    bgcolor  = color(250, 154, 133);
    background(bgcolor);
    console.log(temperature);
    console.log('red');
  } 

  else if(temperature > 20 && temperature <= 30){
    bgcolor  = color(121, 123, 58);
    background(bgcolor);
    console.log(temperature);
    console.log('green');
  } 

  else if(temperature > 30){
    bgcolor  = color(249,103, 20);
    console.log(temperature);
    console.log('orange');
  } 


  for (var i=0; i<pressure/2; i+= 25) {
    for (var j=0; j<pressure/2; j+= 25) {
      ellipse(i, j, 10, 10);
      console.log(pressure);
    }
  }

  wind = p5.Vector.fromAngle(angle);
}