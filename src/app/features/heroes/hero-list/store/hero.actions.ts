import { Hero } from "../../../../models/hero";

export class GetHeroesAction {
    static readonly type = '[Hero] Get heroes';
    constructor() {}
  }

  export class AddPinnedHeroAction {
    static readonly type = '[Hero] Pin hero'
    constructor(public payload: Hero) {}
  }

  export class RemovePinnedHeroAction {
    static readonly type = '[Hero] Remove pinned hero'
    constructor(public payload: number) {}
  }