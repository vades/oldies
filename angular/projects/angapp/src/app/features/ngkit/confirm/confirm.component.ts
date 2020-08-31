import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { VdsConfirmService } from '@app/lib/vades-ngkit/confirm/vds-confirm.service';
@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html'
})
export class ConfirmComponent implements OnInit {
  title = 'Confirm';
  name:string;
  constructor(
    private titleService: Title,
    private confirmService: VdsConfirmService
  ) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    //this.confirm();
   
  }

  confirm(): void {
    this.confirmService.confirm('This is a confirm message');
  }

  delete(e) {
    console.log(e);
}

}
