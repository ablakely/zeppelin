module.exports = function(app, zeppelin) {
	app.get('/logout', function(req, res) {
		res.clearCookie('auth');
		res.redirect('/');
	});
};