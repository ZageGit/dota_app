import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { mockAlerts } from '../../../mockData/mockAlerts';
import { Alert } from '../../../models/alert';
import { NewAlertDialogComponent } from '../../../new-alert-dialog/new-alert-dialog.component';
import { GetAlertsAction, SetAlertsAction } from './store/alert.actions';
import { AlertState } from './store/alert.state';



@Component({
  selector: 'app-alert-list',
  templateUrl: './alert-list.component.html',
  styleUrls: ['./alert-list.component.scss']
})
export class AlertListComponent implements OnInit {
  @Select(AlertState.alerts) alerts$!: Observable<Alert[]>;
  constructor(private store: Store, private dialog: MatDialog) { }


  ngOnInit(): void {
    this.store.dispatch(new SetAlertsAction(mockAlerts))
   this.store.dispatch(new GetAlertsAction())
  }

  public newAlert(){
    this.dialog.open(NewAlertDialogComponent)
  }

}
