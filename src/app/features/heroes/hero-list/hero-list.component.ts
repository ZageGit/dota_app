import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Hero } from '../../../models/hero';
import { GetHeroesAction } from './store/hero.actions';
import { HeroState } from './store/hero.state';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {
  constructor(private store: Store) {}
  @Select(HeroState.heroes) heroes$!: Observable<Hero[]>;

  ngOnInit(): void {
    this.store.dispatch(new GetHeroesAction())
  }
}