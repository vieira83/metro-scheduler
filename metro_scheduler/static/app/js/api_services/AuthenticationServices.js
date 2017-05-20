/**
* Authentication
*/
angular.module('metroApp')
  .factory('Authentication', ['$cookies', '$http', function Authentication($cookies, $http) {
    /**
    * @name Authentication
    * @desc The Factory to be returned
    */
    var user;
    var Authentication = {
      register: register,
      login:login,
      setUser:setUser,
      isAuthenticated:isAuthenticated
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

    function setUser(aUser){
        //@todo set cookie user
        user = aUser;
    }

    function isAuthenticated(aUser){
        return(aUser)? true : false;
    }
    function register(email, password, username) {
      return $http.post('/api/accounts/register', {
        username: username,
        password: password,
        email: email
      });
    }

     function login(username,  password) {
      return $http.get('/api/accounts/login/'+ username, {
        username: username,
        password: password,
      });
    }
}]);