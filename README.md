# zeppelin

[![Build Status](https://secure.travis-ci.org/ablakely/zeppelin.png)](http://travis-ci.org/ablakely/zeppelin)

zeppelin is a project to write a web interface for the [Parrot AR.Drone 2.0](http://ardrone2.parrot.com).  It's built ontop of [express](http://github.com/visionmedia/express) and [node-ar-drone](https://raw.github.com/felixge/node-ar-drone).

## Screenshots
![Home](http://bb.ohsk.net/uploads/Screen%20Shot%202012-12-27%20at%206.51.49%20PM.png)

## Introduction

The AR Drone is an affordable, yet surprisingly capable quadcopter. The drone
itself runs a proprietary firmware that can be controlled via WiFi using the official
FreeFlight mobile app
(available for [iOS](http://itunes.apple.com/us/app/freeflight/id373065271?mt=8) and [Android](https://play.google.com/store/apps/details?id=com.parrot.freeflight&hl=en)).

The purpose of this project is to extend the functionality of the onboard firmware and enable control via web interface.

## AR.Drone 2.0 Node.js
See [node-cross-compiler](https://github.com/felixge/node-cross-compiler) for information on installing node.js on your quadcopter.

## Installing

To install just install clone the project and install the node modules:

```bash
npm install
```

Then run the bash install script, it will guide you through the rest of the install:
```bash
./scripts/deploy.sh
```

## License

All of zeppelin's code is licensed under GPLv3.0.  See the LICENSE file for more information.
