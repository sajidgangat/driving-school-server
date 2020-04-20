var ResponseBase = require('../response/responseBase');

class ErrorController extends ResponseBase {
    handleError(res, err) {
        this.handleServerError(err, null, res, null);
    }

    handleServerError(err, req, res, next) {
        if (err.message) {
            this.send(res, 412, err.message, null);
        } else {
            this.sendServerError(res, err.message);
        }
    }
}

module.exports = ErrorController;