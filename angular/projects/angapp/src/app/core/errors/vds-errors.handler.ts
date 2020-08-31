
import { ErrorHandler, Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorsService } from './errors.service';
//import * as StackTraceParser from 'error-stack-parser';

@Injectable()
export class VdsErrorsHandler implements ErrorHandler {
  constructor(
    private errorsService: ErrorsService
  ) { }
  handleError(error: Error | HttpErrorResponse) {
    if (error instanceof HttpErrorResponse) {
      // We are catching HTTP error in the Http Error Interceptor
      return;
    }

    // Do something with client error
    //console.log( error.message ? error.message : error.toString())
    //return;
    this.errorsService.handleClientError(error);
  }
}

