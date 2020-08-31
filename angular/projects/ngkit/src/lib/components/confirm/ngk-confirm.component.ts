import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Subscription } from 'rxjs';

import { NgkConfirmService } from './ngk-confirm.service';

@Component({
  selector: 'ngk-confirm',
  templateUrl: './ngk-confirm.component.html',
  styleUrls: ['./ngk-confirm.component.scss']
})
export class NgkConfirmComponent implements OnInit {
  @Output() accepted = new EventEmitter();
  @Input() btnOk: string = 'Ok';
  @Input() btnNo: string = 'No';
  @Input() classList: string = '';
  @Input() title: string;
  confirm: any;
  confirmSubscription: Subscription;
  confirmed = false;

  constructor(
    private confirmService: NgkConfirmService
  ) {
    this.confirmSubscription = this.confirmService.getConfirm().subscribe(confirm => { this.confirm = confirm; });
  }

  ngOnInit() {
  }
  accept() {
    this.confirmed = this.confirm;
    this.dismiss();
    this.accepted.emit(this.confirmed);
  }

  dismiss(): void {
    this.confirmService.dismiss();
  }

}
