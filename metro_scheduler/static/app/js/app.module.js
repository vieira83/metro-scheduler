//  metroApp module
angular.module('metroApp', ['ngRoute','ngCookies', 'ngMap']);


angular.module('metroApp')
.config(function($locationProvider) {
    $locationProvider.html5Mode(true);
});

angular.module('metroApp')
// configuring routing.
.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', { // If URL is at /, uses template at
            templateUrl: 'static/app/js/components/login/login.html ', // this location
            controller: 'loginController' // and apply instructions from this controller
        })
        .when('/register', { // If URL is at /, uses template at
            templateUrl: '/static/app/js/components/register/register.html', // this location
            controller: 'registerController' // and apply instructions from this controller
        })

    .otherwise({ // Any other URL, take me back to /
        redirectTo: '/'
    });
});
