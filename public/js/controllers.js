  'use strict';
(function() {
    var myApp = angular.module('myApp');

    myApp.controller('myController', [
      '$scope',
      'MainCharacter',
      'CharacterVersionFactory',
      'BookService',
      function($scope, MainCharacter, CharacterVersionFactory, BookService) {
      //attach model to scope
      $scope.myFirstName = "Pam";
      //applies a new model to the scope
      //scope is myFirstName

      $scope.myModel = "Mochi";

      $scope.mainCharacter = MainCharacter;

      $scope.characterVersion = CharacterVersionFactory;

      $scope.books = BookService.getBooks();
    }]);

})();
