#!/bin/sh

if [ "$1" == "dev" ]; then
    docker-compose -f docker-compose.yml -f docker-compose.dev.yml up --build
else
    docker-compose up
fi
