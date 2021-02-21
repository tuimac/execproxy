#!/usr/bin/env python3

import os
import sys
import subprocess

def runcommand(command):
    return subprocess.run(
        command.split(),
        capture_output = True,
        text = True
    )

if __name__ == '__main__':
    command = 'chroot /host'
    runcommand(command)
    command = 'docker ps -a'
    runcommand(command)
