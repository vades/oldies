Pull Gists Module
==========
Pull gists from git and save them to DB

## API
- Production url: `https://api.github.com/users/vades/gists`
- Dev url: `http://localhost:3000/all`

## Run module
- command: `php artisan PullGists:check`
- api: `http://127.0.0.1:8000/api/v1/public/pull-gists`
## Cron job
- [HostGator doc](https://support.hostgator.com/articles/cpanel/what-do-i-put-for-the-cron-job-command?utm_source=cPanel&utm_medium=message&utm_campaign=Cron%2520Jobs)
- command: /opt/cpanel/ea-php71/root/usr/bin/php /home/username/public_html/cron.php
- command: /opt/cpanel/ea-php71/root/usr/bin/php /home/mydloch/laravel/artisan schedule:run


## Run fake gists
- Download gists from: `https://api.github.com/users/vades/gists`
- Save gists to: `storage/app/json/gists.json`
- Run: `json-server --watch storage/app/json/gists.json`

## Run Laravel Mix
- php artisan serve
- npm run watch
- npm run production

## Docs
- [JSON Server](https://www.npmjs.com/package/json-server)
- [Laravel 5.7 CronJob](https://www.tutsmake.com/laravel-5-7-cronjob-task-scheduling-setup-with-example/)
- [JSON Server](https://www.npmjs.com/package/json-server)
