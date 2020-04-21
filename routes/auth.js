var express = require("express");
var router = express.Router();
var isAuthenticated = require("../config/middleware/isAuthenticated");

var AuthController = require('../controllers/AuthController');

var authRoute = function (expressApp) {
    var authController = new AuthController();

    router.post('/login',isAuthenticated, authController.login.bind(authController));
    router.post('/signup', authController.signup.bind(authController));

    router.use(authController.handleServerError.bind(authController));

    expressApp.use('/api/auth', router);
}

module.exports = authRoute;