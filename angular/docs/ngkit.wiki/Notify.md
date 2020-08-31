`src/app/components/notify`

## Using Notify
Import `vds-notify.module` in the app.module.ts.

`src/app/app.module.ts`
```
import { VdsNotifyModule } from '@app/components/notify/vds-notify.module';

@NgModule({
  declarations: [...],
  imports: [
    ...,
     VdsNotifyModule,
  ]
})
```
## Component that uses Notify
Import `VdsNotifyService` in thecomponent.

`src/app/app.component.ts`
```
...
import { VdsNotifyService } from '@app/components/notify/vds-notify.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent implements OnInit {

  public constructor(
   private notify: VdsNotifyService,
  ) {}

  ngOnInit() {
    this.sendNotify();
  }

  sendNotify(): void {
    this.notify.sendNotify('This is a notification message','is-danger');
  }

  ngOnDestroy(): void {
    this.notify.clearNotify();
    
  }

}
```
## sendNotify() params
`src/app/components/notify/vds-notify.service.ts`
```
sendNotify(message: string, status?: string)
```
Params | Type | Default
--- | --- | --- 
message  | string | -
status  | string | ''

Status values: `is-info`, `is-success`, `is-warning` and `is-danger`

Example
```
 this.notify.sendNotify('This is a success notification message','is-success');
```

## View with Notify
`src/app/app.component.html`
```
<app-header></app-header>
  <main id="main">
    <vds-notify inverse="true"></vds-notify>
   <router-outlet></router-outlet>
  </main>
<app-footer></app-footer>
```

## @Input params
Param | Type | Default| Example
--- | --- | --- | --- 
classList | string | '' | `classList="class1 class2"`
inverse | boolean | false | `inverse="true"`

Note: *inverse="true" displays notification with dark background and red text*