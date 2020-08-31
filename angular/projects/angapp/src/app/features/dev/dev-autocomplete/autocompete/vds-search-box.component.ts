import { Component, OnInit, Output,Input, EventEmitter, ElementRef } from '@angular/core';

// By importing just the rxjs operators we need, We're theoretically able
// to reduce our build size vs. importing all of them.
import { fromEvent, of } from 'rxjs';
import { map, filter, debounceTime, tap, switchAll } from 'rxjs/operators';

import { VdsAutocompleteService } from './vds-autocomplete.service';

@Component({
  selector: 'vds-search-box',
  template: `
  <ng-content></ng-content>
  `,
  styles: []
})
export class VdsSearchBoxComponent implements OnInit {
  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() results: EventEmitter<any> = new EventEmitter<any>();
  @Input() searchService: string;
  constructor(
    private el: ElementRef,
    private crudsService: VdsAutocompleteService,
  ) { }

  ngOnInit() {
    // convert the `keyup` event into an observable stream
    const obs = fromEvent(this.el.nativeElement, 'keyup')
      .pipe(

        // extract the value of the input
        map((e: any) => e.target.value),

        // filter out if empty
        filter((text: string) => text.length > 1 || text.length === 0),

        // only once every 250ms
        debounceTime(250),

        // enable loading
        tap(() => this.loading.emit(true)),

        // search, discarding old events if new input comes in
        map((query: string) =>  this.crudsService.search('cruds',query)),
        switchAll()
      );
    // act on the return of the search
    //obs.subscribe((result) => console.log('Obs result : ', result));
    obs.subscribe(
      // on sucesss
      (results: any) => { 
        this.loading.emit(false);
        this.results.emit(results);
      },
       // on error
      (err: any) => {
        console.log(err);
        this.loading.emit(false);
      },
      // on completion
      () => { 
        this.loading.emit(false);
      }
    );

  }

}
