var express = require('express'),
app = express(),
port = 3000;

// expose public resources
app.use(express.static(__dirname + '/public'));
app.listen(port);

// use body-parser for processing form inputs
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

// fs for storing data in files for the moment
var fs = require('fs');

app.post('/', function(req, res) {
    console.log('email: ' + req.body.email_service_solution);

    fs.appendFileSync('emails.txt', req.body.email_service_solution + "\n");

    res.redirect("/");

});

console.log('Server running at http://localhost' + ':' + port + '/');
