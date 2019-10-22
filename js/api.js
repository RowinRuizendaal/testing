

  //Eerste reeks
  var LjubljanaWolk = document.querySelector('.bestemmingen section div');
  var LjubljanaGraden = document.querySelector('.bestemmingen section section h1');
  //einde eerste reeks
  

   //tweede reeks
   var GuyanaWolk = document.querySelector('.bestemmingen section div');
   var GuyanaGraden = document.querySelector('.bestemmingen section section h1');
   //tweede eerste reeks


  function weatherBalloon(cityID) {
    var key = 'a807ac1b2374a10b9edc07dd13418814'; //Api key
    fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&appid=' + key)  //Fetch data met url
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
        drawWeather(data); //voer functie drawWeather uit
    })
    .catch(function() {
      // catch any errors
    });
  }
  
  window.onload = function() {
      weatherBalloon(3196359);
  }
 


  function drawWeather( d ) {
	var celcius = Math.round(parseFloat(d.main.temp)-273.15);	 //Reken uit naar celcius
	document.querySelector('.bestemmingen section section div').innerHTML = d.weather[0].description; //vul eerste
	document.querySelector('.bestemmingen section section h1').innerHTML = celcius + '&deg;'; //vul tweede 
}
