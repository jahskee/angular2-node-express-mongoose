'use strict';
/*jshint esversion: 6 */
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const bodyparser = require('body-parser');
const cookieparser = require('cookie-parser');
const session = require('express-session');

// connect to database with mongoose
require('./components/utils/dbconnect');

// initialize express app
const app = express();
app.use(cookieparser('cscie31-secret'));
app.use(
	session({
		secret: 'cscie31',
		resave: 'true',
		saveUninitialized: 'true'
	})
);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.use('/static', express.static(path.join(__dirname, 'public')));

// setup routes
const webContacts = require('./components/routes/web/web-contacts');
const apiContacts = require('./components/routes/api/api-contacts');

// setup routers and controllers
app.use('/contacts', webContacts);

// setup api
app.use('/api/contacts', apiContacts);

// add angular files
app.use('/', express.static(path.join(__dirname,'../client/dist')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	res.redirect('/');
});

// error handler
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;