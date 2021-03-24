//need api 3a8117101994cd1cfbb2c9c8f394442f
//need to define the function
//need to call the function

//var stateCode =
var apiKey = "3a8117101994cd1cfbb2c9c8f394442f";
var baseUrl = "https://api.openweathermap.org/data/2.5/weather?";
// going to use more specific parameter for city/ state request q={city name},{state code}&appid={API key}
function searchForCityWeather(city) {
  var fullUrl = baseUrl + "q=" + city + "&appid=" + apiKey + "&units=imperial";
  fetch(fullUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data.main);
      $("#current-temp").html(
        `<div class = "currentTemp">${data.main.temp}</div> <div>${data.main.feels_like}</div>`
      );
    });
}
$("#search-city-form").submit(function (event) {
  alert("Handler for .submit() called.");
  event.preventDefault();
  searchForCityWeather($("input").first().val());
});
