import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrudCreateComponent } from './crud-create/crud-create.component';
import { CrudReadComponent } from './crud-read/crud-read.component';
import { CrudReadAllComponent } from './crud-read-all/crud-read-all.component';
import { CrudUpdateComponent } from './crud-update/crud-update.component';

const routes: Routes = [
  {
    path: '', component: CrudReadAllComponent,
  },
  {
    path: 'read/:id',
    component: CrudReadComponent
  },
  {
    path: 'create', component: CrudCreateComponent,
  },
  {
    path: 'update/:id',
    component: CrudUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudsRoutingModule { }
