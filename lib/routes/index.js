var express = require('express');
var app = require('../server');
var passport = require('passport')
var routes = require('./handlers');

// passport authentication for admin
app.get('/auth/google', passport.authenticate('google'));
app.get('/auth/google/callback', passport.authenticate('google', { successRedirect: '/', failureRedirect: '/error' }));


app.get('/misc/deck-memorization', require('./handlers/deck-memorization').index);
//Hold a single page. . .
app.get('/', routes.index);

