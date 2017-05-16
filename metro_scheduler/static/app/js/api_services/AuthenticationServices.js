/**
* Authentication
*/
angular.module('metroApp')
  .factory('Authentication', ['$cookies', '$http', function Authentication($cookies, $http) {
    /**
    * @name Authentication
    * @desc The Factory to be returned
    */
    var Authentication = {
      register: register,
      login:login
    };

    return Authentication;

    ////////////////////

    /**
    * @name register
    * @desc Try to register a new user
    * @param {string} username The username entered by the user
    * @param {string} password The password entered by the user
    * @param {string} email The email entered by the user
    * @returns {Promise}
    */
    function register(email, password, username) {
      return $http.post('/api/v1/accounts/register', {
        username: username,
        password: password,
        email: email
      });
    }

     function login(username,  password) {
      return $http.get('/api/v1/accounts/login', {
        username: username,
        password: password,
      });
    }
}]);