#!/bin/sh

docker compose --file docker-compose.yaml --file docker-compose.dev.yaml up --build
