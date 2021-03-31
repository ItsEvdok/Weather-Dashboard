var cityName = document.querySelector("#cityInput");
var pastCitites = document.querySelector("#pastCities");
var currentCity = document.querySelector("#currentCity");
var currentTemp = document.querySelector("#currentTemp");
var currentHum = document.querySelector("#currentHum");
var currentWind = document.querySelector("#currentWind");
var currentUv = document.querySelector("#currentUv");

function searchCity(cityInput) {
    var cityInput = cityName.value.trim();

    var apiUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + cityInput + "&appid=acf5ece419aae6c97ae296eb5d196fa0";

    if(cityInput) {
        fetch(apiUrl).then(function(response) {
            response.json().then(function(data){
                displayInfo(data, cityInput)
                console.log(data)
            });
        });
    } else {
        alert('Please enter a valid city');
    }
}

function displayInfo() {
    // displays past cities inputs
    var newCity = document.createElement("p");
    newCity.textContent = cityName.value;
    
    pastCitites.appendChild(newCity);

    // displays current city info
    currentCity.textContent = cityName.value;
}