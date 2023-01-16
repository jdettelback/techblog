const withAuth = (req, res, next) => {
  // If the user is not logged in, redirect the request to the login route
  if (!req.session.loggedIn) {
    //console.log("withAuth not logged in");
    res.redirect('/login');
  } else {
    //console.log("withAuth logged in");
    next();
  }
};

module.exports = withAuth;
