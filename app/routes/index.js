module.exports = function(app, zeppelin) {
	app.get('/', function(req, res) {
		if (req.signedCookies['auth'] !== undefined) {
			res.redirect('/home');
		} else {
			res.render('index', {err: null});
		}
	});

	app.post('/', function(req, res) {
		if (req.body.username === zeppelin.config.httpauth.username && req.body.password === zeppelin.config.httpauth.password) {
			res.cookie('auth', 'zeppelin-auth-key', {signed: 'true'});
			res.redirect('/home');
		} else {
			res.render('index', {err: "Error: Invalid username or password!"});
		}
	});
};