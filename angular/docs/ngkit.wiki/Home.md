## How to structure Angular project
A good guideline to follow is to split Angular application into at least three modules:
 1. Core.
 2. Features.
 3. Shared.

## Core
All services which have to have one instance per application should be implemented here.
## Features
A feature module delivers a cohesive set of functionality focused on a specific application.
- Feature modules should only import services from CoreModule. 
- These modules don’t depend on any other features just on services provided by CoreModule and components provided by SharedModule.
## Shared
All components and pipes should be implemented here.
- These components don’t import and inject services from core or other features.
- They should receive all data though attributes in the view. 
- Shared modules doesn’t have any dependency to the rest of the application.

## Sources
- [NgModules](https://angular.io/guide/ngmodules)
- [6 Best Practices & Pro Tips when using Angular CLI](https://medium.com/@tomastrajan/6-best-practices-pro-tips-for-angular-cli-better-developer-experience-7b328bc9db81)
