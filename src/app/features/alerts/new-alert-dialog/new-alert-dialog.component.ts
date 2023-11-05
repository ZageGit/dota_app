import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
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
  newAlertForm = new UntypedFormGroup({
    id: new UntypedFormControl('', Validators.required),
    name: new UntypedFormControl('', Validators.required),
    description: new UntypedFormControl('', Validators.required),
    time: new UntypedFormControl('', Validators.required),
    hero: new UntypedFormControl('', Validators.required),
  });
  @Select(HeroState.heroes) heroes$!: Observable<Hero[]>;

  constructor(private store: Store, private dialog: MatDialog) {}

  ngOnInit(): void {}
  public addAlert() {
    this.store.dispatch(new AddAlertAction(this.newAlertForm.value));
    this.dialog.closeAll();
  }
}
