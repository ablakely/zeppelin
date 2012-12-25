module.exports = function(app, zeppelin) {
	app.get('/system', function(req, res) {
		res.render('system', {stats: {
			process: process,
			runningOnDrone: zeppelin.runningOnDrone,
			drone: zeppelin.navdata
		}});
	});

	app.post('/system/update-user', function(req, res) {
		zeppelin.config.httpauth.username = req.body.username;
		zeppelin.config.httpauth.password = req.body.password;
		zeppelin.writeConfig(function() {
			res.redirect('/system');
		});
	});
};