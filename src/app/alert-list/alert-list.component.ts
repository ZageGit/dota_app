import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { GetAlertsAction } from './store/alert.actions';
import { AlertState } from './store/alert.state';
import { Observable } from 'rxjs';
import { Alert } from '../models/alert';
import { MatDialog } from '@angular/material/dialog';
import { NewAlertDialogComponent } from '../new-alert-dialog/new-alert-dialog.component';



@Component({
  selector: 'app-alert-list',
  templateUrl: './alert-list.component.html',
  styleUrls: ['./alert-list.component.scss']
})
export class AlertListComponent implements OnInit {
  @Select(AlertState.alerts) alerts$!: Observable<Alert[]>;
  constructor(private store: Store, private dialog: MatDialog) { }


  ngOnInit(): void {
   this.store.dispatch(new GetAlertsAction())
  }

  public newAlert(){
    this.dialog.open(NewAlertDialogComponent)
  }

}
