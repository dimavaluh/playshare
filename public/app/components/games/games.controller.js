app.controller('gamesCtrl', ['$scope', function($scope){
    $scope.genres = [];
    $scope.filterChoiceGenre = '';
    $scope.setFilter = function(genre){
        $scope.filterChoiceGenre = genre.name;  
    };
    $scope.ff = [];

    $scope.allGames.forEach(function(game){
        game.genres.forEach(function(genre){
            $scope.genres.push(genre.name);
        })
    });
    $scope.genres = $scope.genres.filter(function(item, pos) {
        return $scope.genres.indexOf(item) == pos;
    });
    $scope.genres.forEach(function(genreName){
        var genreCount = 0;
       $scope.allGames.forEach(function(game){
           game.genres.forEach(function(gameGenreItem){
               if(genreName == gameGenreItem.name){
                   genreCount++;
               }
           })
       });
        $scope.ff.push({
            name: genreName,
            counts: genreCount
        })
    })
}]);