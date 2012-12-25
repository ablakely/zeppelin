/*
 * zeppelin: Parrot AR.Drone 2.0 Web Interface Application
 *
 * http://github.com/ablakely/zeppelin
 * Written by Aaron Blakely <aaron@ephasic.org>
 */

var WebServer = require('./lib/webserver.js');

function Zeppelin() {
	this.expressapp;
}

Zeppelin.prototype = {
	init: function(cb) {
		this.expressapp = new WebServer(this);
		this.expressapp.init(cb);
	}
};

module.exports = Zeppelin;

