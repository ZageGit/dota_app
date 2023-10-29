import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Select, Store } from '@ngxs/store';
import { AddAlertAction } from '../store/alert.actions';
import { HeroState } from '../../heroes/store/hero.state';
import { Observable } from 'rxjs';
import { Hero } from 'src/app/models/hero';

@Component({
  selector: 'app-new-alert-dialog',
  templateUrl: './new-alert-dialog.component.html',
  styleUrls: ['./new-alert-dialog.component.scss'],
})
export class NewAlertDialogComponent implements OnInit {
  newAlertForm = new FormGroup({
    id: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    time: new FormControl('', Validators.required),
    hero: new FormControl(undefined, Validators.required),
  });
  @Select(HeroState.heroes) heroes$!: Observable<Hero[]>;

  constructor(private store: Store, private dialog: MatDialog) {}

  ngOnInit(): void {}
  public addAlert() {
    this.store.dispatch(new AddAlertAction(this.newAlertForm.value));
    this.dialog.closeAll();
  }
}
