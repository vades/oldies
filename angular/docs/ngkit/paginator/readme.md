Paginator component
==========
Displys pagination with Logic like Google

selector: `vds-paginator`

## Usage
## Import Paginator in the app.module.ts (or other module)
```
mport { VdsNgkitModule } from '@app/lib/ngkit';

@NgModule({
  declarations: [...],
  imports: [
    ...,
    VdsNgkitModule,
  ]
})
```
## Component that uses the Paginator
```
...
import { VdsPaginatorService } from '@app/lib/ngkit/paginator/vds-paginator.service';

export class AppComponent implements OnInit {
   data: any;[]
   subscriptions: any = {};

  // Paginator object
  paginator: any = {};

  // Paged items
  pagedData: any[];

  // Records per page
  perPage: number = 20;

  public constructor(
    ...
    private paginatorService: VdsPaginatorService,
  ) {}

  ngOnInit() {
    this.getAllSubscribe();
  }

  getAllSubscribe() {
    this.subscriptions.data = this.crudsService
      .getAll()
      .subscribe(response => {
        this.data = response;
        // Set to page 1
        this.setPage(1);
      });
  }

  setPage(page: number) {
    // Get paginator object
    this.paginator = this.paginatorService.paginate(this.data.length, page, this.perPage);

    // Slice data
    this.pagedData = this.data.slice(this.paginator.startIndex, this.paginator.endIndex + 1);
  }
}
```
## View with paged data and paginator
```
<div *ngFor="let d of pagedData">
  <span>{{d.id}}</span>
  <span>{{d.title}}</span>
  <span>{{d.name}}</span>
</div>

<vds-paginator 
  [paginator]="paginator" 
  (page)="setPage($event)" 
  first="First custom">
</vds-paginator>
```
## @Input params
Param | Type | Default| Example
--- | --- | --- | --- 
paginator | object | {} | `[paginator]="paginator"`
classList | string | '' | `classList="class1 class2"`
first | string | 'First' | `first="First custom"`
previous | string | 'Previous' | `previous="Previous custom"`
next | string | 'Next' | `next="Next custom"`
last | string | 'Last' | `last="Last custom"`

## @Output params
Param | Type | Default| Example
--- | --- | --- | --- 
page | EventEmitter() | - | `(page)="setPage($event)"`

## Source
[Angular 2/5 - Pagination Example with Logic like Google](http://jasonwatmore.com/post/2016/08/23/angular-2-pagination-example-with-logic-like-google)
