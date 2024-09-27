const User = require('../models/user');

module.exports.signupUser = async (req, res, next) => {
    try {
        const newUser = new User({ username: req.body.username, email: req.body.email });
        const registeredUser = await User.register(newUser, req.body.password);
        console.log(registeredUser);
        req.logIn(registeredUser, (err) => {
            if (err) return next(err);
            req.flash('success', 'Welcome to AirBnB');
            res.redirect('/listings');
        });
    } catch (err) {
        req.flash('error', err.message);
        res.redirect('/listings/signup');
    }
}

module.exports.loginUser = (req, res) => {
    req.flash('success', `Welcome back ${req.body.username}`);
    const redirectUrl = res.locals.redirectUrl || '/listings';
    res.redirect(redirectUrl);
}

module.exports.logoutUser = (req, res, next) => {
    req.logOut((err) => {
        if (err) return next(err);
        req.flash('success', 'You are logged out');
        res.redirect('/listings');
    })
}