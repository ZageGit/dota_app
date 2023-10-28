import { Hero } from "src/app/models/hero";

export class GetHeroesAction {
    static readonly type = '[Hero] Get heroes';
    constructor() {}
  }

  export class PatchStateAction {
    static readonly type = '[Hero] patch';
    constructor(public payload: Hero[]) {}
  }