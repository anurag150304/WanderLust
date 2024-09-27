module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.session.redirectURL = req.originalUrl;
        req.flash('error', 'You must be logged in');
        return res.redirect('/listings/login');
    }
    next();
}

module.exports.saveRedirectUrl = (req, res, next) => {
    if (req.session.redirectURL) {
        res.locals.redirectUrl = req.session.redirectURL;
    }
    next();
}