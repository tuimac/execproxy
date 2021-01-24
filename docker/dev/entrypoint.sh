#!/bin/bash

# Boot Npm start
#cd /root/execproxy/front
#npm start &&

# Boot Django
BACKEND_LOG='/root/execproxy/src/backend/logs/backend_exec.log'
python3 /root/execproxy/src/backend/manage.py runserver 0:8000 >> $BACKEND_LOG 2>&1
