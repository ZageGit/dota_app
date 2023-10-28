import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { HeroService } from 'src/app/services/hero.service';
import { GetHeroesAction } from './hero.actions';
import { Hero} from 'src/app/models/hero';


export class HeroStateModel{
    heroes: Hero[] = []
}

@State<HeroStateModel>({
    name: 'heroes',
    defaults:{
        heroes: []
    }
  })  

  @Injectable()
  export class HeroState{
    constructor(private heroService: HeroService){}

    @Selector()
    static heroes(state:HeroStateModel): Hero[]{
        return state.heroes
    }

    @Action(GetHeroesAction)
    getHeroList(ctx: StateContext<HeroStateModel>):void {
      this.heroService.getHeroList().subscribe((response)=>{
        ctx.patchState({heroes:response})
        console.log(ctx.getState())
      })
    }
  }