import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngk-alert',
  templateUrl: './ngk-alert.component.html',
  styleUrls: ['./ngk-alert.component.scss']
})
export class NgkAlertComponent implements OnInit {

  @Input() show: boolean = false;
  @Input() type: string = '';
  @Input() classList: string = '';

  constructor() { }

  ngOnInit() {
  }

}
