#!/usr/bin/perl -w
# runcmd.pl: Issues commands on the drone's telnet prompt
#
# Written by Aaron Blakely <aaron@ephasic.org>
#

use strict;
use warnings;
use IO::Socket::INET;

my $ip		= shift;
my $cmd		= shift;

my $socket = new IO::Socket::INET(
	PeerAddr	=> $ip,
	PeerPort	=> 23,
	Proto		=> 'TCP'
) or die $!;

print $socket "$cmd\r\n";
