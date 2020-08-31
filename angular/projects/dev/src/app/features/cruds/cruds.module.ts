import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudsRoutingModule } from './cruds-routing.module';
import { CrudCreateComponent } from './crud-create/crud-create.component';
import { CrudReadComponent } from './crud-read/crud-read.component';
import { CrudReadAllComponent } from './crud-read-all/crud-read-all.component';
import { CrudUpdateComponent } from './crud-update/crud-update.component';


@NgModule({
  declarations: [CrudCreateComponent, CrudReadComponent, CrudReadAllComponent, CrudUpdateComponent],
  imports: [
    CommonModule,
    CrudsRoutingModule
  ]
})
export class CrudsModule { }
