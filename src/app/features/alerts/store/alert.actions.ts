import { Alert } from "../../../models/alert";


export class GetAlertsAction {
    static readonly type = '[Alert] Get alerts';
    constructor() {}
  }

export class AddAlertAction {
    static readonly type = '[Alert] Add alert';
    constructor(public payload: Alert) {}
  }

  export class RemoveAlertAction {
    static readonly type = '[Alert] Remove alerts';
    constructor(public payload: string) {}
  }

  export class SetAlertsAction {
    static readonly type = '[Alert] Set alerts';
    constructor(public payload: Alert[]) {}
  }