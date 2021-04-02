var cityName = document.querySelector("#cityInput");
var pastCitites = document.querySelector("#pastCities");
var currentCity = document.querySelector("#currentCity");
var currentTemp = document.querySelector("#currentTemp");
var currentHum = document.querySelector("#currentHum");
var currentWind = document.querySelector("#currentWind");
var currentUv = document.querySelector("#currentUv");

var currentLat = [];
var currentLon = [];

function searchCity(cityInput) {
    currentLat = [];
    currentLon = [];

    var cityInput = cityName.value.trim();

    var apiUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + cityInput + "&units=imperial&appid=acf5ece419aae6c97ae296eb5d196fa0";

    if(cityInput) {
        fetch(apiUrl).then(function(response) {
            response.json().then(function(data){
                displayInfo(data, cityInput)
                console.log(data);
                currentLat.push(data.coord.lat);
                currentLon.push(data.coord.lon);

                console.log(currentLat[0]);
                console.log(currentLon[0]);

                displayCity();
            });
        });
    } else {
        alert('Please enter a valid city');
    }
}

function displayCity() {
    var apiUrlTwo = "https://api.openweathermap.org/data/2.5/onecall?lat=" + currentLat[0] + "&lon=" + currentLon[0] + "&units=imperial&appid=acf5ece419aae6c97ae296eb5d196fa0"

    fetch(apiUrlTwo).then(function(response){
        response.json().then(function(data){
            console.log(data);

            currentCity.textContent = cityName.value + " " + data.daily[0].dt;
            currentTemp.textContent = 'Temperature: ' + data.current.temp;
            currentHum.textContent = 'Humidity: ' + data.current.humidity + '%';
            currentWind.textContent = 'Windspeed: ' + data.current.wind_speed + 'mph';
            currentUv.textContent = "UV Index: " + data.current.uvi;
        })
    })
}

function displayInfo() {
    // displays past cities inputs
    var newCity = document.createElement("p");
    newCity.textContent = cityName.value;
    
    pastCitites.appendChild(newCity);
}

