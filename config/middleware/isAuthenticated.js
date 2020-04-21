// This is middleware for restrictng routes a user is not allowed to visit if not logged in
module.exports = function(req, res, next) {
  // If the user is logged in, continue with the request to the restricted route
  if (req.user) {
    return next();
  }

  // If the user isnt' logged in, redirect them to the login page
  const payload = {
    status : 401,
    message: "Not logged in",
    data: []
  }
  
  res.status(401);
  res.send(payload)
};
