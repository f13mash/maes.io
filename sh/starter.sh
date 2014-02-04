#!/bin/sh
cd /root/projects/maes-io
forever start app.js >> logs/log.txt 2>&1