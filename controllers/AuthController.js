//include controllers
var BaseController = require('./baseController');

var Q = require('q');

class AuthController extends BaseController {
    constructor() {
        super();
    }

    list(req, res) {

    }
}

module.exports = AuthController;