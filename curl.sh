#!/bin/bash

THEURL='http://IP YAZILACAK:8080/'


# curl it
while true
do 
  curl --connect-timeout 1 -s $THEURL;
  echo
  sleep 1;
done