#!/bin/bash

CONTAINER_ID=$(docker ps -a --filter "name=foragele" -q)

if [ -n "${CONTAINER_ID}" ]; then
  docker stop "${CONTAINER_ID}"
  docker rm "${CONTAINER_ID}"
fi

docker pull basheim/foragele:latest

docker run -dp 3000:3000 --name foragele basheim/foragele:latest
