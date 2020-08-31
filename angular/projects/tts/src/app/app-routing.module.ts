import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', loadChildren: () => import('./features/tts/tts.module').then(mod => mod.TtsModule)  },
  { path: 'home', loadChildren: () => import('./features/tts/tts.module').then(mod => mod.TtsModule)  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
