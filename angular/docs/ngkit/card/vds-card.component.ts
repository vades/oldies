import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'vds-card',
  template: `
  <header>
    <ng-content select="[header]"></ng-content>
  </header>
  <article>
    <ng-content select="[content]"></ng-content>
    <footer>
      <ng-content select="[footer]"></ng-content>
    </footer><!-- /footer -->
  </article>
  `,
  styleUrls: ['./vds-card.component.scss']
})
export class VdsCardComponent implements OnInit {
  @Input() classList: string = '';
  constructor() { }

  ngOnInit() {
  }

}
