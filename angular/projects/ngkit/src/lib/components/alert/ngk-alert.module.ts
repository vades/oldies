import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgkAlertComponent } from './ngk-alert.component';



@NgModule({
  declarations: [NgkAlertComponent],
  imports: [
    CommonModule
  ],
  exports: [NgkAlertComponent]
})
export class NgkAlertModule { }
