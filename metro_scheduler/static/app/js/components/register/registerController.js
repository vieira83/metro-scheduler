/**
* Register controller
*/
angular.module('metroApp')
  .controller('registerController', ['$location', '$scope', '$rootScope', 'Authentication', function ($location, $scope, $rootScope, Authentication) {
    var metro = {};

    $scope.register = register;

    /**
    * @name register
    * @desc Register a new user
    */
    function register() {
    debugger;
      Authentication.register(metro.email, metro.password, metro.username, metro.fname, metro.lname, metro.congregation_id)
      .then(function(data) {
        console.log("vlad registered", data);
      })
      .catch(function(data, status) {
        console.error('registration error', response.status, response.data);
      });
    }
}]);
