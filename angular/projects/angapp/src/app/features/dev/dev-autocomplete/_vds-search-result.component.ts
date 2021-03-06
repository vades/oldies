import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'vds-search-result',
  template: `
    <div *ngFor="let r of results ;trackBy: trackByFn">{{r.title}}</div>
  `,
  styles: []
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
