'use strict';

(function() {

//creating uses a 2nd array argument to import dependencies
angular.module('myApp', [ 'ngRoute' ]); //creates a module named myApp  //add dependencies in the array here

// retrieval has only one argument
var myApp = angular.module('myApp'); //retrieve the module named myApp

myApp
  .config([
    'MoviesProvider',
    '$routeProvider',
   function(MoviesProvider, $routeProvider){
    MoviesProvider.setEndpoint('/api/movies');

    $routeProvider
      .when('/', {
        templateUrl : 'views/default.html'
      })
      .when('/books', {
        templateUrl: 'views/books.html',
        controller : 'BooksController'
      })
      .when('/movies', {
        templateUrl: 'views/movies.html',
        controller : 'MoviesController'
      })
      .when('/other', {
        templateUrl: 'views/other.html',
        controller : 'OtherController'
      });

  }])


  .run(['$rootScope', 'APP_VERSION', function($rootScope, APP_VERSION) {
    //initialize
    $rootScope.appVersion = APP_VERSION;

  }]);
})();