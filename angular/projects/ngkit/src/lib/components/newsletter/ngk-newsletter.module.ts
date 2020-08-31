import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgkNewsletterComponent } from './ngk-newsletter.component';



@NgModule({
  declarations: [NgkNewsletterComponent],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule
  ],
  exports: [NgkNewsletterComponent]
})
export class NgkNewsletterModule { }
