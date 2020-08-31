import { Component, OnInit } from '@angular/core';
import { SharingService } from '@app/core/services/sharing/sharing.service';


@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.scss']
})
export class ViewChildComponent implements OnInit {
  exampleChild: string = '';
  data: any = {};
  output = {
    delete:{}
  };
  constructor(
    private sharingService: SharingService,
  ) { }

  ngOnInit() {
  }

  delete() {
    
    this.sharingService.emitChange({dev: {'delete':this.data}});
    this.close();
  }

  close(){
    this.data = {};
  }

}
