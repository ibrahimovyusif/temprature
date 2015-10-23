//controllers
weatherApp.controller('homeController', ['$scope', '$resource', 'cityService', function($scope, $resource, cityService){
    $scope.city = cityService.city;
    
    $scope.$watch('city', function(){
        cityService.city = $scope.city;
    })
}]);

weatherApp.controller('forecastController', ['$scope', '$resource','$routeParams', 'cityService', function($scope, $resource, $routeParams, cityService){
    $scope.city = cityService.city;
    $scope.times = $routeParams.times || 1;
     $scope.imgSrc = "http://www.grandhaventribune.com/sites/www.grandhaventribune.com/files/styles/large/public/nicubunu_Weather_Symbols_Sun.png?itok=HgADUu4S";
    
        $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast", { callback: "JSON_CALLBACK"}, {get: {method: "JSONP"}});
    
   // $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, cnt: 2 });
    $scope.weatherResult = $scope.weatherAPI.get({q: $scope.city, cnt: $scope.times, $scope.imgSrc, appid: "bd82977b86bf27fb59a04b61b657fb6f" });
   
    
    $scope.convertToCelsius = function(degK){
        //console.log(degK);
        return Math.round(degK - 273.15);
    }
    
    $scope.convertToFahrenheit = function(degK) { 
        return Math.round((1.8 * (degK - 273)) + 32); 
    }
    
    $scope.convertToDate = function(dt){
        return new Date(dt * 1000);
    }

    $scope.showRainy = function(rain){
       // console.log(rain);
               return rain;
        //return rain;
    }
    
    

  //  $scope.imgSrc = "http://www.grandhaventribune.com/sites/www.grandhaventribune.com/files/styles/large/public/nicubunu_Weather_Symbols_Sun.png?itok=HgADUu4S";


    
    console.log($scope.weatherImgSrc);
    
    console.log($scope.weatherResult);
}]);


weatherApp.controller('imgController', ['$scope', function($scope){
    // $scope.weatherImgSrc = function(){

    // }      

}]);


   // document.getElementById("image").src = "http://www.clker.com/cliparts/7/f/f/d/1206565698385896438Anonymous_simple_weather_symbols_15.svg.med.png";
   // document.getElementById("image").src = "http://www.grandhaventribune.com/sites/www.grandhaventribune.com/files/styles/large/public/nicubunu_Weather_Symbols_Sun.png?itok=HgADUu4S";

