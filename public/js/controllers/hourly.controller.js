(function() {
  angular.module('forecast-app')
    .controller("HourlyController", HourlyController);

  HourlyController.$inject = ['$scope','WeatherService'];

  function HourlyController($scope, WeatherService){
    $scope.hourLat = WeatherService.lat;
    $scope.hourLon = WeatherService.lon;
    $scope.weather  = WeatherService.weatherData;

    $scope.$watch(function(){
      return WeatherService.weatherData;
    }, function(newVal, oldVal){
      $scope.weather = WeatherService.weatherData;
      $scope.hourLat = WeatherService.lat;
      $scope.hourLon = WeatherService.lon;
    });

  }
}());
