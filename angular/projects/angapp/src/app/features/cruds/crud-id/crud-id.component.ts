import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title }     from '@angular/platform-browser';

import { CrudsService } from '@app/core/services/features/cruds.service';

@Component({
  selector: 'app-crud-id',
  templateUrl: './crud-id.component.html',
  styles: []
})
export class CrudIdComponent implements OnInit {

  title = 'Crud ID';
  id: number;
  data: object = {};
  subRouteParams: any;

  public constructor(
    private titleService: Title,
    private crudsService: CrudsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.titleService.setTitle( this.title );
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
   * Display the specified resource.
   */
  getItem() {
    this.data = this.crudsService.getItem(this.id);
  }

   /**
   * On destroy
   */
  ngOnDestroy() {
    this.subRouteParams.unsubscribe();
  }

}
