import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-blank-state',
  templateUrl: './blank-state.component.html',
  styles: []
})
export class BlankStateComponent implements OnInit {
  title = 'Blank state';
  code = `<b>This text is bold</b> and this one is <i>italics</i>`;
  constructor(
    private titleService: Title,
  ) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
  }

}
