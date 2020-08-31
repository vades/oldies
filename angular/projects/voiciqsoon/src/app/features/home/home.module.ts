import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { NgkNewsletterModule } from '@ngk/components/';
import { NgkAlertModule } from '@ngk/components/';
import { NgkSvgModule } from '@ngk/svg/';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgkNewsletterModule,
    NgkAlertModule,
    NgkSvgModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
