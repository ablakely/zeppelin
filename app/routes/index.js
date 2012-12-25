module.exports = function(app, zeppelin) {
	app.get('/', function(req, res) {
		res.render('index');
	});

	app.post('/', function(req, res) {
		if (req.body.username === zeppelin.config.httpauth.username && req.body.password === zeppelin.config.httpauth.password) {
			res.render('home');
		} else {
			res.render('index', {err: "Error: Invalid username or password!"});
		}
	});
};