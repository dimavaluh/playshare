app.controller('gameCtrl', ['$scope', '$routeParams', function($scope, $routeParams){
    $scope.id = $routeParams.id;
    
    $scope.gamesInThisGenre =[];
    $scope.allGames.filter(function(e){
        if(e.id == $scope.id){
            $scope.game = e;
            $scope.genre = $scope.game.genres[0].name;
        }
    });

    $scope.allGames.forEach(function (game){
        game.genres.forEach(function(genre){
            if(genre.name == $scope.genre){
                $scope.gamesInThisGenre.push(game);
            }
        })
    })
}]);