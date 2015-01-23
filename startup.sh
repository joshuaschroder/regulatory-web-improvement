parts stop apache2
parts start apache2
parts start mysql
git commit -m "Daily Backup for $(date)" -a
./includes/keepalive.sh &