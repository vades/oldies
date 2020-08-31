import { Component, OnInit, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { AsideService } from '@app/core/services/layout/aside.service';
@Component({
  selector: 'app-aside-toggler',
  template: `
 <button type="button" class="button is-circle" [attr.aria-expanded]="expanded" (click)="toggle()" (ngkClickOutside)="toggle()">
 <mat-icon>reorder</mat-icon>
</button>
  `,
})
export class AsideTogglerComponent implements OnInit {
  asideSubscription: Subscription;
 public expanded: boolean = false;
  private element: any;
  

  constructor(
    private el: ElementRef,
    private asideService: AsideService,
  ) {
    this.element = el.nativeElement;
    this.asideSubscription = this.asideService.getAside().subscribe(expanded  => { 
      this.expanded = expanded ; 
      this.handleClass();
      //console.log('aside expanded: ', this.expanded)
    });
  }

  ngOnInit() {
   this.expanded = (localStorage.getItem('aside') ? true :  this.expanded);
    this.handleClass();
   
  }

  toggle(): void {
  
    /* console.log('localStorage: ',localStorage.getItem('aside'));
    console.log('this.expanded: ',this.expanded); */
    this.expanded = !this.expanded;
    this.handleClass();
  }

  handleClass(): void {
   
    if (this.expanded) {
      document.body.classList.add('aside-true');
      document.body.classList.remove('aside-false');
      localStorage.setItem('aside', 'true');
    } else {
      document.body.classList.add('aside-false');
      document.body.classList.remove('aside-true');
      localStorage.removeItem('aside');
    }
  }

}
