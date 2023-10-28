import { Component, Input, OnInit } from '@angular/core';
import { Alert } from '../models/alert';
import { Store } from '@ngxs/store';
import { RemoveAlertAction } from '../alert-list/store/alert.actions';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-alert-card',
  templateUrl: './alert-card.component.html',
  styleUrls: ['./alert-card.component.scss']
})
export class AlertCardComponent implements OnInit {
  @Input() alert!: Alert;
  constructor(private store: Store, private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  public removeAlert(id: string){
    this.store.dispatch(new RemoveAlertAction(id))
  }
}
