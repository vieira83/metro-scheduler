angular.module('metroApp')
 .controller('navController', ['$scope', '$rootScope','$location', function ($scope, $rootScope, $location){

    $scope.menuClass = function(page) {
        var current = $location.path().substring(1);
        return page === current ? "active" : "";
    };

    $scope.logout = function(){
        $rootScope.deleteCurrentUser();
        $location.path('/');
    }
 }]);