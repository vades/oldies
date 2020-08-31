import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { CrudsService } from '@app/core/services/features/cruds.service';

@Component({
  selector: 'app-dev-autocomplete',
  templateUrl: './dev-autocomplete.component.html',
  styleUrls: ['./dev-autocomplete.component.scss']
})
export class DevAutocompleteComponent implements OnInit {
  title = 'Dev Autocomplete';
  data: any;
  loading: boolean;
  results: any = [];
  constructor(
    private titleService: Title,
    private crudsService: CrudsService,
  ) { }

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
   this.crudsService
      .getAll()
      .subscribe(response => this.data = response);
  }
  searchService(q?:string){
    this.crudsService.search(q);
  }

  updateResults(results: any): void {
    this.results = results;
    // console.log("results:", this.results); // uncomment to take a look
  }

}
