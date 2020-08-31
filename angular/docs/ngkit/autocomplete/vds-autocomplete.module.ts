import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VdsSearchBoxComponent } from './vds-search-box.component';
import { VdsSearchResultComponent } from './vds-search-result.component';

@NgModule({
  declarations: [VdsSearchBoxComponent, VdsSearchResultComponent],
  imports: [
    CommonModule
  ],
  exports:[VdsSearchBoxComponent, VdsSearchResultComponent]
})
export class VdsAutocompleteModule { }
