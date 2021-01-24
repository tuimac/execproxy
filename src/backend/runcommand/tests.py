#!/usr/bin/env python3

import subprocess

if __name__ == '__main__':
    command = 'ls -l'
    result = subprocess.run(command.split())
    print(result)
