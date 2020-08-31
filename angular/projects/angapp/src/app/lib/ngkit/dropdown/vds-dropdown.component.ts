
/**
 * TODO: Replace fa-ellipsis-v with SVG
 */
import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'vds-dropdown',
  template: `
    <div class="vds-dropdown" (vdsClickOutside)="close($event)">
    <header>
    <button class="button" [ngClass]="btnClass" aria-haspopup="true" [attr.aria-expanded]="expanded" (click)="toggle()">
    <span>{{label}}</span> <i class="fas fa-angle-down"></i>
    </button>
    </header>
    <div class="body" *ngIf="expanded" tabindex="-1" [ngClass]="classList" ><ng-content></ng-content></div>
    </div>
  `,
  styleUrls: ['./vds-dropdown.component.scss'],
})
export class VdsDropdownComponent implements OnInit {
  @Input() classList: string = '';
  @Input() btnClass: string = '';
  @Input() label: string = '';
  expanded = false;
  constructor() { }

  ngOnInit() {
  }

  toggle(){
    this.expanded = !this. expanded;
  }

  close(e: Event){
    this.expanded = false;
  }

}
