//MODULE
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

//routes
weatherApp.config(function($routeProvider){
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/home.htm',
        controller: 'homeController'
    })    
    .when('/forecast', {
        templateUrl: 'pages/forecast.htm',
        controller: 'forecastController'
    })
});

//services
weatherApp.service('cityService', function(){
    this.city = "London,us";
});


//controllers
weatherApp.controller('homeController', ['$scope', '$resource', 'cityService', function($scope, $resource, cityService){
    $scope.city = cityService.city;
    
    $scope.$watch('city', function(){
        cityService.city = $scope.city;
    })
}]);

weatherApp.controller('forecastController', ['$scope', '$resource','cityService', function($scope, $resource,cityService){
    $scope.city = cityService.city;
    
        $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast", { callback: "JSON_CALLBACK"}, {get: {method: "JSONP"}});
    
   // $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, cnt: 2 });
    $scope.weatherResult = $scope.weatherAPI.get({q: $scope.city, cnt:2, appid: "bd82977b86bf27fb59a04b61b657fb6f" });
    console.log($scope.weatherResult);
    
}]);