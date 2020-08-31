import { Component, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { VadesNgkitAccordionComponent } from './vades-ngkit-accordion.component';

@Component({
  selector: 'vds-accordion-group',
  template: '<ng-content></ng-content>'
})
export class VadesNgkitAccordionGroupComponent  implements AfterContentInit{
  @ContentChildren(VadesNgkitAccordionComponent) accordions: QueryList<VadesNgkitAccordionComponent>;
  ngAfterContentInit() {
   // Set expanded to first element
     this.accordions.toArray()[0].expanded = true;

     // Loop through all accordions
     this.accordions.toArray().forEach((v) => {
      // when title bar is clicked
      // (toggle is an @output event of accordion)
      v.toggle.subscribe(() => {
        // Open the accordion
        this.openAccordion(v);
      });
    });
  }

   /**
   * Open an accordion
   * @param accordion   VadesNgkitAccordionComponent instance
   */
  openAccordion(accordion: VadesNgkitAccordionComponent) {
    // close other accordions
    this.accordions.toArray().forEach((v) => v.expanded = false);
    // open current accordion
    accordion.expanded = true;
  }
  

}
