'use strict';

(function() {

//creating uses a 2nd array argument to import dependencies
angular.module('myApp', []); //creates a module named myApp

// retrieval has only one argument
var myApp = angular.module('myApp'); //retrieve the module named myApp

myApp
  .config(['MoviesProvider', function(MoviesProvider){
    MoviesProvider.setEndpoint('/api/movies');
  }])


  .run(['$rootScope', 'APP_VERSION', function($rootScope, APP_VERSION) {
    //initialize
    $rootScope.appVersion = APP_VERSION;

  }]);
})();