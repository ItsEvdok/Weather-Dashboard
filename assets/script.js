var cityName = document.querySelector("#cityInput");
var pastCitites = document.querySelector("#pastCities");
var currentCity = document.querySelector("#currentCity");
var currentTemp = document.querySelector("#currentTemp");
var currentHum = document.querySelector("#currentHum");
var currentWind = document.querySelector("#currentWind");
var currentUv = document.querySelector("#currentUv");

var currentLat = '';
var currentLon = '';

function searchCity(cityInput) {
    var cityInput = cityName.value.trim();

    var apiUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + cityInput + "&units=imperial&appid=acf5ece419aae6c97ae296eb5d196fa0";

    if(cityInput) {
        fetch(apiUrl).then(function(response) {
            response.json().then(function(data){
                displayInfo(data, cityInput)
                console.log(data);

                currentLat.textContent = data.coord.lat;
                currentLon.textContent = data.coord.lon;
            });
        });
    } else {
        alert('Please enter a valid city');
    }

    var currentCityLat = currentLat;
    var currentCityLon = currentLon;

    var apiUrlTwo = "https://api.openweathermap.org/data/2.5/onecall?lat=" + currentCityLat + "&lon=" + currentCityLon + "&appid=acf5ece419aae6c97ae296eb5d196fa0"

    function displayCity() {
        fetch(apiUrlTwo).then(function(response){
            response.json().then(function(data){
                console.log(data);
            })
        })
    }
    displayCity();
}

function displayInfo() {
    // displays past cities inputs
    var newCity = document.createElement("p");
    newCity.textContent = cityName.value;
    
    pastCitites.appendChild(newCity);
}

// currentCity.textContent = cityName.value;
// currentTemp.textContent = 'Temperature: ' + data.main.temp;
// currentHum.textContent = 'Humidity: ' + data.main.humidity + '%';
// currentWind.textContent = 'Windspeed: ' + data.wind.speed + 'mph';