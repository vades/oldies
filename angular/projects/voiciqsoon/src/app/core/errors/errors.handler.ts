
//TODO: https://blog.angularindepth.com/expecting-the-unexpected-best-practices-for-error-handling-in-angular-21c3662ef9e4
import { Injectable } from '@angular/core';

//import { VdsNotifyService } from '@app/components/notify/vds-notify.service';
import { NgkAlertifyService } from '@ngk/components/alertify/ngk-alertify.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorsHandler {

  constructor(
    private ngkAlertifyService: NgkAlertifyService
  ) {}

  handleHttpError(error: any){
    this.ngkAlertifyService.show(this.setHttpErrorMessage(error),'is-danger');
  }
  setHttpErrorMessage(error: any): string{
    let err = error.statusText;
    if(error['error'] !== undefined){
      err = error['error']['message'] || error.statusText;
    }
    return err;
  }

  handleClientError(error: any): void{
    console.error('handleClientError',error);
  }

  setClientErrorMessage(err: any): string{
    const error = 'An error has occurred which prevents the application from running. ' + (err.message || '');
    return error;
  }
}
