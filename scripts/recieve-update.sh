#!/bin/bash
# recieve-update: ran when recieving zeppelin updates via USB key
#
# Written by Aaron Blakely <aaron@ephasic.org>
#

USB_KEY="/data/video/usb"

# Conserve space on the root partition by
# putting on the video partition.
#
if [[ !-d /data/zeppelin-support  ]]; then
	if [[ -d /data/video/usb ]]; then
		cp -ap /data/video/usb/zeppelin/support /data/zeppelin-support
	else
		cp -ap /data/video/zeppelin/support /data/zeppelin-support
	fi
fi


if [[ -d /zeppelin ]]; then
	rm -rf "$USB_KEY/zeppelin/support" # remove ffmpeg to prevent filling the / partition.
	cp -ap "$USB_KEY/zeppelin" /
else
	if [[ -d /data/video/usb ]]; then
		cp -ap /data/video/usb/zeppelin /data/video
	fi

	mv -ap /data/video/zeppelin /zeppelin
	cp /etc/init.d/rcS /etc/init.d/rcS~
	echo '/zeppelin/bin/zeppelin' >> /etc/init.d/rcS
fi