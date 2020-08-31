import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UikitFeatureRoutingModule } from './uikit-feature-routing.module';
import { AlertsComponent } from './alerts/alerts.component';

@NgModule({
  declarations: [AlertsComponent],
  imports: [
    CommonModule,
    UikitFeatureRoutingModule
  ]
})
export class UikitFeatureModule { }
