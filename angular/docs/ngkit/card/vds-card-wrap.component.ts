import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vds-card-wrap',
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: ['./vds-card-wrap.component.scss']
})
export class VdsCardWrapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
