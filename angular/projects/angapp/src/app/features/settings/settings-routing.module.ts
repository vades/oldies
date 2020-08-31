import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsBasicComponent } from './settings-basic/settings-basic.component';

const routes: Routes = [
  { path: '', component: SettingsBasicComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
