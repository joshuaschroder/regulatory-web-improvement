parts stop apache2
parts start apache2
parts start fcron
git add .
git commit -m "Daily Backup for $(date)" -a
git push origin master
./includes/keepalive.sh &