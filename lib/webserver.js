/*
 * webserver.js: Express.js Interface Module
 *
 * Written by Aaron Blakely <aaron@ephasic.org>
 */

var express = require('express');

function WebServer() {
	this.app = express();
	this.server;
}

WebServer.prototype = {
	init: function(cb) {
		
