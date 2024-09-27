const express = require('express');
const passport = require('passport');
const router = express.Router();
const asyncWrap = require('../utils/asyncWrap');
const { saveRedirectUrl } = require('../middlewares/authorizor');
const { logoutUser, signupUser, loginUser } = require('../controller/users');

router.route('/signup')
    .get((req, res) => res.render('users/signup'))
    .post(asyncWrap(signupUser));

router.route('/login')
    .get((req, res) => res.render('users/login'))
    .post(saveRedirectUrl, passport.authenticate('local', { failureRedirect: '/listings/login', failureFlash: true }), loginUser);

router.get('/logout', logoutUser);

module.exports = router;