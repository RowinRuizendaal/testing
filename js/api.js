//https://bytemaster.io/fetch-weather-openweathermap-api-javascript


//Eerste reeks
var LjubljanaWolk = document.querySelector('.detail section div');
var LjubljanaGraden = document.querySelector('.detail section h1');
//einde eerste reeks



function weatherBalloon(cityID) {
  var key = 'a807ac1b2374a10b9edc07dd13418814'; //Api key
  fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID + '&appid=' + key) //Fetch data met url
    .then(function (resp) {
      return resp.json()
    }) // Convert data to json
    .then(function (data) {
      drawWeather(data); //voer functie drawWeather uit
    })
    .catch(function () {
      // catch any errors
    });
}

window.onload = function () {
  weatherBalloon(3196359); //Specific id of country/place
}



function drawWeather(d) {
  var celcius = Math.round(parseFloat(d.main.temp) - 273.15); //Reken uit naar celcius
  LjubljanaWolk.innerHTML = d.weather[0].description; //vul eerste
  LjubljanaGraden.innerHTML = celcius + '&deg;'; //vul tweede 
}