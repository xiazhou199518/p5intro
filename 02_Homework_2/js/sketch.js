function setup() {
  //createCanvas(400, 200);
  noCanvas();

  var button = select('#submit');
  button.mousePressed(askWeather);
  input = select('#city');

  var url = 'http://api.weatherstack.com/current?access_key=68c02b239398fdc50ae5b945187128cb&query=London';
  loadJSON(url, gotWeather);

  //search = select('#city');
  search = 'London';
  console.log(search);
  //var key ='4QCl032lCsZmTtyrWAacDZJMHC15VRAn';
  var api= 'https://api.giphy.com/v1/gifs/search?api_key=4QCl032lCsZmTtyrWAacDZJMHC15VRAn&q='+search+'&limit=25&offset=0&rating=G&lang=en'
  loadJSON(api,gotDataGif);
  
}

function gotDataGif(giphy){
    console.log(giphy.data[0].images.original.url);
    createImg(giphy.data[0].images.original.url);
}

function askWeather(){
  // Get data from weatherstack.com
  //var url = 'http://api.weatherstack.com/current?access_key=68c02b239398fdc50ae5b945187128cb&query=London';
  
  var api = 'http://api.weatherstack.com/current?access_key=68c02b239398fdc50ae5b945187128cb&query=';
  // var city = 'London';
  var url = api + input.value();

  loadJSON(url,gotWeather);

  search = input.value();
  console.log(search);

  var api= 'https://api.giphy.com/v1/gifs/search?api_key=4QCl032lCsZmTtyrWAacDZJMHC15VRAn&q='+search+'&limit=25&offset=0&rating=G&lang=en'
  loadJSON(api,gotDataGif);
}

function gotWeather(weather){
    var temperature = Number(weather.current.temperature);

    if(temperature <= 5){
      search = 'snow';
      var api= 'https://api.giphy.com/v1/gifs/search?api_key=4QCl032lCsZmTtyrWAacDZJMHC15VRAn&q='+search+'&limit=25&offset=0&rating=G&lang=en'
      loadJSON(api,gotDataGif);
      
      var api= 'https://api.giphy.com/v1/gifs/search?api_key=4QCl032lCsZmTtyrWAacDZJMHC15VRAn&q='+temperature+'&limit=25&offset=0&rating=G&lang=en'
      loadJSON(api,gotDataGif);
      
      console.log(temperature);
      console.log(search);
    } 
  
    else if(temperature > 5 && temperature <= 20){
      search = 'cloud';
      var api= 'https://api.giphy.com/v1/gifs/search?api_key=4QCl032lCsZmTtyrWAacDZJMHC15VRAn&q='+search+'&limit=25&offset=0&rating=G&lang=en'
      loadJSON(api,gotDataGif);

      var api= 'https://api.giphy.com/v1/gifs/search?api_key=4QCl032lCsZmTtyrWAacDZJMHC15VRAn&q='+temperature+'&limit=25&offset=0&rating=G&lang=en'
      loadJSON(api,gotDataGif);
      
      console.log(temperature);
      console.log(search);
    } 
  
    else if(temperature > 20 && temperature <= 30){
      search = 'wind';
      var api= 'https://api.giphy.com/v1/gifs/search?api_key=4QCl032lCsZmTtyrWAacDZJMHC15VRAn&q='+search+'&limit=25&offset=0&rating=G&lang=en'
      loadJSON(api,gotDataGif);

      var api= 'https://api.giphy.com/v1/gifs/search?api_key=4QCl032lCsZmTtyrWAacDZJMHC15VRAn&q='+temperature+'&limit=25&offset=0&rating=G&lang=en'
      loadJSON(api,gotDataGif);

      console.log(temperature);
      console.log(search);
    } 
  
    else if(temperature > 30){
      search = 'sun';
      var api= 'https://api.giphy.com/v1/gifs/search?api_key=4QCl032lCsZmTtyrWAacDZJMHC15VRAn&q='+search+'&limit=25&offset=0&rating=G&lang=en'
      loadJSON(api,gotDataGif);

      var api= 'https://api.giphy.com/v1/gifs/search?api_key=4QCl032lCsZmTtyrWAacDZJMHC15VRAn&q='+temperature+'&limit=25&offset=0&rating=G&lang=en'
      loadJSON(api,gotDataGif);
      
      console.log(temperature);
      console.log(search);
    } 
  
}
