'use strict';

var app = angular.module('playshare', ['ui.bootstrap', 'ngRoute']);
app.controller('mainCtrl',['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
    $scope.allGames = [];
    $scope.show = true;

    $scope.hideResults = function(){
      if(!$scope.show){
          $scope.show = true;
      }
    };
    
    $scope.setGameTitle = function(title){
        $scope.search = title;
        $scope.show = false;
    };
    $http.get('https://api.mlab.com/api/1/databases/playshare/collections/games?apiKey=75wDbaGNCWreHLJuf6WzCpNIwis23yfv')
        .success(function(date){
            $scope.allGames = date;
        })
}]);
