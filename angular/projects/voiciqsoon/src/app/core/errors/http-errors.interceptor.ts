import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { ErrorsHandler } from './errors.handler';

@Injectable({
  providedIn: 'root'
})
export class HttpErrorsInterceptor {

  constructor(
    private errorsHandler: ErrorsHandler
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(retry(3), catchError(error => {
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {

        // client-side error

       errorMessage = `Error: ${error.error.message}`;

      } else {

        // server-side error
        if (error.status === 401) {
          // auto logout if 401 response returned from api
          /* this.authService.logOut();
          location.reload(true); */
        }
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;


      }
      this.errorsHandler.handleHttpError(error);
      return throwError(error);

    }))
  }
}
