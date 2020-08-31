import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DevComponent } from './dev.component';
import { DevAutocompleteComponent } from './dev-autocomplete/dev-autocomplete.component';
const routes: Routes = [
  {
    path: '',
    component: DevComponent
  },
  {
    path: 'autocomplete',
    component: DevAutocompleteComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevRoutingModule { }
