import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import {SnippetAddComponent} from '@app/features/snippet/snippet-add/snippet-add.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dev', loadChildren: './features/dev/dev.module#DevModule'  },
  { path: 'cruds', loadChildren: './features/cruds/cruds.module#CrudsModule'  },
  { path: 'ngkit', loadChildren: './features/ngkit/ngkit.module#NgkitModule'  },
  { path: 'firestore', loadChildren: './features/firestore/firestore.module#FirestoreModule'  },
  { path: 'dashboard', loadChildren: './features/dashboard/dashboard.module#DashboardModule'  },
  { path: 'user', loadChildren: './features/user/user.module#UserModule'  },
  { path: 'settings', loadChildren: './features/settings/settings.module#SettingsModule'  },
  { path: 'about', loadChildren: './features/pages/pages.module#PagesModule'  },
  { path: 'auth', loadChildren: './features/auth/auth.module#AuthModule'  },
  { path: '**', loadChildren: './core/error404/error404.module#Error404Module'  },
  //Outlets
  //{ path: "addsnippet",component: SnippetAddComponent,outlet: "addsnippet"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
