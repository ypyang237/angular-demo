'use strict';

(function() {

  angular.module('myApp')
    .provider('Movies', [function() {
      var endpoint;

      this.setEndpoint = function(url) {
        endpoint = url;
      };

      //injectable service step
      this.$get = ['$http', function($http) { //this is the 'class' or 'Service'

        return { //like a factory
          getMovies: function() {
            return $http.get(endpoint);
          }
        };



      }];


    }]);


})();