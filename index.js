/*
 * zeppelin: Parrot AR.Drone 2.0 Web Interface Application
 *
 * http://github.com/ablakely/zeppelin
 * Written by Aaron Blakely <aaron@ephasic.org>
 */

var WebServer = require('./lib/webserver.js');

function Zeppelin() {
	this.expressapp = new WebServer();
}

Zeppelin.prototype = {
	init: function(cb) {
		this.expressapp.init(cb);
	}
};

module.exports = Zeppelin;

