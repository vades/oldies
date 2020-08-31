## App Module
Main module that includes imports, declarations and providers.
```
src\app\app.module.ts
```
```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HttpErrorsInterceptor } from '@app/core/errors/http-errors.interceptor';
import { ErrorsNotifyModule } from '@app/core/errors/notify/errors-notify.module';
import { LayoutModule } from '@app/core/layout';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSmile } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ErrorsNotifyModule,
    LayoutModule,
    FontAwesomeModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorsInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    // Add an icon to the library for convenient access in other components
    library.add(faSmile);
  }
 }
```
## App Routing Module
Contains all routes.
```
src\app\app-routing.module.ts
```
```
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: './features/home/home.module#HomeModule' },
  { path: '**', loadChildren: './core/errors/error404/error404.module#Error404Module' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```
## App Component
```
src\app\app.component.ts
```
```
import { Component, OnInit, ChangeDetectorRef, AfterContentChecked } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { environment } from '@env/environment';
import { LayoutService } from '@app/shared/layout/layout.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent implements OnInit, AfterContentChecked {
  env = environment;
  title = this.env.appName;
  partials: any = {};
  subscriptions: any = {};

  public constructor(
    private titleService: Title,
    public layout: LayoutService,
    private changeDetector: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    this.titleService.setTitle(this.env.appName);
    this.layout.getLayout().subscribe(partials => {
      this.partials = partials;

    });
  }
  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
  }
}

```
## Main View
```
src\app\app.component.html
```
```
<app-header [env]="env" *ngIf="partials?.header !== false"></app-header>
<section id="page" class="layout-c">
  <main id="main">
    <app-errors-notify inverse="true"></app-errors-notify>
   <router-outlet></router-outlet>
  </main>
</section>
<app-footer [env]="env" *ngIf="partials?.footer !== false"></app-footer>
```



