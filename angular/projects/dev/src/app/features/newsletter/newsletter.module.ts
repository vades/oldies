import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsletterRoutingModule } from './newsletter-routing.module';
import { NewsletterComponent } from './newsletter.component';
import { NgkNewsletterModule } from '@ngk/components/';
import { NgkAlertModule } from '@ngk/components/';
import { NgkSvgModule } from '@ngk/svg/';


@NgModule({
  declarations: [NewsletterComponent],
  imports: [
    CommonModule,
    NewsletterRoutingModule,
    NgkNewsletterModule,
    NgkAlertModule,
    NgkSvgModule
  ]
})
export class NewsletterModule { }
