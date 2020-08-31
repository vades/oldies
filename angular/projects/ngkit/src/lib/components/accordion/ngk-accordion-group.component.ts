import { Component, ContentChildren, QueryList, AfterContentInit, Input } from '@angular/core';
import { NgkAccordionComponent } from './ngk-accordion.component';

@Component({
  selector: 'ngk-accordion-group',
  template: '<ng-content></ng-content>'
})
export class NgkAccordionGroupComponent implements AfterContentInit {
  @ContentChildren(NgkAccordionComponent) accordions: QueryList<NgkAccordionComponent>;
  @Input() expandOnInit: number = null;
  @Input() closeOther: boolean = false;

  ngAfterContentInit() {
    
    this.accordions.changes.subscribe(accordions => {
      accordions.toArray().forEach((v: any, i:number)=> {
        // Set expanded to x element
        if( this.expandOnInit == i){
          v.expanded = true;
        }
      
        // When title bar is clicked
        // (toggle is an @output event of accordion)
        v.toggle.subscribe(() => {
          // Open the accordion
          this.openAccordion(v);
        });
      })
    });
    /* if (accordions.length > 0) {
      // Set expanded to first element
      accordions[0].expanded = true;

      // Loop through all accordions
      accordions.forEach((v) => {
        // when title bar is clicked
        // (toggle is an @output event of accordion)
        v.toggle.subscribe(() => {
          // Open the accordion
          this.openAccordion(v);
        });
      });
    } */

  }

  /**
  * Open an accordion
  * @param accordion   NgkAccordionComponent instance
  */
  openAccordion(accordion: NgkAccordionComponent) {
    // Close other accordions
    if(this.closeOther){
      this.accordions.toArray().forEach((v) => v.expanded = false);
    }
    
    // Open current accordion
    accordion.expanded = true;
  }


}
