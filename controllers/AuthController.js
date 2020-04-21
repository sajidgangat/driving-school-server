//include controllers
var BaseController = require('./baseController');
var db = require("../models");

class AuthController extends BaseController {
    constructor() {
        super();
    }

    login(req, res) {
        this.send(res, 200, "ok", []);
    }

    async signup(req, res) {
        const data = req.body;

        try{
            await db.Users.create(data);
            this.send(res, 500, "User created successfully!", []);
        }catch (e) {
            this.send(res, 500, "Invalid input", e);
        } finally {
        }
    }
}

module.exports = AuthController;