
app.controller('accountCtrl', ['$scope', 'AppServices', function($scope, AppServices){

    $scope.user = AppServices.getUser($scope);

    AppServices.gg();


}]);