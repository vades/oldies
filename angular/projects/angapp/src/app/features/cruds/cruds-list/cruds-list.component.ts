/**
 * TODO: Force data reload after post/üut in CrudsStoreComponent
 */
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, Event, NavigationStart, NavigationEnd, NavigationError } from "@angular/router";
import { CrudsService } from '@app/core/services/features/cruds.service';
import { SharingService } from '@app/core/services/sharing/sharing.service';
import { findIndex } from 'lodash';

@Component({
  selector: 'app-cruds-list',
  templateUrl: './cruds-list.component.html',
  styles: []
})
export class CrudsListComponent implements OnInit {

  title = 'Cruds';
  data: any;

  subscriptions: any = {};

  public constructor(
    private titleService: Title,
    private crudsService: CrudsService,
    private sharingService: SharingService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    sharingService.changeEmitted$.subscribe(
      response => {
        this.updateData(response);
      });
  }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.getAllSubscribe();

  }

  /**
   * Track by
   * @param index 
   * @param item 
   */
  trackByFn(index: number, item: object) {
    return index; // or item.id
  }

  /**
   * Subscribea listing of the resource.
   */
  getAllSubscribe() {
    this.subscriptions.data = this.crudsService
      .getAll()
      .subscribe(response => this.data = response);
  }
  /**
   * TODO: resolve how to handling array delete, add to array etc without aubscribe
   * Get a listing of the resource.
   */
  /* getAll() {
    this.data = this.crudsService.getAll();
  } */

  /**
   * Remove the specified resource from storage.
   * @param id 
   */
  delete(id: number) {
    let index = findIndex(this.data, { id: id });
    if (index > -1) {
      this.crudsService.delete(id).subscribe(response => {
        this.data.splice(index, 1);
      });
    }

  }

  /**
  * Update data or push new item
  * @param newItem 
  */
  updateData(newItem: any = {}) {
    let index = findIndex(this.data, { id: newItem.id });
    if (index > -1) {
      this.data[index] = newItem;
    } else {
      this.data.push(newItem);
    }
  }

  /**
   * On destroy
   */
  ngOnDestroy() {
    for (let i in this.subscriptions) {
      this.subscriptions[i].unsubscribe();
    }
  }

}
