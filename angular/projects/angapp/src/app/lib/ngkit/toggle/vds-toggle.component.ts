import { Component, OnInit, Input } from '@angular/core';
import { VdsToggleService } from '@app/lib/ngkit/toggle/vds-toggle.service';

@Component({
  selector: 'vds-toggle',
  template: `
  <span role="button" [ngClass]="classList" (click)="toggle()" [attr.aria-pressed] ="opened" >
  <span *ngIf="!opened">{{openText}} <i class="fas fa-angle-down"></i></span>
  <span *ngIf="opened">{{closeText}} <i class="fas fa-angle-up"></i></span>
  </span>
  `,
  styles: []
})
export class VdsToggleComponent implements OnInit {
  @Input() classList: string = '';
  @Input() opened: boolean = false;
  @Input() openText: string = '';
  @Input() closeText: string = '';

  //@Output() statusChanged: EventEmitter<boolean> =   new EventEmitter();

  constructor(
    private data: VdsToggleService
  ) { }

  ngOnInit() {
  }

  toggle() {
    this.opened = !this.opened;
    this.data.changeValue(this.opened);
  }

}
