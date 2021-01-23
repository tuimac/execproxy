#!/bin/bash

# Boot Nginx
/usr/sbin/nginx -g 'daemon off;' -c /etc/nginx/nginx.conf 

# Boot Django
python3 /root/backend/manage.py runserver 0:8000
