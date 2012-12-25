/*
 * webserver-router.js: Express.js Auto-Router
 *
 * Written by Aaron Blakely <aaron@ephasic.org>
 */

var fs = require('fs');

function zeppelinRouter(app, instance) {
        this.app    = app;
        this.cruzrr = instance;
}

zeppelinRouter.prototype = {
        loadRoutes: function(path) {
                var app = this.app, instance = this;
                fs.readdirSync(path).forEach(function(file) {
                        require(path+'/'+file)(app, instance);
                });
        }
};

module.exports = zeppelinRouter;