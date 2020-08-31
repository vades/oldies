import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevRoutingModule } from './dev-routing.module';
import { DevComponent } from './dev.component';
import { VdsNgkitModule } from '@app/lib/vades-ngkit';
import { ViewChildComponent } from './view-child/view-child.component';
import { DevAutocompleteComponent } from './dev-autocomplete/dev-autocomplete.component';
import { VdsAutocompleteModule } from './dev-autocomplete/autocompete/vds-autocomplete.module';

@NgModule({
  declarations: [DevComponent, ViewChildComponent, DevAutocompleteComponent],
  imports: [
    CommonModule,
    DevRoutingModule,
    VdsNgkitModule,
    VdsAutocompleteModule
  ]
})
export class DevModule { }
