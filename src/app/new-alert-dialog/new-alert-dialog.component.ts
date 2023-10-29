import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngxs/store';
import { AddAlertAction } from '../features/alerts/alert-list/store/alert.actions';


@Component({
  selector: 'app-new-alert-dialog',
  templateUrl: './new-alert-dialog.component.html',
  styleUrls: ['./new-alert-dialog.component.scss']
})
export class NewAlertDialogComponent implements OnInit {
  newAlertForm = new FormGroup({
    id: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    time: new FormControl('', Validators.required)
  });
  constructor(private store: Store, private dialog: MatDialog) { }

  ngOnInit(): void {
  }
public addAlert(){
this.store.dispatch(new AddAlertAction(this.newAlertForm.value))
this.dialog.closeAll();
}
}
