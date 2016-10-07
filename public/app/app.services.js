app.factory('AppServices', ['$firebaseArray', '$http', '$window', '$rootScope',  function($firebaseArray, $http, $window, $rootScope){

    var gamesRef = firebase.database().ref().child('games');

    var genresRef = firebase.database().ref().child('genres');

    var usersRef = firebase.database().ref().child('users');

    return{
        getAllGames : function(){
            return $http.get('/api/games')
        },
        getOneGame: function(title){
            return $http.get('/api/games' + title)
        },
        getAllGenres : function(){
            return $firebaseArray(genresRef);
        },
        getAllUsers: function(){
            return $firebaseArray(usersRef);
        },
        login :  function(email, pass){
            var data = {'email': email, 'password': pass};
            return $http.post('/api/signin', data)
        },
        saveSession: function(user){
            $window.localStorage && $window.localStorage.setItem('signUser', JSON.stringify(user));
            return this;
        },
        getUser: function(){
            return $window.localStorage && $window.localStorage.getItem('signUser');
        },
        
        register: function(nick, email, pass){
            var data = {'nickName': nick, 'email': email, 'password': pass};
            return $http.post('/api/login', data)
        },
        logout: function(nickName){
            return $http.post('/api/logout', {nickName: nickName})

        }
    }

}]);