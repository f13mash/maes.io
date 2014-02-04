#!/bin/sh
cd /root/projects/maes-io
forever start --sourceDir /usr/bin/node app.js >> logs/log.txt 2>&1