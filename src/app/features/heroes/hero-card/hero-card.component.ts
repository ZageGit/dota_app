import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Hero } from '../../../models/hero';
import { AddPinnedHeroAction, RemovePinnedHeroAction } from '../store/hero.actions';
import { ShowAlertsForHeroAction } from '../../alerts/store/alert.actions';
import { MatDialog } from '@angular/material/dialog';
import { AlertListComponent } from '../../alerts/alert-list/alert-list.component';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.scss']
})
export class HeroCardComponent implements OnInit {
  @Input() hero!: Hero;
  @Input() context!: string;
  constructor(private store: Store, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  public addPinnedHero(hero:Hero){
this.store.dispatch(new AddPinnedHeroAction(hero))
  }

  public removePinnedHero(id:number){
    this.store.dispatch(new RemovePinnedHeroAction(id))
      }
    
  public showAlerts(id: number){
    this.store.dispatch(new ShowAlertsForHeroAction(id))
    this.dialog.open(AlertListComponent)
  }

}
