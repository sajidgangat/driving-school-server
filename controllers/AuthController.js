//include controllers
var BaseController = require('./baseController');

class AuthController extends BaseController {
    constructor() {
        super();
    }

    login(req, res) {
        this.send(res, 200, "ok", []);
    }
}

module.exports = AuthController;