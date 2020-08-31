import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styles: []
})
export class TooltipComponent implements OnInit {
  title = 'Tooltip';
  constructor(
    private titleService: Title,
  ) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
  }

}
