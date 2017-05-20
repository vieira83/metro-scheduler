angular.module('metroApp')
 .controller('logoutController', ['$scope', '$rootScope','$location', function ($scope, $rootScope, $location){
    $rootScope.deleteCurrentUser();
    $location.path('/');
 }]);