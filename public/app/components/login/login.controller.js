app.controller('loginCtrl', ['$scope', '$http', function($scope, $http){
    $scope.sendData = function(name, pass){
        var data = {'email': name, 'pass': pass};
        $http.post('/api/login', data);
    };
}]);