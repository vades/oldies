import { Component, OnInit } from '@angular/core';

import { CrudService } from "@app/core/services/restapi/cruds/crud.service";
import { Crud } from "@app/core/services/restapi/cruds/crud.model";

@Component({
  selector: 'app-crud-read-all',
  templateUrl: './crud-read-all.component.html',
  styles: []
})
export class CrudReadAllComponent implements OnInit {
  subscriptions: any = {};
  cruds: Crud[] = [];

  constructor(
    private crudService: CrudService
  ) { }

  ngOnInit() {
    this.subscriptions.cruds = this.crudService.readAll().subscribe((cruds: Crud[]) => {
      console.log(cruds);
      this.cruds = cruds;
    })
  }

  /**
 * On destroy
 */
  ngOnDestroy(): void {
    for (let i in this.subscriptions) {
      this.subscriptions[i].unsubscribe();
    }
  }

}
