function displayBatteryPercent(percent) {
	var maxChunk = 33;

	var redColor    = 0;
	var yellowColor = 0;
	var greenColor  = 0;

	for (var i = 0; i < percent; i++) {
		if (redColor !== maxChunk) {
			redColor++;
		}

		if (yellowColor !== maxChunk && redColor === maxChunk) {
			yellowColor++;
		}

		if (greenColor !== maxChunk && yellowColor === maxChunk && redColor === maxChunk) {
			greenColor++;
		}
	}

	// each chunk is 33.3 when the percentage is 100.
	if (redColor === maxChunk && yellowColor === maxChunk && greenColor === maxChunk) {
		redColor	+= 0.3;
		yellowColor	+= 0.3;
		greenColor	+= 0.3;
	}

	return {
		percent: percent,
		red: redColor,
		yellow: yellowColor,
		green: greenColor
	};
}

module.exports = function(app, zeppelin) {
	app.get('/home', function(req, res) {
		if (req.signedCookies['auth'] !== undefined) {
			var batStats = displayBatteryPercent(12);

			res.render('home', {stats: {
				battery: batStats
			}});
		} else {
			res.redirect('/');
		}
	});
};