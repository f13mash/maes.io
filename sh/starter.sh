#!/bin/sh
cd /root/projects/maes-io
forever start --sourceDir app.js >> logs/log.txt 2>&1