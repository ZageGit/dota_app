import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { HeroState } from '../store/hero.state';
import { Observable } from 'rxjs';
import { Hero } from 'src/app/models/hero';

@Component({
  selector: 'app-pinned-heroes',
  templateUrl: './pinned-heroes.component.html',
  styleUrls: ['./pinned-heroes.component.scss']
})
export class PinnedHeroesComponent implements OnInit {

  constructor() { }
  @Select(HeroState.pinnedHeroes) pinnedHeroes$!: Observable<Hero[]>;

  ngOnInit(): void {
  }

}
