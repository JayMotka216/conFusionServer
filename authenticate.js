var passport = require('passport');
var LocalStratagy = require('passport-local').Strategy;
var User = require('./models/user');

exports.local = passport.use(new LocalStratagy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());