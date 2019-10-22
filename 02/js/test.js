let city = 'brooklyn';
//giphy api key
//let api = 'https://api.giphy.com/v1/gifs/search?api_key=rMXuwMjUUGR9Zdv2mmtdGWqAE0NOLUb0&q=' + search + '&limit=25&offset=0&rating=G&lang=en';//if you change the search, you can change the search object
//https://api.giphy.com/v1/gifs/search?api_key=rMXuwMjUUGR9Zdv2mmtdGWqAE0NOLUb0&q=dogs&limit=25&offset=0&rating=G&lang=en

//weather api key：https://openweathermap.org/appid
//http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=5f7315f331181aa4ac6571d7f18b543a
//http://api.openweathermap.org/data/2.5/weather?q=brooklyn&APPID=5f7315f331181aa4ac6571d7f18b543a
let weatherKey = '5f7315f331181aa4ac6571d7f18b543a';
let weatherapi = 'api.openweathermap.org/data/2.5/forecast?id=524901&APPID=';

function setup() {
    noCanvas();
    loadJSON('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=5f7315f331181aa4ac6571d7f18b543a', gotData);
   // loadJSON('https://api.giphy.com/v1/gifs/search?api_key=rMXuwMjUUGR9Zdv2mmtdGWqAE0NOLUb0&q=' + search + '&limit=25&offset=0&rating=G&lang=en', gotData);//giphy
}


function gotData(weather) {


    console.log(weather.weather[0].main);

    if (weather.weather[0].main == "Clear") {
        console.log("I am clear");
        loadJSON('https://api.giphy.com/v1/gifs/search?api_key=rMXuwMjUUGR9Zdv2mmtdGWqAE0NOLUb0&q=sunny&limit=25&offset=0&rating=G&lang=en', gotData);
        function gotData(giphy) {
            console.log(giphy.data[0].images.original.url);
            createImg(giphy.data[0].images.original.url);

        }
    }

    else if (weather.weather[0].main == "Clouds") {
        console.log("I am clouds");
        loadJSON('https://api.giphy.com/v1/gifs/search?api_key=rMXuwMjUUGR9Zdv2mmtdGWqAE0NOLUb0&q=clouds&limit=25&offset=0&rating=G&lang=en', gotData);
        function gotData(giphy) {
            console.log(giphy.data[0].images.original.url);
            createImg(giphy.data[0].images.original.url);

        }
    }

    else if (weather.weather[0].main == "Mist") {
        console.log("I am mist");
        loadJSON('https://api.giphy.com/v1/gifs/search?api_key=rMXuwMjUUGR9Zdv2mmtdGWqAE0NOLUb0&q=mist&limit=25&offset=0&rating=G&lang=en', gotData);
        function gotData(giphy) {
            console.log(giphy.data[0].images.original.url);
            createImg(giphy.data[0].images.original.url);

        }
    }


    else if (weather.weather[0].main == "Rain") {
        console.log("I am rain");
        loadJSON('https://api.giphy.com/v1/gifs/search?api_key=rMXuwMjUUGR9Zdv2mmtdGWqAE0NOLUb0&q=rain&limit=25&offset=0&rating=G&lang=en', gotData);
        function gotData(giphy) {
            console.log(giphy.data[0].images.original.url);
            createImg(giphy.data[0].images.original.url);

        }

    }

    else {
        console.log("I am not clear/clouds/mist");
        loadJSON('https://api.giphy.com/v1/gifs/search?api_key=rMXuwMjUUGR9Zdv2mmtdGWqAE0NOLUb0&q=what&limit=25&offset=0&rating=G&lang=en', gotData);
        function gotData(giphy) {
            console.log(giphy.data[0].images.original.url);
            createImg(giphy.data[0].images.original.url);
        }
    }
}