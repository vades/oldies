import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Error404RoutingModule } from './error404-routing.module';
import { Error404Component } from './error404.component';
import { NgkAlertModule } from '@ngk/components/';
import { NgkSvgModule} from '@ngk/svg/';

@NgModule({
  declarations: [Error404Component],
  imports: [
    CommonModule,
    NgkSvgModule,
    Error404RoutingModule,
    NgkAlertModule
  ]
})
export class Error404Module { }
