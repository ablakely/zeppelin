#!/bin/sh
# pre-init.sh: Zeppelin Pre-init System
#
# Zeppelin has the ability to replace the existing init system, which allows for
# for customization of the drone.
#
# This file is derived for /etc/init.d/rcS and it's follow up calls
# It sets up the essentials, then allows zeppelin to finish the rest.
#
# Written by Aaron Blakely <aaron@ephasic.org>
#

ZEPPELIN_DIR=`cd .. && pwd`
ZEPPELIN_STARTER="${ZEPPELIN_DIR}/bin/zeppelin"