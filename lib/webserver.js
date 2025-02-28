/*
 * webserver.js: Express.js Interface Module
 *
 * Written by Aaron Blakely <aaron@ephasic.org>
 */

var http    = require('http');
var express = require('express');
var router  = require('./webserver-router.js');

function WebServer(instance) {
	this.zeppelin = instance;
	this.app;
	this.server;
	this.router;
}

WebServer.prototype = {
	init: function(cb) {
		this.app = express();
		var instance = this, app = this.app;

		app.configure(function() {
			app.set('port', process.env.PORT || 3000);
			app.set('views', instance.zeppelin.cwd+'/app/views');
			app.set('view engine', 'ejs');
			app.use(express.favicon());
			app.use(express.logger('dev'));
			app.use(express.bodyParser());
			app.use(express.methodOverride());
			app.use(express.cookieParser('fcVT9RH5pitYyHwHX9KDPa4YdWQb8jKVPXYqhAXZQJTaA3OrrQjNkdi'));
			app.use(express.static(instance.zeppelin.cwd+'/app/public'));
		});

		app.configure('development', function() {
			app.use(express.errorHandler());
		});

		this.router = new router(app, this.zeppelin);
		this.router.loadRoutes(instance.zeppelin.cwd+'/app/routes');

		this.server = http.createServer(app);
		this.server.listen(app.get('port'), cb);
	}
};

module.exports = WebServer;