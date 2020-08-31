import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Subscription } from 'rxjs';

import { VdsConfirmService } from './vds-confirm.service';

@Component({
  selector: 'vds-confirm',
  template: `
  <div class="vds-overlay" *ngIf="confirm" (click)="dismiss()">
    <section class="vds-confirm"  [ngClass]="classList">
    <div class="container" [ngClass]="classList">
    <header *ngIf="title"><span>{{title}}</span> <span class="close" (click)="dismiss()">&times;</span></header>
    <article>{{confirm.message}}</article>
    <footer>
    <button type="button" (click)="dismiss()">{{btnNo}}</button>
    <button type="button" (click)="accept()">{{btnOk}}</button>
    </footer>
    </div>
    </section>
    </div>
   
  `,
  styleUrls: ['./vds-confirm.component.scss']
})
export class VdsConfirmComponent implements OnInit {
  @Output() accepted = new EventEmitter();
  @Input() btnOk: string = 'Ok';
  @Input() btnNo: string = 'No';
  @Input() classList: string = '';
  @Input() title: string;
  confirm: any;
  confirmSubscription: Subscription;
  confirmed = false;

  constructor(
    private confirmService: VdsConfirmService
  ) {
    this.confirmSubscription = this.confirmService.getConfirm().subscribe(confirm => { this.confirm = confirm; });
  }

  ngOnInit() {
  }



  accept() {
    this.confirmed = true;
    this.dismiss();
    this.accepted.emit(this.confirmed);
  }

  dismiss(): void {
    this.confirmService.dismiss();
  }

}
