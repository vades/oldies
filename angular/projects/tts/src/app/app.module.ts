import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgkAlertifyModule } from '@ngk/components/';
import { LayoutModule } from '@app/shared/layout';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
//import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faSmile, faDatabase, faInfoCircle, faBars, faEllipsisV, faQuestionCircle, faPlay, faSquare, faTrash, faPause, faCog,  faTimes} from '@fortawesome/free-solid-svg-icons';

// Add icons to the library for convenient access in other components
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

// Material
import { MatSnackBarModule } from '@angular/material';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/';
//import { MatSnackBarModule,MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgkAlertifyModule,
    FontAwesomeModule,
    LayoutModule,
    MatSnackBarModule
  ],
  providers: [
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 7000}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    // Add multiple icons to the library
    library.addIcons(
      faSmile, faDatabase, faInfoCircle, faBars, faEllipsisV, faQuestionCircle, faPlay, faSquare, faTrash, faPause, faCog, faTimes
      );
  }
 }

