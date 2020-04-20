var authRoute = require('./auth');

var routes = function (drivingSchool) {
    //CORS Setting
    drivingSchool.use(function (req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        next();
    });

    authRoute(drivingSchool);
};

module.exports = routes;