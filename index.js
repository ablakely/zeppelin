/*
 * zeppelin: Parrot AR.Drone 2.0 Web Interface Application
 *
 * http://github.com/ablakely/zeppelin
 * Written by Aaron Blakely <aaron@ephasic.org>
 */

var fs        = require('fs');
var arDrone   = require('ar-drone');
var WebServer = require('./lib/webserver.js');

function Zeppelin(config) {
	this.expressapp;

	var instance = this;
	fs.exists(__dirname+'/zeppelin_config.json', function(exists) {
		if (exists) {
			console.log("Loading previous config zeppelin_config.json...");
			instance.config = JSON.parse(fs.readFileSync(__dirname+'/zeppelin_config.json', 'utf8'));
		} else {
			console.log("Creating new config...");
			fs.writeFile(__dirname+'/zeppelin_config.json', JSON.stringify(config), function(err) {
				if (err) throw err;
			});
			instance.config = config;
		}
	});

	this.cwd = __dirname;
	this.runningOnDrone = false;
	this.drone;
	this.navdata;
}

Zeppelin.prototype = {
	init: function(cb) {
		var instance = this;

		this.runningOnDrone = fs.existsSync('/bin/parrotauthdaemon');
		this.drone = arDrone.createClient();
		this.drone.on('navdata', function(data) {
			instance.navdata = data;
		})

		this.expressapp = new WebServer(this);
		this.expressapp.init(cb);
	},
	writeConfig: function(cb) {
		var instance = this;
		fs.writeFile(__dirname+'/zeppelin_config.json', JSON.stringify(instance.config), cb);
	}
};

module.exports = Zeppelin;

