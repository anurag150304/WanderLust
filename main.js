if (process.env.NODE_ENV != "production") require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/user');
const listingsRoute = require('./routes/listings');
const reviewsRoute = require('./routes/review');
const usersRoute = require('./routes/users');
const errHandler = require('./utils/errHandler');

const App = express();
const port = 8080;
const url = `${process.env.ATLASDB_URL}`;

main().then(() => console.log('connection successfull')).catch(err => console.log(err));

async function main() {
    await mongoose.connect(url);
}

const store = MongoStore.create({
    mongoUrl: url,
    crypto: {
        secret: `${process.env.SECRET}`
    },
    touchAfter: 24 * 3600
});

const sessionOptions = {
    store,
    secret: `${process.env.SECRET}`,
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + (7 * 24 * 60 * 60 * 1000),
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true
    }
};

App.engine('ejs', ejsMate);
App.set('view engine', 'ejs');
App.set('views', path.join(__dirname, 'views'));
App.use(express.static(path.join(__dirname, 'public')));
App.use(express.static(path.join(__dirname, 'images')));
App.use(express.urlencoded({ extended: true }));
App.use(express.json());
App.use(methodOverride('_method'));
App.use(session(sessionOptions));
App.use(flash());

App.use(passport.initialize());
App.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

App.use((req, res, next) => {
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    res.locals.user = req.user;
    next();
});

App.get('/', (req, res) => {
    res.redirect('/listings');
});

App.use('/listings', listingsRoute);
App.use('/listings/id=:id', reviewsRoute);
App.use('/listings', usersRoute);

App.all('*', (req, res, next) => next(new errHandler(404, 'Page Not Found')));

App.use((err, req, res, next) => {
    let { status = 500, message = 'Something went wrong' } = err;
    if (message == 'Page Not Found') {
        res.status(status).render('listings/notFound');
    }
    else {
        res.status(status).render('listings/error', { message });
    }
});
App.listen(port, () => console.log(`Server listining on port ${port}`));