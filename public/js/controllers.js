  'use strict';
(function() {
    var myApp = angular.module('myApp');

    myApp.controller('myController', [
      '$scope',
      'MainCharacter',
      'CharacterVersionFactory',
      'BookService',
      'Movies',
      function($scope, MainCharacter, CharacterVersionFactory, BookService, Movies) {
      //attach model to scope
      $scope.myFirstName = "Pam";
      //applies a new model to the scope
      //scope is myFirstName

      $scope.myModel = "Mochi";

      $scope.mainCharacter = MainCharacter;

      $scope.characterVersion = CharacterVersionFactory;

      $scope.BookService = BookService;

      $scope.movies = [];
      Movies.getMovies().then(function(response) {
        $scope.movies = response.data;
      });

    }]);

})();
