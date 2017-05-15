//  metroApp module
angular.module('metroApp', ['ngRoute']);


angular.module('metroApp')
.config(function($locationProvider) {
    $locationProvider.html5Mode(true);
});

angular.module('metroApp')
// configuring routing.
.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', { // If URL is at /, uses template at
            templateUrl: 'static/app/js/components/home/home.html ', // this location
            controller: 'homeController' // and apply instructions from this controller
        })
        .when('/login', { // If URL is at /, uses template at
            templateUrl: '/static/app/js/components/login/login.html', // this location
            controller: '/static/app/js/components/loginController' // and apply instructions from this controller
        })

    .otherwise({ // Any other URL, take me back to /
        redirectTo: '/'
    });
});

static/app/js/components/home/home.html