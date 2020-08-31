import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrudsListComponent } from './cruds-list/cruds-list.component';
import { CrudAddComponent } from './crud-add/crud-add.component';
import { CrudIdComponent } from './crud-id/crud-id.component';
import { CrudEditComponent } from './crud-edit/crud-edit.component';
import { CrudStoreComponent } from './crud-store/crud-store.component';

const routes: Routes = [
  {
    path: '',
    component: CrudsListComponent,
    children: [
      {
        path: 'store',
        component: CrudStoreComponent
      },
      {
        path: 'store/:id',
        component: CrudStoreComponent
      },
      {
        path: 'id/:id',
        component: CrudIdComponent
      },
    ]
  },
  
  {
    path: 'add',
    component: CrudAddComponent
  },
  {
    path: 'edit/:id',
    component: CrudEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudsRoutingModule { }
