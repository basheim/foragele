#!/bin/bash

source ~/.nvm/nvm.sh
nvm use
npm install
npm run build
pm2 kill
pm2 --name foragele start npm -- start