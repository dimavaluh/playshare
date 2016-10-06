app.config(function($routeProvider){
    $routeProvider
        .when('/games/genre/:genre/:id', {
            templateUrl: 'app/components/game/game.view.html',
            controller: 'gameCtrl'
        })
        .when('/games', {
            templateUrl: 'app/components/games/games.view.html',
            controller: 'gamesCtrl'
        })
        .when('/account/:nick', {
            templateUrl: 'app/components/account/account.view.html',
            controller: 'accountCtrl'
        })
        .when('/signin', {
            templateUrl: 'app/components/signin/signin.view.html',
            controller: 'SignInCtrl'
        })
        .when('/register', {
            templateUrl: 'app/components/register/register.view.html',
            controller: 'RegisterCtrl'
        })
        .when('/logout', {
            controller: 'LogoutCtrl'
        })
});