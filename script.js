//initial variables

var lat = '';
var long = '';

//creating all querySelectors

var inputText = document.querySelector("#inputText");
var button = document.querySelector("#button1");

var mainLoc = document.querySelector("#mainLocation");
var mainTemp = document.querySelector("#mainTemp");
var mainWind = document.querySelector("#mainWind");
var mainHum = document.querySelector("#mainHum");

var firstDay = document.querySelector("#firstDay");
var firstTemp = document.querySelector("#firstTemp");
var firstWind = document.querySelector("#firstWind");
var firstHum = document.querySelector("#firstHum");

var secondDay = document.querySelector("#secondDay");
var secondTemp = document.querySelector("#secondTemp");
var secondWind = document.querySelector("#secondWind");
var secondHum = document.querySelector("#secondHum");

var thirdDay = document.querySelector("#thirdDay");
var thirdTemp = document.querySelector("#thirdTemp");
var thirdWind = document.querySelector("#thirdWind");
var thirdHum = document.querySelector("#thirdHum");

var fourthDay = document.querySelector("#fourthDay");
var fourthTemp = document.querySelector("#fourthTemp");
var fourthWind = document.querySelector("#fourthWind");
var fourthHum = document.querySelector("#fourthHum");

var fivthDay = document.querySelector("#fivthDay");
var fivthTemp = document.querySelector("#fivthTemp");
var fivthWind = document.querySelector("#fivthWind");
var fivthHum = document.querySelector("#fivthHum");

//event listener on submit button click

button.addEventListener('click', findCords);

//this function uses the input and converts city name to coordinates

function findCords() {


    var cityName = inputText.value;
    console.log(cityName);

    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=b4b1c2852d4a3caa947f3c6fb930bc77`)
        .then(response => response.json())
        .then(data => {

            lat = data[0].lat;
            long = data[0].lon;

            findWeather(lat, long);
        })



}

//this function uses coords and finds weather information
function findWeather(lat1, long1) {

    var lat2 = lat1;
    var long2 = long1;

    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat2}&lon=${long2}&appid=b4b1c2852d4a3caa947f3c6fb930bc77`)
    .then(response => response.json())
    .then(data => {
        displayWeather(data);
    })


}

//this function will display the weather on the page
function displayWeather(data1) {
    console.log(data1);
    console.log(data1.list[0].dt_txt);

    mainLoc.textContent = "Weather in: " + inputText.value + " on date: " + data1.list[0].dt_txt;

    mainTemp.textContent = "Temp: " + convertTemp(data1.list[0].main.temp);
    mainWind.textContent = "Wind: " + data1.list[0].wind.speed;
    mainHum.textContent = "Humidity: " + data1.list[0].main.humidity;




    firstDay.textContent = data1.list[2].dt_txt;
    firstTemp.textContent = "Temp: " + convertTemp(data1.list[2].main.temp);
    firstWind.textContent = "Wind: " + data1.list[2].wind.speed;
    firstHum.textContent = "Humidity: " + data1.list[2].main.humidity;



    secondDay.textContent = data1.list[10].dt_txt;
    secondTemp.textContent = "Temp: " + convertTemp(data1.list[10].main.temp);
    secondWind.textContent = "Wind: " + data1.list[10].wind.speed;
    secondHum.textContent = "Humidity: " + data1.list[10].main.humidity;


    thirdDay.textContent = data1.list[18].dt_txt;
    thirdTemp.textContent = "Temp: " + convertTemp(data1.list[18].main.temp);
    thirdWind.textContent = "Wind: " + data1.list[18].wind.speed;
    thirdHum.textContent = "Humidity: " + data1.list[18].main.humidity;



    fourthDay.textContent = data1.list[26].dt_txt;
    fourthTemp.textContent = "Temp: " + convertTemp(data1.list[26].main.temp);
    fourthWind.textContent = "Wind: " + data1.list[26].wind.speed;
    fourthHum.textContent = "Humidity: " + data1.list[26].main.humidity;


    fivthDay.textContent = data1.list[34].dt_txt;
    fivthTemp.textContent = "Temp: " + convertTemp(data1.list[34].main.temp);
    fivthWind.textContent = "Wind: " + data1.list[34].wind.speed;
    fivthHum.textContent = "Humidity: " + data1.list[34].main.humidity;
}

//this function converts kelvin temp to common usage
function convertTemp(temp) {

    var final = 0;

    final = (temp - 273);

    final = (final * (9/5));

    final = (final + 32);

    final = Math.floor(final);

    return final;

}