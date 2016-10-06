app.controller('gamesCtrl', ['$scope', function($scope){

    $scope.setFilter = function(genre){
        return $scope.genre = {genres: genre.name};
    };

}]);