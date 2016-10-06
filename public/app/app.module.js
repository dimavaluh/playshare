'use strict';

var config = {
    apiKey: "AIzaSyA37BdfpXgV1I1htAachK6W3JQ4-1HwJWg",
    authDomain: "playshare-592f0.firebaseapp.com",
    databaseURL: "https://playshare-592f0.firebaseio.com",
    storageBucket: "playshare-592f0.appspot.com",
    messagingSenderId: "91037103209"
};
firebase.initializeApp(config);

var app = angular.module('playshare', ['ngRoute', 'firebase']);

app.controller('mainCtrl',['$scope', 'AppServices', '$location', function($scope, AppServices, $location){

    $scope.allGames = AppServices.getAllGames();

    $scope.allGenres = AppServices.getAllGenres();

    $scope.users = AppServices.getAllUsers();

    $scope.logout = function(signUser){
        var nickName = signUser.nickName;
        AppServices.logout(nickName)
                .then(function successCallback(response) {
                    // here we must redirect user to the homepage
                    if (response.status == 200){
                        $location.path('#')
                    }
                }, function errorCallback(response) {
                    // here we get message that nickName or email already exist, so we have to render this message in the view
                    console.log(response.data); //

                });
        };

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

}]);
