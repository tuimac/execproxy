#!/bin/bash

URL='http://localhost:8000/runcommand'

[[ -z $URL ]] && { echo 'There is no argument.'; exit 1; }

RESULT=$(curl -X POST -H "Content-Type: application/json" \
    -d '{"Name": "test", "command": "docker ps -a"}' \
    $URL)

echo $RESULT | jq -r
