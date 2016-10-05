var TransloaditClient = require('transloadit');
var transloadit = new TransloaditClient({
    authKey    : '14ce93908b1711e6a1237519c36027c6',
    authSecret : 'a53586cd799b5d4ed5e65d00f6ed5abed208507d'
});

transloadit.addFile('myimage', './lolcat.jpg');

var options = {
    params: {
        template_id: 'xyz789'
    }
};
transloadit.createAssembly(options, function(err, result) {
    if (err) {
        throw new Error(err);
    }

    console.log(result);
});