import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry,catchError } from 'rxjs/operators';

import { ErrorsService } from './errors.service';

@Injectable({
  providedIn: 'root'
})
export class VdsHttpErrorsInterceptor {

  constructor(
    private errorsService: ErrorsService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      return next.handle(request).pipe(retry(1),catchError(error => {
        //TODO: resolve how to logout an user
        if (error.status === 401) {
          // auto logout if 401 response returned from api
          //this.authenticationService.logout();
          //location.reload(true);
      }
         this.errorsService.handleHttpError(error);
          return throwError(error);
      }))
  }
}
