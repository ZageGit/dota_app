import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Hero } from '../../../../models/hero';
import { HeroService } from '../../../../services/hero.service';
import { AddPinnedHeroAction, GetHeroesAction, RemovePinnedHeroAction } from './hero.actions';
import { patch, removeItem } from '@ngxs/store/operators';
import { mockPinnedHeroes } from 'src/app/mockData/mockPinnedHeroes';


export class HeroStateModel{
    heroes: Hero[] = []
    pinnedHeroes: Hero[] = []
}

@State<HeroStateModel>({
    name: 'heroes',
    defaults:{
        heroes: [],
        pinnedHeroes: mockPinnedHeroes
    }
  })  

  @Injectable()
  export class HeroState{
    constructor(private heroService: HeroService){}

    @Selector()
    static heroes(state:HeroStateModel): Hero[]{
        return state.heroes
    }

    @Selector()
    static pinnedHeroes(state:HeroStateModel): Hero[]{
        return state.pinnedHeroes
    }

    @Action(GetHeroesAction)
    getHeroList(ctx: StateContext<HeroStateModel>):void {
      this.heroService.getHeroList().subscribe((response)=>{
        ctx.patchState({heroes:response})
      })
    }

    @Action(AddPinnedHeroAction)
    addAlert(ctx: StateContext<HeroStateModel>, action: AddPinnedHeroAction):void {
        const state = ctx.getState()
        ctx.setState({
            ...state,
            pinnedHeroes: [
                ...state.pinnedHeroes,
                action.payload
            ]
          });
    }

    @Action(RemovePinnedHeroAction)
    removeAlert(ctx: StateContext<HeroStateModel>, action: RemovePinnedHeroAction):void {
        ctx.setState(
            patch({
              pinnedHeroes: removeItem<Hero>((hero) => hero.id === action.payload),
            })
          );
    }
  }