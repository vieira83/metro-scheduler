//  metroApp module
angular.module('metroApp', ['ngRoute','ngCookies', 'ngMap']);

angular.module('metroApp')
.run(['$rootScope', '$location', 'Authentication', function ($rootScope, $location, Authentication) {
    $rootScope.currentUser = null;
//    $scope.userRoles = USER_ROLES;
    $rootScope.isAuthenticated = Authentication.isAuthenticated;

    $rootScope.setCurrentUser = function (user) {
        $rootScope.currentUser = user;
    };

    $rootScope.deleteCurrentUser = function () {
        $rootScope.currentUser = null;
    };


    $rootScope.$on('$routeChangeStart', function (event, next) {
    var authorizationRequired = next.authorization;
    if (authorizationRequired && !Authentication.isAuthenticated($rootScope.currentUser)) {
      event.preventDefault();
        // user is not allowed
        //$rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
         $location.path('/');
//      } else {
//        // user is not logged in
//        //$rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
//      }
    }
  });


    //@todo add a broadcast event to check login/logout changes
}]);


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
            controller: 'loginController', // and apply instructions from this controller
        })
        .when('/register', { // If URL is at /, uses template at
            templateUrl: '/static/app/js/components/register/register.html', // this location
            controller: 'registerController' // and apply instructions from this controller
        })
        .when('/dashboard', { // If URL is at /, uses template at
            templateUrl: '/static/app/js/components/dashboard/dashboard.html', // this location
            controller: 'dashboardController', // and apply instructions from this controller
            authorization: true
        })
//        .when('/logout', {
//          templateUrl: '', //A template or templateUrl is required by AngularJS, even if your controller always redirects.
//          controller: 'logoutController'
//        })

    .otherwise({ // Any other URL, take me back to /
        redirectTo: '/'
    });
});
