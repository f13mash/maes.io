var express = require('express');
var app = require('../server');
var passport = require('passport')
var routes = require('./handlers');

//Hold a single page. . .
app.get('/*', routes.index);

