import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule,  HTTP_INTERCEPTORS} from '@angular/common/http';
import { ErrorHandler} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '@env/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ApiService } from '@app/core/services/http/api.service';

import {LayoutModule} from '@app/shared/layout';
import {VdsNgkitModule} from '@app/lib/vades-ngkit';
import {VdsHttpErrorsInterceptor, VdsErrorsHandler} from '@app/core/errors';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    LayoutModule,
    VdsNgkitModule
  ],
  providers: [
    Title,
    ApiService,
    /* {
      provide: ErrorHandler,
      useClass: VdsErrorsHandler
    }, */
    { provide: HTTP_INTERCEPTORS, useClass: VdsHttpErrorsInterceptor, multi: true },
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
