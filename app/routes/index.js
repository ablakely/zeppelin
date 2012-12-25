module.exports = function(app, zeppelin) {
	app.get('/', function(req, res) {
		res.render('index');
	});
};