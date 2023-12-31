import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngxs/store';
import { Alert } from '../../../models/alert';
import { RemoveAlertAction } from '../store/alert.actions';

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
