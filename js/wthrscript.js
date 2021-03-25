//need api 3a8117101994cd1cfbb2c9c8f394442f
//need to define the function
//need to call the function

//var stateCode =
var apiKey = "3a8117101994cd1cfbb2c9c8f394442f";
var baseUrl = "https://api.openweathermap.org/data/2.5/weather?";

function searchForCityWeather(city) {
  var fullUrl = baseUrl + "q=" + city + "&appid=" + apiKey + "&units=imperial";
  fetch(fullUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data.main);
      $("#current-temp").html(
        `<div id = "currentTemp">${data.main.temp}</div> <div id = "feelsLike">${data.main.feels_like}</div><div id = "highTemp">${data.main.temp_max}</div><div id = "lowTemp">${data.main.temp_min}</div>`
      );
    });
}
$("#city-search").submit(function (event) {
  // alert("Handler for .submit() called.");
  event.preventDefault();
  searchForCityWeather($("input").first().val());
});
