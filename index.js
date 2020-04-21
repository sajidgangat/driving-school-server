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
var session = require("express-session");
var passport = require("./config/passport");
var db = require("./models");
var PORT = process.env.PORT || 8080;
// Setup server
var app = express();

// CORS
app.use(cors());

app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }));
app.use(bodyParser.json({ limit: '50mb' }));

app.use('/', express.static('public'));

//To parse json data
app.use(bodyParser.json());

app.use(multipartMiddleware);
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

routes(app);

db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
    });
}).catch(e => {
    console.log(e);
});