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
})
export class VdsSearchBoxComponent implements OnInit {
  @Output() autocompleteLoading: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() autocompleteResults: EventEmitter<any> = new EventEmitter<any>();
  @Input() autocompleteService: string;
  @Input() autocompleteParams: string;
  excludeKeys = [13];
  constructor(
    private el: ElementRef,
    private crudsService: VdsAutocompleteService,
  ) { }

  ngOnInit() {
    // convert the `keyup` event into an observable stream
    const obs = fromEvent(this.el.nativeElement, 'keyup')
      .pipe(
        // exclude specific keys
        filter((e: KeyboardEvent) => this.excludeKeys.indexOf(e.keyCode) === -1),

        // extract the value of the input
        map((e: any) => e.target.value),

        // filter out if empty
        filter((text: string) => text.length > 1 || text.length === 0),

        // only once every 250ms
        debounceTime(250),

        // enable autocompleteLoading
        tap(() => this.autocompleteLoading.emit(true)),

        // search, discarding old events if new input comes in
        map((query: string) =>  this.crudsService.autocomplete(query,this.autocompleteService,this.autocompleteParams)),
        switchAll()
      );
    // act on the return of the search
    //obs.subscribe((result) => console.log('Obs result : ', result));
    obs.subscribe(
      // on sucesss
      (results: any) => { 
        this.autocompleteLoading.emit(false);
        this.autocompleteResults.emit(results);
      },
       // on error
      (err: any) => {
        console.log(err);
        this.autocompleteLoading.emit(false);
      },
      // on completion
      () => { 
        this.autocompleteLoading.emit(false);
      }
    );

  }

}
