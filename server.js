const express = require('express'),
app = express(),
path = require('path'),
bodyParser = require('body-parser'),
port = process.env.PORT || 8080,
passport = require('./strategies/user.strategy'),
session = require('express-session')
index = require('./routes/index');

//uses
app.use(express.static('public'));

app.use(bodyParser.json());


app.use(session({
	secret: 'secret',
	key: 'user', // this is the name of the req.variable. 'user' is convention, but not required
	resave: 'true',
	saveUninitialized: false,
	cookie: {
		maxage: 60000,
		secure: false
	}
}));

app.use(passport.initialize());
app.use(passport.session());

// routes
app.use('/', index);

app.listen(port, function() {
	console.log('Listening on port:', port);
}); //
app.use(function(req, res) {
  res.sendFile('index.html', {
    root: 'public/views/'
  });
});
