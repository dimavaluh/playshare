app.controller('gameCtrl', ['$scope', '$routeParams','AppServices', function($scope, $routeParams, AppServices){
    var title = $routeParams.name;
    $scope.genreName = $routeParams.genre;
    AppServices.getOneGame(title).then(function successCallback(response) {
        if (response.status == 200){
            return $scope.allGames = response.data;
        }
    }, function errorCallback(response) {
        console.log(response.data);

    });

}]);