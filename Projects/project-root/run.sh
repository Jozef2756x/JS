#!/bin/bash

cd student_service && PORT=3001 node server.js &
cd .. && cd student_service && PORT=3002 node server.js &
cd .. && cd course_service && PORT=3003 node server.js &
cd .. && cd registration_service && PORT=3004 node server.js &

sudo nginx -c $(pwd)/nginx/nginx.conf
