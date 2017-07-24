const express = require('express');
const app = express();
// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));

app.get('/', function(req, res) {
    res.send('/login');
    console.log('Teste 1');
});

app.get('/admin', function(req, res) {
    res.send('/admin');
    console.log('Teste 2');
});

// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8080);