FROM alpine

MAINTAINER tuimac

WORKDIR /root

ADD build /root/frontend
ADD backend /root/backend
ADD nginx.conf /etc/nginx/nginx.conf
ADD entrypoint.sh /root/entrypoint.sh

RUN apk update \
    apk upgrade \
    apk add --no-cache nginx python3

ENTRYPOINT ["/root/entrypoint.sh"]
