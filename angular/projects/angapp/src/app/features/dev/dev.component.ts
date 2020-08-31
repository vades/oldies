import { Component, OnInit, ViewChild, AfterViewInit,TemplateRef, ViewContainerRef } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ViewChildComponent } from './view-child/view-child.component';
import { SharingService } from '@app/core/services/sharing/sharing.service';
import { findIndex } from 'lodash';

@Component({
  selector: 'app-dev',
  templateUrl: './dev.component.html',
  styles: []
})
export class DevComponent implements OnInit,AfterViewInit {
  title = 'Dev';
  tabs: any;
  data: any;

  @ViewChild(ViewChildComponent) childReference;
  exampleParent: string;
  constructor(
    private titleService: Title,
    private sharingService: SharingService,
  ) { 
    sharingService.changeEmitted$.subscribe(
      response => {
        console.log(response.dev);
        this.delete(response.dev.delete.id);
      });
  }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.getAll();
  }

  ngAfterViewInit() {
    //this.exampleParent = this.childReference.exampleChild;
   
    //console.log(this.exampleParent)
  }

  getAll(){
    this.data = [
      {id: 1,name: 'Your Name 1'},
      {id: 2,name: 'Your Name 2'},
      {id: 3,name: 'Your Name 3'},
      {id: 4,name: 'Your Name 4'},
      {id: 5,name: 'Your Name 5'},
      {id: 6,name: 'Your Name 6'},
    ];
  }

  changeChild(input: any){
    this.childReference.data = input;
    this.childReference.exampleChild = 'Hello I am view child updated from ';
  }

  delete(id: number) {
    let index = findIndex(this.data, { id: id });
    if (index > -1) {
      this.data.splice(index, 1);
    }

  }



}
