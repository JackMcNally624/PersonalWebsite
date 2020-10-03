var express = require('express');
var app = express();

//Specify a port
var port = process.env.port || 5000;

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

//Serve up files in public folder
app.use('/', express.static(__dirname + '/public'));

//Start up the website
app.listen(process.env.PORT || 5000);
console.log('Listening on port: ', port);

app.use(express.json({ limit: '1mb' }));
