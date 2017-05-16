/**
* Register controller
*/
angular.module('metroApp')
  .controller('registerController', ['$location', '$scope', '$rootScope', 'Authentication', function ($location, $scope, $rootScope, Authentication) {
    var vm = this;

    vm.register = register;

    /**
    * @name register
    * @desc Register a new user
    */
    function register() {
      Authentication.register(vm.email, vm.password, vm.username);
    }
}]);
