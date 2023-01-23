#!/bin/bash

source ~/.nvm/nvm.sh
nvm use
npm install
npm run build
pm2 kill
pm2 --name foragele start npm -- start
pm2 start ~/beans-backend/scripts/keep_db_open.sh --cron "0 * * * *"
pm2 start ~/beans-backend/scripts/update_plants.sh --cron "0 * * * *"
git checkout .