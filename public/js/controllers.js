  'use strict';

  myApp.controller('myController', ['$scope', function($scope) {
    //attach model to scope
    $scope.myFirstName = "Pam";
    //applies a new model to the scope
    //scope is myFirstName

    $scope.myModel = "Mochi";

  }]);