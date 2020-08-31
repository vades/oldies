import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'vds-paginator',
  templateUrl: './vds-paginator.component.html',
  styleUrls: ['./vds-paginator.component.scss'],
})
export class VdsPaginatorComponent implements OnInit {
  @Input() paginator: any = {};

  @Input() classList: string = '';
  @Input() first: string = 'First';
  @Input() previous: string = 'Previous';
  @Input() next: string = 'Next';
  @Input() last: string = 'Last';

  @Output() page = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  setPageNum(pageNum: number = 1) {
    this.page.emit(pageNum);
  }

}
