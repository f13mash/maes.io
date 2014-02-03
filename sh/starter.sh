#!/bin/sh

if [ $(ps -e -o uid,cmd | grep $UID | grep node  | wc -l | tr -s "\n") -eq 0 ]
then
        export PATH=/usr/local/bin:$PATH
        cd /root/projects/maes-io
        forever start --sourceDir /usr/bin/node app.js >> logs/log.txt 2>&1
fi