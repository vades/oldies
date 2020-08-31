import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-aside-toggler',
  template: `
  <button type="button" class="button is-text" [ngClass]="classList" (click)="toggle()">
  <i class="fas fa-bars"></i>
 </button>
  `,
})
export class AsideTogglerComponent implements OnInit {
  @Input() classList: string = '';
  public expanded: boolean = false;
  private element: any;

  constructor(
    private el: ElementRef
  ) {
    this.element = el.nativeElement;
  }

  ngOnInit() {
    console.log('localStorage: ',localStorage.getItem('asideExpanded'));
    this.expanded = (localStorage.getItem('asideExpanded') ? true :  this.expanded);
    console.log('this.expanded: ',this.expanded);
    this.handleClass();
  }

  toggle(): void {
    this.expanded = !this.expanded;
    this.handleClass();
  }

  handleClass(): void {
    if (this.expanded) {
      document.body.classList.add('aside-expanded-true');
      document.body.classList.remove('aside-expanded-false');
      localStorage.setItem('asideExpanded', 'true');
    } else {
      document.body.classList.add('aside-expanded-false');
      document.body.classList.remove('aside-expanded-true');
      localStorage.removeItem('asideExpanded');
    }
  }

}
