app.controller('gameCtrl', ['$scope', '$routeParams', function($scope, $routeParams){
    $scope.id = $routeParams.id;
    $scope.game = {
        name: '',
        deck: ''
    };
    $scope.allGames.filter(function(e){
        if(e.id == $scope.id){
            $scope.game = e;
        }
    });
    console.log($scope.game);
}]);