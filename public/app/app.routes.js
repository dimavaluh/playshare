app.config(function($routeProvider){
    $routeProvider
        .when('/games/:id', {
            templateUrl: 'app/components/game/game.view.html',
            controller: 'gameCtrl'
        })
        .when('/games', {
            templateUrl: 'app/components/games/games.view.html',
            controller: 'gamesCtrl'
        })
});