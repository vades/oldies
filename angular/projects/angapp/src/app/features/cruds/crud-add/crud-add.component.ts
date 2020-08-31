import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title }     from '@angular/platform-browser';

import { CrudsService } from '@app/core/services/features/cruds.service';

@Component({
  selector: 'app-crud-add',
  templateUrl: './crud-add.component.html',
  styles: []
})
export class CrudAddComponent implements OnInit {

  title = 'Crud Add';
  model: any = {};

  public constructor(
    private titleService: Title,
    private crudsService: CrudsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.titleService.setTitle( this.title );
  }

   /**
   * Store a newly created resource in storage.
   */
  postData() {
     this.crudsService
      .post(this.model)
      .subscribe(response => {
        this.redirectTo();
      });
  }
  
  /**
   * Redirect to page
   */
  redirectTo() {
    this.router.navigate(['cruds']);
  }

}
