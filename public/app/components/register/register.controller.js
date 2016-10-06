app.controller('RegisterCtrl', ['$scope', '$location', 'AppServices', function($scope, $location, AppServices){
    $scope.register = function(nick, email, pass){
        AppServices.register(nick, email, pass).then(function successCallback(response) {
            if (response.status == 200){
                $location.path('#')
            }
        }, function errorCallback(response) {
            // here we get message that nickName or email already exist, so we have to render this message in the view
            console.log(response.data); //

        });
    } 
}]);
