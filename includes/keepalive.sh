#!/bin/sh
HOUR=$(date +%H)

while [ $HOUR -lt 23 ]
    do echo  "The number of seconds elapsed since 01/01/1970 is `date +%s`."
    sleep 84
    done
done