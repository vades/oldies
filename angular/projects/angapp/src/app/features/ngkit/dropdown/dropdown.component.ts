import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styles: []
})
export class DropdownComponent implements OnInit {
  title = 'Dropdown';
  constructor(
    private titleService: Title,
  ) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
  }

}
