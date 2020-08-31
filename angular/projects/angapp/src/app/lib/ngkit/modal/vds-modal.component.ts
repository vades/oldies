// Source: http://jasonwatmore.com/post/2018/05/25/angular-6-custom-modal-window-dialog-box
import { Component, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';
import { VdsModalService } from './vds-modal.service';

@Component({
  selector: 'vds-modal',
  template: `
  <section class="modal">
  <div class="modal-inner" [ngClass]="classList">
  <header *ngIf="title"><span>{{title}}</span> <span class="close" (click)="close()">&times;</span></header>
  <article><ng-content select="[body]"></ng-content></article>
  <footer><ng-content select="[footer]"></ng-content></footer>
     
  </div>
</section>
<div class="overlay"></div>
  `,
  styleUrls: ['./vds-modal.component.scss']
})
export class VdsModalComponent implements OnInit {
  @Input('classList') classList: string = '';
  @Input() title: string;
  @Input() id: string;
  @Input() isConfirm: boolean = false;
  
  private element: any;

  constructor(
    private modalService: VdsModalService, 
    private el: ElementRef
    ) {
    this.element = el.nativeElement;
  }

  ngOnInit(): void {
    let modal = this;

    // ensure id attribute exists
    if (!this.id) {
      console.error('modal must have an id');
      return;
    }

    // move element to bottom of page (just before </body>) so it can be displayed above everything else
    //document.body.appendChild(this.element);

    // close modal on background click
    this.element.addEventListener('click', function (e: any) {
      if (e.target.className === 'modal') {
        modal.close();
      }
    });

    // add self (this modal instance) to the modal service so it's accessible from controllers
    this.modalService.add(this);
  }

  // remove self from modal service when directive is destroyed
  ngOnDestroy(): void {
    this.modalService.remove(this.id);
    this.element.remove();
  }

  // open modal
  open(): void {
    this.element.style.display = 'block';
    document.body.classList.add('modal-open');
  }

  // close modal
  close(): void {
    this.element.style.display = 'none';
    document.body.classList.remove('modal-open');
  }

}
