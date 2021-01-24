FROM alpine

MAINTAINER tuimac

EXPOSE 4200
EXPOSE 8000

WORKDIR /root

ADD requirements.txt /root/requirements.txt
ADD bashrc /root/.bashrc
ADD entrypoint.sh /root/entrypoint.sh

RUN apk update && \
    apk upgrade && \
    apk add --no-cache bash git icu-dev icu-libs vim nodejs nodejs-npm python3 py3-pip curl && \
    mkdir /etc/vim/backup && \
    mkdir /etc/vim/undo && \
    curl https://raw.githubusercontent.com/tuimac/tools/master/vim/installer/ubuntu.sh | bash && \
    git clone https://github.com/tuimac/execproxy && \
    npm install -g @angular/cli && \
    pip3 install -r requirements.txt && \
    cd execproxy/src/frontend && \
    npm install && \
    cd /root/execproxy && \
    git config --global user.email "tuimac.devadm01@gmail.com" && \
    git config --global user.name "tuimac"

ENTRYPOINT ["/root/entrypoint.sh"]
