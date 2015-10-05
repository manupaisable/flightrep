var express = require('express'),
app = express(),
port = 3000;

app.use(express.static(__dirname + '/public'));
app.listen(port);

console.log('Server running at http://localhost' + ':' + port + '/');
