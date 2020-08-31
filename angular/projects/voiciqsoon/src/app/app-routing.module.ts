import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
 
  { path: '', loadChildren: () => import('./features/home/home.module').then(mod => mod.HomeModule)  },
  { path: 'home', loadChildren: () => import('./features/home/home.module').then(mod => mod.HomeModule)  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
