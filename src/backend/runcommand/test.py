#!/usr/bin/env python3

import os
import sys
import subprocess
import time

if __name__ == '__main__':
    p = subprocess.Popen('chroot /host', shell=True, stdin=subprocess.PIPE, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    command = 'docker ps -a' +  '\n'
    stdout, stderr = p.communicate(input=command.encode())
    print('################stdout##############')
    print(stdout.decode().splitlines())
    print('################stderr##############')
    print(stderr.decode().splitlines())
