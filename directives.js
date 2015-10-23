
//directives

weatherApp.directive("weatherReport", function(){
    return {
        restrict: 'E',
        templateUrl: 'directives/weatherReport.html',
        replace: true,
        scope: {
            weatherDay: "=",
            convertToStandard: "&",
            convertToDate: "&",
            dateFormat: "@"
        }
    }
});

weatherApp.directive("anarWeather", function(){
    return {
        restrict: 'AE',
        templateUrl: 'directives/anarWeather.html',
        replace: true,
        scope: {
            weatherDay: "=",
            convertToFahrenheit: "&",
            convertToDate: "&",
            showRainy: "&",
            dateFormat: "@"
        }
    }
});

weatherApp.directive("imageWeather", function(){
    return {
        restrict: 'AE',
        templateUrl: 'directives/imageWeather.html',
        replace: true,
        scope: {
           // imageUrl: "=",
            weatherImgSrc: "@"
        }
    }
});
