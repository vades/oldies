import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styles: []
})
export class AlertComponent implements OnInit {
  alert: any = {
    show: false,
    type: '',
    message: '',
  };

  constructor() { }

  ngOnInit() {
  }

  toggleAlert(type?: string): void {
    this.alert =  {
      show: !this.alert.show,
      type: type,
      message: 'This is an alert message',
    };
    
  }


}
