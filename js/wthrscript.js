//need api 3a8117101994cd1cfbb2c9c8f394442f
//need to define the function
//need to call the function

//var stateCode =
var apiKey = "3a8117101994cd1cfbb2c9c8f394442f";
var baseUrl = "https://api.openweathermap.org/data/2.5/weather?";
// going to use more specific parameter for city/ state request q={city name},{state code}&appid={API key}
function searchForCityWeather(city, stateCode) {
  var fullUrl = baseUrl + "q=" + city + "&appid=" + apiKey;
  fetch(fullUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}
searchForCityWeather("Dallas");
