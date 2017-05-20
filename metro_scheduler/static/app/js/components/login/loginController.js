angular.module('metroApp')
 .controller('loginController', ['$scope', '$rootScope','$location','Authentication', function ($scope, $rootScope, $location, Authentication){
    $scope.currentUser = $rootScope.currentUser;
    console.log("Login controller, user is: " + $scope.currentUser);
    $scope.metro = {};
    $scope.login = function () {
      Authentication.login(this.metro.username, this.metro.password)
      .then(function(response) {
        console.log("vlad lggedin", response.data);

        //@todo set currentuser
        $rootScope.setCurrentUser(response.data);
        console.log($rootScope.currentUser);
        $location.path('/dashboard');

      })
      .catch(function(response, status) {
        console.error('Gists error', response.status, response.data);
      })
    }

 }]);