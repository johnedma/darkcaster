(function() {
  angular.module('forecast-app')
        .controller("MinutelyController", MinutelyController);

  MinutelyController.$inject = ['$scope', 'WeatherService'];

  function MinutelyController($scope, WeatherService){
    $scope.minuteLat = WeatherService.lat;
    $scope.minuteLon = WeatherService.lon;
    $scope.weather  = WeatherService.weatherData;

    $scope.$watch(function(){
      return WeatherService.weatherData;
    }, function(newVal, oldVal){
      $scope.weather = WeatherService.weatherData;
      $scope.minuteLat = WeatherService.lat;
      $scope.minuteLon = WeatherService.lon;
    });

  }
}());
