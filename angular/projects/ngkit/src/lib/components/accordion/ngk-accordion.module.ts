import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgkAccordionGroupComponent } from './ngk-accordion-group.component';
import { NgkAccordionComponent } from './ngk-accordion.component';

@NgModule({
  declarations: [NgkAccordionGroupComponent, NgkAccordionComponent],
  imports: [
    CommonModule
  ],
  exports: [NgkAccordionGroupComponent, NgkAccordionComponent]
})
export class NgkAccordionModule { }
