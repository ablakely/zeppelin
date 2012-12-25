#!/bin/sh
# deploy.sh: Deploys and installs Zeppelin
#
# Written by Aaron Blakely <aaron@ephasic.org>

ZEPPELIN_DIR="$PWD/.."
DRONE_FTP_ROOT="/data/video"
INSTALLED=0

echo "Zeppelin Deployment Automator"
echo
echo "Deployment Methods:"
echo "	1) Via FTP/Telnet"
echo "	2) Via USB/Telnet"
echo 
read -p "Please select a deployment method: " depmethod 

# FTP Install
#

if [[ $depmethod == "1" ]]; then
	echo "Please ensure that you are connected to your drone's wifi network."
	echo
	read -p "Enter the IP of the drone [192.168.1.1]: " droneip
	echo "Copying files to drone via FTP..."
	ftp -u "ftp://anonymous:anonymous@${droneip}/zeppelin $ZEPPELIN_DIR/../zeppelin"
	INSTALLED=1
	echo "Done."
	echo
fi

# USB Install
#
# This method is the one I use due to OS X's FTP binary
# lack of functionality.
# -ablakely
#

if [[ $depmethod == "2" ]]; then
	echo "Please ensure that your USB key is mounted."
	echo
	read -p "USB Device Mountpoint: " usbmount
	if [[ ! -d $usbmount ]]; then
		echo "Error: No such file or directory."
		exit
	else
		echo "Copying files to [$usbmount]..."
		mkdir $usbmount/zeppelin
		cp -ap $ZEPPELIN_DIR/../zeppelin $usbmount/
		INSTALLED=1
		echo "Done."
		echo
	fi
fi

# Telnet
#

if [[ $depmethod == "2" ]]; then
	echo "Please ensure that you are connected to your drone's wifi network."
	echo
	read -p "Enter the IP of the drone [192.168.1.1]: " droneip
	if [[ $droneip == "" ]]; then
		droneip="192.168.1.1"
	fi
fi

if [[ $INSTALLED == "1" ]]; then
	read -p "Press ENTER to continue to install via telnet to $droneip." t
	echo "Installing Zeppelin on drone..."
	{ echo "cd ${DRONE_FTP_ROOT}/ && mv zeppelin / && rm -rf zeppelin && cp /etc/init.d/rcS /etc/init.d/rcS~ && echo '/zeppelin/bin/zeppelin' >> /etc/init.d/rcS && exit"; sleep 1; } | telnet $droneip
	echo "Done."
	echo
	echo "To start zeppelin you need to reboot your device."
	read -p "Would you like to do so now? [y/N]: " rebootdev
	if [[ $rebootdev == "Y" || $rebootdev == "y" ]]; then
		{ echo "reboot"; sleep 1; } | telnet $droneip
		echo "Device is rebooting."
	fi
	exit
fi
