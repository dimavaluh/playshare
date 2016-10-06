app.factory('AppServices', ['$firebaseArray', '$firebaseObject', '$http', function($firebaseArray, $firebaseObject, $http, $rootScope){

    var gamesRef = firebase.database().ref().child('games');

    var genresRef = firebase.database().ref().child('genres');

    var usersRef = firebase.database().ref().child('users');

    return{
        getAllGames : function(){
            return $firebaseArray(gamesRef);
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
        register: function(nick, email, pass){
            var data = {'nickName': nick, 'email': email, 'password': pass};
            return $http.post('/api/login', data)
        },
        gg: function(){
            return gamesRef.orderByChild('title').equalTo('Battlefield 4').on('child_added', function(snap){
                console.log(snap.key);
            });

        }
    }

}]);