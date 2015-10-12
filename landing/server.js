var bodyParser = require('body-parser');
var fs = require('fs');
var nodemailer = require('nodemailer');

var express = require('express'),
app = express(),
port = 3000;

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port);
console.log('Server running at http://localhost' + ':' + port + '/');

app.post('/', function(req, res) {
    // don't keep user waiting
    res.redirect("/");

    // process email signup
    var new_email = req.body.email_service_solution;
    fs.appendFileSync('emails.txt', new_email + "\n");
    // notify_email_signup(new_email);

});

function notify_email_signup(new_email) {
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'info@flightrep.com',
            pass: 'password'
        }
    });

    var mailOptions = {
        from: 'FlightRep ✔ <info@flightrep.com>',
        to: 'manuelpais@gmail.com', 
        subject: '[FlightRep] New signup! ✔',
        text: new_email + ' ✔',
        html: "<b>" + new_email + ' ✔</b>'
    };

    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
    });
};
