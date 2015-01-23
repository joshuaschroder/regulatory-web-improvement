#!/bin/sh
GMT=$(date +%H)
MOD=6
HOUR=$(($GMT - $MOD))
echo $HOUR
while [ $HOUR -lt 18 ]
    do echo  "The number of seconds elapsed since 01/01/1970 is `date +%s`."
    sleep 84
    done
done