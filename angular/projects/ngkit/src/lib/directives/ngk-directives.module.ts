import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgkGoBackDirective } from './ngk-go-back.directive';
import { NgkClickOutDirective } from './ngk-click-out.directive';
import { NgkTrueFalseValueDirective } from './ngk-true-false-value.directive';

@NgModule({
  declarations: [NgkGoBackDirective, NgkClickOutDirective, NgkTrueFalseValueDirective],
  imports: [
    CommonModule
  ],
  exports: [NgkGoBackDirective, NgkClickOutDirective, NgkTrueFalseValueDirective]
})
export class NgkDirectivesModule { }
