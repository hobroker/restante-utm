#!/usr/bin/env bash

set -e

git pull origin master
npm install
npm run build
pm2 start --name restante server/index.js
