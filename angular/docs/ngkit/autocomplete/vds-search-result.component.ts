import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'vds-search-result',
  template: `
   <section class="vds-autocomplete"><div><ng-content></ng-content></div></section>
  `,
  styleUrls: ['./vds-search-result.component.scss'],
})
export class VdsSearchResultComponent implements OnInit {
  @Input() results: any = [];
  constructor() { }

  ngOnInit() {
  }

  /**
   * Track by
   * @param index 
   * @param item 
   */
  trackByFn(index: number, item: object) {
    return index; // or item.id
  }

}
