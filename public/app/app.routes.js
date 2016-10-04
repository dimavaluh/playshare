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
        .when('/login', {
            templateUrl: 'app/components/login/login.view.html',
            controller: 'loginCtrl'
        })
        .when('/signin', {
            templateUrl: 'app/components/signin/signin.view.html',
            controller: 'SignInCtrl'
        })
});