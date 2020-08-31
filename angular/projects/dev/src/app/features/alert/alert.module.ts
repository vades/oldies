import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertRoutingModule } from './alert-routing.module';
import { AlertComponent } from './alert.component';
import { NgkAlertModule } from '@ngk/components/';
import { NgkSvgModule } from '@ngk/svg/';


@NgModule({
  declarations: [AlertComponent],
  imports: [
    CommonModule,
    AlertRoutingModule,
    NgkAlertModule,
    NgkSvgModule
  ]
})
export class AlertModule { }
