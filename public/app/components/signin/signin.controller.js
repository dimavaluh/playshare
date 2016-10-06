app.controller('SignInCtrl', ['$scope', '$rootScope', 'AppServices', '$location',  function($scope, $rootScope, AppServices, $location){
    $scope.login = function(email, pass){
        AppServices.login(email, pass)
            .then(function successCallback(response) {
                // here we must redirect user to the homepage
                if (response.status == 200){
                    $rootScope.signUser = response.data;
                    $location.path('#')
                }
            }, function errorCallback(response) {
                // here we get message that nickName or email already exist, so we have to render this message in the view
                console.log(response.data); //

            });
    };
}]);
