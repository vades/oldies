import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'vds-canvas',
  template: `
  <section class="vds-canvas" [ngClass]="classList">
  <header><ng-content select="[close]"></ng-content></header>
      <article><ng-content select="[body]"></ng-content></article>
      <footer><ng-content select="[footer]"></ng-content></footer>
  </section>
  `,
  styleUrls: ['./vds-canvas.component.scss']
})
export class VdsCanvasComponent implements OnInit {
  @Input() classList: string = '';
  constructor() { }

  ngOnInit() {
  }

}
