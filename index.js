/**
 * SGN
 * Main application file
 */

'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var routes = require('./routes/index');
var cors = require('cors');
var multipart = require('connect-multiParty');
var multipartMiddleware = multipart();
    // Setup server
var app = express();

// CORS
app.use(cors());

app.use(bodyParser.urlencoded({limit: '50mb', extended: false}));
app.use(bodyParser.json({limit: '50mb'}));

app.use('/', express.static('public'));

//To parse json data
app.use(bodyParser.json());

app.use(multipartMiddleware);

routes(app);

app.listen(4400, () => {
    console.log('server is listening');
}).setTimeout(600000);