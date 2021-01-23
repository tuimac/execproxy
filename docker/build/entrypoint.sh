#!/bin/bash

# Boot Nginx
/usr/sbin/nginx -g 'daemon off;' -c /etc/nginx/nginx.conf

# Boot Django
cd /root/backend
python3 manage.py runserver 0:8000
