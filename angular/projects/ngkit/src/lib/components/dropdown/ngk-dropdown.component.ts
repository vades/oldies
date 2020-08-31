import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngk-dropdown',
  templateUrl: './ngk-dropdown.component.html',
  styleUrls: ['./ngk-dropdown.component.scss']
})
export class NgkDropdownComponent implements OnInit {

  @Input() classList: string = '';
  expanded = false;
  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.expanded = !this.expanded;
  }

  close(e: Event) {
    this.expanded = false;
  }

}
