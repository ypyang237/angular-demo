'use strict';

(function() {

angular.module('myApp')

.controller('OtherController', [
      '$scope',
      'MainCharacter',
      'CharacterVersionFactory',
      function($scope, MainCharacter, CharacterVersionFactory) {
      //attach model to scope
      $scope.myFirstName = "Pam";
      //applies a new model to the scope
      //scope is myFirstName

      $scope.myModel = "Mochi";

      $scope.mainCharacter = MainCharacter;

      $scope.characterVersion = CharacterVersionFactory;



    }]);


}());