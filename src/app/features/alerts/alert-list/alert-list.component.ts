import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { mockAlerts } from '../../../mockData/mockAlerts';
import { Alert } from '../../../models/alert';
import { NewAlertDialogComponent } from '../new-alert-dialog/new-alert-dialog.component';
import { GetAlertsAction, SetAlertsAction } from './store/alert.actions';
import { AlertState } from './store/alert.state';
import { GetHeroesAction } from '../../heroes/hero-list/store/hero.actions';



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
   this.store.dispatch(new GetHeroesAction())
  }

  public newAlert(){
    this.dialog.open(NewAlertDialogComponent)
  }

}
