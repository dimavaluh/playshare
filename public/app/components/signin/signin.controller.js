app.controller('SignInCtrl', ['$scope', '$http', function($scope, $http){
    $scope.sendData = function(email, pass){
        var data = {'email': email, 'password': pass};
        $http.post('/api/signin', data)
            .then(function successCallback(response) {
                // here we must redirect user to the homepage
                if (response.status == 200) console.log('Successfully created an account');
            }, function errorCallback(response) {
                // here we get message that nickName or email already exist, so we have to render this message in the view
                console.log(response.data); //

            });
    };
}]);
