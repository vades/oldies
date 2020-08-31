import { Component, OnInit,Input,HostBinding } from '@angular/core';

@Component({
  selector: 'vds-tooltip',
  template: `
  <span (click)="toggle()" (vdsClickOutside)="close($event)">{{title}}</span>
  <span class="vds-tooltip" [ngClass]="position + ' ' + classList" [class.inverse]="inverse" [class.is-expanded]="(show == 'on-click') && (expanded)">
  <ng-content></ng-content>
  </span>
  `,
  styleUrls: ['./vades-ngkit-tooltip.component.scss']
})
export class VadesNgkitTooltipComponent implements OnInit {
  @Input() title: string = '';
  @Input() position: string = 'top';
  @Input() inverse: boolean = false;
  @Input() classList: string = '';
  @Input() show: string = 'on-hover';
  @HostBinding('class') hostClass: string = this.show;
  expanded = false;
  constructor() { }

  ngOnInit() {
    this.hostClass = this.show; 
  }

  toggle(){
    if(this.show === 'on-click'){
      this.expanded = !this.expanded;
      console.log(this.show)
      console.log(this.expanded)
    }
   
  }

  close(e: Event){
    if(this.show === 'on-click'){
      this.expanded = false;
    }
    
  }

}
