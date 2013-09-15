
var cafeApp = angular.module('cafeApp', []);



cafeApp.config( function($locationProvider,$routeProvider) {



    $routeProvider.when('/', {templateUrl: '_assets/partials/intro.html', controller: Intro});
    $routeProvider.when('/menu', {templateUrl: '_assets/partials/menu.html', controller: menuCtrl});
    $routeProvider.when('/locations', {templateUrl: '_assets/partials/locations.html', controller: locationList});

    // by default, go back to the index page.
    $routeProvider.otherwise({redirectTo: '/'});

});

// You can create your own custom filters.
cafeApp.filter('capitalize', function() {
    return function(input, param) {
        return input.substring(0,1).toUpperCase()+input.substring(1);
    }
});



