/**
* Register controller
*/
(function () {
  'use strict';

  angular
    .angular.module('metroApp')
    .controller('RegisterController', RegisterController);

  RegisterController.$inject = ['$location', '$scope', 'Authentication'];

  /**
  * @namespace RegisterController
  */
  function RegisterController($location, $scope, Authentication) {
    var vm = this;

    vm.register = register;

    /**
    * @name register
    * @desc Register a new user
    */
    function register() {
      Authentication.register(vm.email, vm.password, vm.username);
    }
  }
})();


