parts stop apache2
parts start apache2
#parts stop fcron
#parts start fcron
#parts start mysql
git add .
git commit -m "Daily Backup for $(date)" -a
git push origin master
./includes/keepalive.sh &