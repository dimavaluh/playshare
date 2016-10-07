var Dropbox = require('dropbox');
var dbx = new Dropbox({ accessToken: 'qEg-SAIY6lAAAAAAAAAACZQjUOZF1xSNkuK9SBBUlc-8-Vo_MXZImTzBVb4lSU7M' });
dbx.filesListFolder({path: ''})
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.log(error);
    });
dbx.filesCreateFolder('./avatars');