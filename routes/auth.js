var express = require("express");
var router = express.Router();

var AuthController = require('../controllers/AuthController');

var authRoute = function (expressApp) {
    var authController = new AuthController();

    router.use(authController.handleServerError.bind(authController));

    expressApp.use('/api/auth', router);
}

module.exports = authRoute;