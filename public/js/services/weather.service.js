(function() {

  angular.module('forecast-app')
      .factory('WeatherService', WeatherService);

  WeatherService.$inject = ['$http'];

  function WeatherService($http){
    var secretToken = {
      secret: 'its a secret'
    };
    var latitude;
    var longitude;
    var weatherData = [];
    return  {
      weatherData: weatherData,
      getWeather: getWeather
    };

    function getWeather(latitude, longitude){
      latitude = latitude;
      longitude = longitude;
      var config = {
        headers: secretToken
      };
      var url = '/forecast/' + latitude + ',' + longitude;
      return $http.get(url, config);
    }
  }
}());
