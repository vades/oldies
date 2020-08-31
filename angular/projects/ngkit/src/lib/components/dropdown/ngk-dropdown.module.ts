import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgkDropdownComponent } from './ngk-dropdown.component';

import { NgkDirectivesModule } from '../../directives';


@NgModule({
  declarations: [NgkDropdownComponent],
  imports: [
    CommonModule,
    NgkDirectivesModule
  ],
  exports: [NgkDropdownComponent]
})
export class NgkDropdownModule { }
