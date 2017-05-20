angular.module('metroApp')
 .controller('dashboardController', ['$scope', '$rootScope','$location','Authentication', function ($scope, $rootScope, $location, Authentication){
//    $scope.currentUser = $rootScope.currentUser;
    console.log("Dashboard controller, user is: " + $scope.currentUser);


 }]);




