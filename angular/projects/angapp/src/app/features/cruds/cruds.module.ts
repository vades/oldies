import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { CrudsRoutingModule } from './cruds-routing.module';
import { CrudsListComponent } from './cruds-list/cruds-list.component';
import { CrudAddComponent } from './crud-add/crud-add.component';
import { CrudIdComponent } from './crud-id/crud-id.component';
import { CrudEditComponent } from './crud-edit/crud-edit.component';
import { CrudStoreComponent } from './crud-store/crud-store.component';

@NgModule({
  declarations: [CrudsListComponent, CrudIdComponent, CrudStoreComponent,CrudAddComponent,CrudEditComponent],
  imports: [
    CommonModule,
    CrudsRoutingModule,
    FormsModule
  ]
})
export class CrudsModule { }
