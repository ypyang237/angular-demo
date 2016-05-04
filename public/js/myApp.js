'use strict';

//creating uses a 2nd array argument to import dependencies
angular.module('myApp', []); //creates a module named myApp

// retrieval has only one argument
var myApp = angular.module('myApp'); //retrieve the module named myApp

myApp
  .config(function() {
    //config

  })
  .run(function() {
    //initialize

  });

  myApp.controller('myController', ['$scope', function($scope) {
    //attach model to scope
    $scope.myFirstName = "Pam";
    //applies a new model to the scope
    //scope is myFirstName
  }])