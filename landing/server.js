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

    // TODO: refactor this code
    // process email signup    
    var new_email_signup_service = req.body.email_service_solution;
    var new_email_signup_compensation = req.body.email_service_compensation;
    var new_email_signup_engage = req.body.email_service_engage;

    var signup_source = "";
    if (!!new_email_signup_service) {
        new_email = new_email_signup_service;
        signup_source = "signup_service";
    }
    if (!!new_email_signup_compensation) {
        new_email = new_email_signup_compensation;        
        signup_source = "signup_compensation";
    }
    if (!!new_email_signup_engage) {
        new_email = new_email_signup_engage;
        signup_source = "signup_engage"
    }
    // END TODO: refactor this code

    fs.appendFileSync('emails.csv', new_email + "; " + signup_source + ";\n");

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
