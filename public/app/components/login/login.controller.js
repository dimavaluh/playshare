app.controller('loginCtrl', ['$scope', '$http', function($scope, $http){
    $scope.sendData = function(nick, email, pass){
        var data = {'nickName': nick, 'email': email, 'password': pass};
        $http.post('/api/login', data);
    };
}]);
