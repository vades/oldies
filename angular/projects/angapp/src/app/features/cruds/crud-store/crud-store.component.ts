import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Title } from '@angular/platform-browser';
import { CrudsService } from '@app/core/services/features/cruds.service';
import { SharingService } from '@app/core/services/sharing/sharing.service';

@Component({
  selector: 'app-crud-store',
  templateUrl: './crud-store.component.html',
  styles: []
})
export class CrudStoreComponent implements OnInit {

  title = 'Crud Store';
  model: object = {};
  data: any = {};

  id: number;
  subRouteParams: any;
  subModel: any;

  public constructor(
    private titleService: Title,
    private crudsService: CrudsService,
    private sharingService: SharingService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.subRouteParams = this.route.params.subscribe(params => {
      // Defaults to 0 if no query param provided.
      // (+) converts string 'id' to a number
      this.id = +params['id'] || 0;
      if (this.id > 0) {
        this.getItem();
      }
    });
  }

   /**
   * Get the specified resource.
   */
  getItem() {
    this.subModel = this.crudsService
      .getItem(this.id)
      .subscribe(response => this.model = response);
  }

   /**
   * Store or update resource in storage
   */
  storeData() {
   
    if (this.id > 0) {
      this.putData();
    }else{
      this.postData();
    }
   
  }

  /**
   * Store a newly created resource in storage.
   */
  postData() {
    this.crudsService
     .post(this.model)
     .subscribe(response => {
      this.sharingService.emitChange(response);
       this.redirectTo();
     });
 }

  /**
    * Update the specified resource in storage.
    */
   putData() {
    this.crudsService
      .put(this.id, this.model)
      .subscribe(response => {
        this.sharingService.emitChange(response);
        this.redirectTo();
      });
  }
  /**
   * On destroy
   */
  ngOnDestroy() {
    this.subRouteParams.unsubscribe();
    if (this.id > 0) {
      this.subModel.unsubscribe();
    }

  }
   /**
   * Redirect to page
   */
  redirectTo() {
    this.router.navigate(['cruds']);
  }

}
