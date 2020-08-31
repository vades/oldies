import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '@app/app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpErrorsInterceptor } from '@app/core/errors/http-errors.interceptor';
import { LayoutModule } from '@app/shared/layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as fasStar, faSmile, faDatabase, faInfoCircle, faBars, faEllipsisV, faSpinner } from '@fortawesome/free-solid-svg-icons';

// Add icons to the library for convenient access in other components
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

import { MaterialModule } from '@app/shared/material';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    FontAwesomeModule,
    MaterialModule
  ],
  providers: [
   { provide: HTTP_INTERCEPTORS, useClass: HttpErrorsInterceptor, multi: true },
   {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 7000}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    // Add multiple icons to the library
    library.addIcons(
      fasStar, 
      farStar,
      faSmile, 
      faDatabase, 
      faInfoCircle, 
      faBars, 
      faEllipsisV,
      faSpinner
      );
  }
 }
