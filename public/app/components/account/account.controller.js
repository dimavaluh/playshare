
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
        $scope.searchGame.title = game.name;
        $scope.searchGame.img = game.image;
    };

    $scope.addGame = function (game) {
        user.gamesCollection.push(game);
        AppServices.saveSession(user);
        
        $scope.searchGame = {};
    };

    $scope.deleteGame = function(game){
        user.gamesCollection = user.gamesCollection.filter(function(el) {
            return el.title !== game.title;
        });
        console.log(user);
        AppServices.saveSession(user);
    };

    $scope.disabled = {};
    $scope.edit = function(item){
        if(item == 'nickName'){
            $scope.disabled.nickName = true;
        }
        if(item == 'email'){
            $scope.disabled.email = true;
        }
        if(item == 'location'){
            $scope.disabled.location = true;
        }
    };
    $scope.saveChanges = function(id, user){

        $http.put('/api/account/' + id, user)
            .then(function successCallback(response) {
                if (response.status == 200){
                    console.log(response.data);
                    AppServices.saveSession(user);
                }
            }, function errorCallback(response) {
                console.log(response.data);
            });
    }
}]);