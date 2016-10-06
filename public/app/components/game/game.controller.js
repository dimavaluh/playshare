app.controller('gameCtrl', ['$scope', '$routeParams','$firebaseObject', function($scope, $routeParams, $firebaseObject){
    var id = $routeParams.id;
    $scope.genreName = $routeParams.genre;
    var gameRef = firebase.database().ref().child('games').child(id);
    var genreRef = firebase.database().ref().child('genres').orderByChild('name').equalTo($scope.genreName);
    $scope.game = $firebaseObject(gameRef);
    $scope.gamesInGenre = $firebaseObject(genreRef);


}]);