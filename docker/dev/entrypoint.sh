#!/bin/bash

# Boot Npm start
#cd /root/execproxy/front
#npm start &&

# Boot Django
cd /root/execproxy/backend
python3 manage.py runserver 0:8000
