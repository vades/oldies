`src/app/core/errors/error404/`

## Using 404 Not found error
Load `Error404Module` as Lazy Loading Module  in the app-routing.module.ts.

`src/app/app-routing.module.ts`
```
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', loadChildren: '@app/core/errors/error404/error404.module#Error404Module' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```