/*
 * wireless.js: Wireless Interface Module
 *
 * This module provides high level Zeppelin APIs to do things
 * such as configure the drone's wireless chipset.
 *
 * Written by Aaron Blakely <aaron@ephasic.org>
 */

var execSync = require('exec-sync');

function ARDroneWireless(instance) {
	this.zeppelin = instance;
	this.networkInterfaces = os.networkInterfaces();
	this.config = this.zeppelin.config.network;

	instance.wireless = this; // allow this class to be accessed throughout zeppelin vis zeppelin.wireless
}

ARDroneWireless.prototype = {
	init: function(cb) {
		//@TODO: this
	}
};

module.exports = ARDroneWireless;