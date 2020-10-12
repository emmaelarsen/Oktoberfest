/**
 * file: js.js
 * purpose: interactivity
 **/

//document.ready function tjekker om DOM'en er loaded
$(document).ready(function() {
            
console.log('JavaScript from js/js.js: up and running!');

    // ... your code here ...
    

    
// OPEN WEATHER
    
    
 //laver en constant så jeg kun behøves at skrive min token én gang
        const token = "2a8f33e2e09ff7094c044a0aac444a20"; // save your token in this variable

        const aarhus = "https://api.openweathermap.org/data/2.5/weather?q=Aarhus,DK&appid=" +
            token +
            "&units=metric";



            // get the weather data
            fetch(aarhus).then(response => {
                return response.json();
            }).then(data => {

                // Work with JSON data here
                console.log(data); // show what's in the json

                $('#result').append(
                    '<div class="weatherInfo">' +
                    data.weather[0].main +
                    ' in ' +
                    data.name +
                    '<figure><img src="http://openweathermap.org/img/w/' +
                    data.weather[0].icon +
                    '.png" alt="The weather : ' +
                    data.weather[0].main +
                    '"></figure>' +
                    '</div>');

                // here are the icons: https://openweathermap.org/weather-conditions 

            }).catch(err => {
                // Do something for an error here
                console.log('There was an error ...');
            });

    
    

// MAP BOX
            
        
// Her sættes din token ind 
	mapboxgl.accessToken ='pk.eyJ1IjoiZW1tYWVsYXJzZW4iLCJhIjoiY2tmcWtlMml0MHM5bDJxcGZvZnUzdnJsOSJ9.2hTqxBLSY-kwRxlI3qyTCA';
    var start = [10.202733, 56.153295];
    var end = [10.149944, 56.117126];
    var map = new mapboxgl.Map({
container: 'map', // container id
    
// Her sættes din style ind
style:'mapbox://styles/emmaelarsen/ckfqkpovt03ug19pmpqsyxr98', // style URL
center: [10.219, 56.154], // starting position [lng, lat]
zoom: 14, // starting zoom
});
    
    
// tilføjer markør 
var marker = new mapboxgl.Marker()
.setLngLat([10.2041781, 56.1589402])
.addTo(map);

     
    // ... end ...
});
