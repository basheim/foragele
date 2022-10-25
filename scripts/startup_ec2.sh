#!/bin/bash

source ~/.nvm/nvm.sh
nvm use
npm install
npm run build
pm2 kill
pm2 --name foragele start npm -- start
pm2 start ~/beans-backend/scripts/keep_db_open.sh --cron "0 * * * *"
pm2 start ~/beans-backend/scripts/python/plants/plant_refresh.py --cron "0 * * * *" -- -s "~/beans-backend/scripts/python/plants/plant_replace.py" -i "~/beans-backend/scripts/python/plants/data/plant_data.csv" -j "~/beans-backend/scripts/python/plants/data/images"