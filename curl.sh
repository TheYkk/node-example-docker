#!/bin/bash

THEURL='http://0.0.0.0:32769/'

# curl it
while true
do 
  curl --connect-timeout 1 -s $THEURL;
  echo
  sleep 1;
done