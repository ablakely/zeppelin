module.exports = function(app, zeppelin) {
	app.get('/camera-stream.png', function(req, res) {
		//res.header({'Content-Type': 'image/png'});
		//var pngStream = zeppelin.drone.createPngStream();

		//pngStream.on('data', function(data) {
		//	console.log(data);
		//	res.end(200, data);
		//});
	});
};