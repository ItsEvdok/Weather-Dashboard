var cityName = document.querySelector("#cityInput");
var pastCitites = document.querySelector("#pastCities");
var currentCity = document.querySelector("#currentCity");
var currentTemp = document.querySelector("#currentTemp");
var currentHum = document.querySelector("#currentHum");
var currentWind = document.querySelector("#currentWind");
var currentUv = document.querySelector("#currentUv");

var oneDate = document.querySelector("#oneDate");
var oneTemp = document.querySelector("#oneTemp");
var oneHum = document.querySelector("#oneHum");
var oneWind = document.querySelector("#oneWind");

var twoDate= document.querySelector("#twoDate");
var twoTemp= document.querySelector("#twoTemp");
var twoHum= document.querySelector("#twoHum");
var twoWind= document.querySelector("#twoWind");

var threeDate= document.querySelector("#threeDate");
var threeTemp= document.querySelector("#threeTemp");
var threeHum= document.querySelector("#threeHum");
var threeWind= document.querySelector("#threeWind");

var fourDate= document.querySelector("#fourDate");
var fourTemp= document.querySelector("#fourTemp");
var fourHum= document.querySelector("#fourHum");
var fourWind= document.querySelector("#fourWind");

var fiveDate= document.querySelector("#fiveDate");
var fiveTemp= document.querySelector("#fiveTemp");
var fiveHum= document.querySelector("#fiveHum");
var fiveWind= document.querySelector("#fiveWind");

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

            console.log(data.current.weather[0].icon);

            newDate = dayjs.unix(data.current.dt).format("M/DD/YYYY");

            currentCity.textContent = cityName.value + " " + newDate;
            currentTemp.textContent = 'Temperature: ' + data.current.temp;
            currentHum.textContent = 'Humidity: ' + data.current.humidity + '%';
            currentWind.textContent = 'Windspeed: ' + data.current.wind_speed + 'mph';
            currentUv.textContent = data.current.uvi;

            oneDailyDate = dayjs.unix(data.daily[1].dt).format("M/DD/YYYY");

            oneDate.textContent = oneDailyDate;
            oneTemp.textContent = 'Temp: ' + data.daily[1].temp.eve + 'F';
            oneHum.textContent = 'Humidity: ' + data.daily[1].humidity + '%';
            oneWind.textContent = 'Wind: ' + data.daily[1].wind_speed + 'mph';

            twoDailyDate = dayjs.unix(data.daily[2].dt).format("M/DD/YYYY");
            
            twoDate.textContent = twoDailyDate;
            twoTemp.textContent = 'Temp: ' + data.daily[2].temp.eve + 'F';
            twoHum.textContent = 'Humidity: ' + data.daily[2].humidity + '%';
            twoWind.textContent = 'Wind: ' + data.daily[2].wind_speed + 'mph';

            threeDailyDate = dayjs.unix(data.daily[3].dt).format("M/DD/YYYY");

            threeDate.textContent = threeDailyDate;
            threeTemp.textContent = 'Temp: ' + data.daily[3].temp.eve + 'F';
            threeHum.textContent = 'Humidity: ' + data.daily[3].humidity + '%';
            threeWind.textContent = 'Wind: ' + data.daily[3].wind_speed + 'mph';

            fourDailyDate = dayjs.unix(data.daily[4].dt).format("M/DD/YYYY");

            fourDate.textContent = fourDailyDate;
            fourTemp.textContent = 'Temp: ' + data.daily[4].temp.eve + 'F';
            fourHum.textContent = 'Humidity: ' + data.daily[4].humidity + '%';
            fourWind.textContent = 'Wind: ' + data.daily[4].wind_speed + 'mph';

            fiveDailyDate = dayjs.unix(data.daily[5].dt).format("M/DD/YYYY");

            fiveDate.textContent = fiveDailyDate;
            fiveTemp.textContent = 'Temp: ' + data.daily[5].temp.eve + 'F';
            fiveHum.textContent = 'Humidity: ' + data.daily[5].humidity + '%';
            fiveWind.textContent = 'Wind: ' + data.daily[5].wind_speed + 'mph';

            if(data.current.uvi > 6) {
                currentUv.style.backgroundColor = "red";
            } else if (data.current.uvi > 2 && data.current.uvi < 6) {
                currentUv.style.backgroundColor = "orange";
            } else {
                currentUv.style.backgroundColor = "green";
            }

        })
    })
}

function displayInfo() {
    // displays past cities inputs
    var newCity = document.createElement("button");
    newCity.textContent = cityName.value;
    
    pastCitites.appendChild(newCity);
};

