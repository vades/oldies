
//TODO: https://blog.angularindepth.com/expecting-the-unexpected-best-practices-for-error-handling-in-angular-21c3662ef9e4
import { Injectable } from '@angular/core';

//TODO: replace with notifications not independent on the ngkit
import { VdsNotifyService } from '@app/lib/vades-ngkit/notify/vds-notify.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorsService {

  constructor(
    private notifyService: VdsNotifyService
  ) {}

  handleHttpError(error: any){
    this.notifyService.sendNotify(this.setHttpErrorMessage(error), 'is-danger');
  }
  setHttpErrorMessage(err: any): string{
    //TODO: create switch for statuses: 0, 403 and 500?
    const error = err.message || err.statusText;
     return error;
  }

  handleClientError(error: any): void{
    //this.notifyService.sendNotify(this.setClientErrorMessage(error), 'is-danger');
    console.error('handleClientError',error);
  }

  setClientErrorMessage(err: any): string{
    const error = 'An error has occurred which prevents the application from running. ' + (err.message || '');
    return error;
  }
}
