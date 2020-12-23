import { Component, EventEmitter, Output } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
  // providers: [LoggingService]
}) 
/*
  providers -> by adding providers it allows angular to know it should be providing a service to this class
*/
export class NewAccountComponent {
  // @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private loggingService: LoggingService,
              private accountsService: AccountsService) // this is injecting, it tells angular you need this as a service (provide instance of logging class)
  {
    // below you subscribe to the status update event, once it has emitted you are retrieving that data and alerting it
    this.accountsService.statusUpdate.subscribe(
      (status: string) => alert('New Status: ' + status)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    /*
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });
    */
    // console.log('A server status changed, new status: ' + accountStatus);

    this.accountsService.addAccount(accountName, accountStatus);
    // this.loggingService.logStatusChange(accountStatus);

  }
}
