module.exports = function(app, zeppelin) {
	app.get('/home', function(req, res) {
		if (req.signedCookies['auth'] !== undefined) {
			res.render('home');
		} else {
			res.redirect('/');
		}
	});
};