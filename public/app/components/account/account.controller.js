
app.controller('accountCtrl', ['$scope', 'AppServices','$http', function($scope, AppServices, $http){
    var user = $scope.signUser;
    
    $scope.show = false;
    $scope.hideResults = function(){
        if(!$scope.show){
            $scope.show = true;
        }
    };
    $scope.searchGame = {};

    $scope.choose = function(game){
        $scope.show = false;
        $scope.searchGame.title = game.title;
        $scope.searchGame.img = game.img;
    };

    $scope.addGame = function (game) {
        user.gamesCollection.push(game);
        AppServices.saveSession(user);
        
        $scope.searchGame = {};
    };

    $scope.saveChanges = function(nickName, user){

        $http.put('/api/account/' + nickName, user)
            .then(function successCallback(response) {
                if (response.status == 200){
                    AppServices.saveSession(user);
                }
            }, function errorCallback(response) {
                console.log(response.data);
            });
    }
}]);