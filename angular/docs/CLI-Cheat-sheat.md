The Angular CLI creates, manages, builds and test your Angular projects. 
## Docs
- [Angular CLI](https://github.com/angular/angular-cli)

## JSON server
- [DOC](https://www.npmjs.com/package/json-server)
- json-server --watch db.json

## Kill server port 4200
- [Source](https://stackoverflow.com/questions/39091735/port-4200-is-already-in-use-when-running-the-ng-serve-command)
- netstat -a -o -n
- taskkill /F /PID 9428

## Checking Angular version
- ng version

## Upgrade Angular CLI to the latest version
- npm uninstall -g angular-cli
- npm cache clean
- npm install -g @angular/cli@latest

## Create new angular project with SASS support
- ng new name --style=scss

## Serve with sourcemap
- ng serve -sm -ec --o
- ng serve --sourcemap --extractCss
- ng serve --prod
- ng serve --poll=2000

## Generate
ng g module features/feature --routing
ng g component features/feature -is
- ng generate service lib/ngkit/paginator/vds-paginator -is
- ng g module core/errors/notify/errors-notify --flat
- -is 
- ng g module shared/features/gateways/gateways-shared --flat
- ng g component features/home
- ng g component shared/layout/aside-left/dev-menu -is -t
- ng g component features/cruds -is
- ng generate component lazy
- ng generate directive lib/vades-ngkit/directives/vds-go-back
- ng g service shared/layout/layout
- ng generate pipe pipes/translate
- ng generate module  --routing
- ng generate module app-routing --flat --module=app
- ng g module modules
- ng g module core/services/notifications
- ng g module features/components --routing
- ng generate class errors/errors-handler
- ng g c shared/gfx/logo-svg -is -t --flat
- ng g c lib/teeny/button --inline-style --inline-template --flat -v Native
- ng generate class features/dashboard --type=model --flat
- ng g module lib/neouix/nox-panel --routing
- ng g component lib/neouix/nox-panel -is -t
- ng g library name
- ng g component page-header --project neouix
- ng g module lib/neouix/nox-goback
- ng g component lib/neouix/nox-goback -is -t --project=name
- ng generate pipe shared/pipes/ filter
- ng generate guard core/guards/logged-in

## Build
- ng build --prod --deploy-url "ang/"
- ng build --prod --build-optimizer
- ng build --prod --base-href /admin





