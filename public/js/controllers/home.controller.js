(function() {
  angular.module('forecast-app')
    .controller("HomeController", HomeController);

  HomeController.$inject = ['$scope', 'WeatherService'];

  function HomeController($scope, WeatherService){
    $scope.getWeather = getWeather;

  function getWeather(latitude, longitude){
    (WeatherService.getWeather(latitude, longitude)
    .then(function(response){
      $scope.weather = response.data;
    }));
  }
  }
}());
