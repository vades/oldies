import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./features/home/home.module').then(mod => mod.HomeModule)  },
  //{ path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'cruds', loadChildren: () => import('./features/cruds/cruds.module').then(mod => mod.CrudsModule)  },
  { path: 'newsletter', loadChildren: () => import('./features/newsletter/newsletter.module').then(mod => mod.NewsletterModule)  },
  { path: 'alert', loadChildren: () => import('./features/alert/alert.module').then(mod => mod.AlertModule)  },
  { path: '**', loadChildren: () => import('./features/error404/error404.module').then(mod => mod.Error404Module)  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
