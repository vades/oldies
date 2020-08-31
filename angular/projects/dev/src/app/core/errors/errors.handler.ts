
//TODO: https://blog.angularindepth.com/expecting-the-unexpected-best-practices-for-error-handling-in-angular-21c3662ef9e4
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ErrorsHandler {
  private env = environment;
  constructor(
    private snackBar: MatSnackBar
  ) {}

  handleHttpError(error: any){
    this.snackBar.open(this.setHttpErrorMessage(error),'OK');
  }
  setHttpErrorMessage(err: any): string{
    let error = err.statusText;
    
    if(false === this.env.production){
      error += '! ' + err.message;
    }
     return error;
  }
  handleClientError(error: any): void{
    console.error('handleClientError',error);
  }

  setClientErrorMessage(err: any): string{
    const error = 'An error has occurred which prevents the application from running. ' + (err.message || '');
    return error;
  }
}
