import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { patch, removeItem } from '@ngxs/store/operators';
import { Alert } from '../../../models/alert';
import {
  AddAlertAction,
  RemoveAlertAction,
  SetAlertsAction,
  ShowAlertsForHeroAction,
} from './alert.actions';
import { mockAlerts } from 'src/app/mockData/mockAlerts';

export class AlertStateModel {
  alerts: Alert[] = [];
}

@State<AlertStateModel>({
  name: 'alerts',
  defaults: {
    alerts: [],
  },
})
@Injectable()
export class AlertState {
  constructor() {}

  @Selector()
  static alerts(state: AlertStateModel): Alert[] {
    return state.alerts;
  }

  @Action(AddAlertAction)
  addAlert(ctx: StateContext<AlertStateModel>, action: AddAlertAction): void {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      alerts: [...state.alerts, action.payload],
    });
  }

  @Action(RemoveAlertAction)
  removeAlert(
    ctx: StateContext<AlertStateModel>,
    action: RemoveAlertAction
  ): void {
    ctx.setState(
      patch({
        alerts: removeItem<Alert>((alert) => alert.id === action.payload),
      })
    );
  }

  @Action(SetAlertsAction)
  setAlerts(ctx: StateContext<AlertStateModel>, action: SetAlertsAction): void {
    ctx.patchState({ alerts: action.payload });
  }

  @Action(ShowAlertsForHeroAction)
  showAlertsforHero(
    ctx: StateContext<AlertStateModel>,
    action: ShowAlertsForHeroAction
  ): Alert[] {
    const state = ctx.getState();
    console.log(state)
    return state.alerts.filter((alert) => alert.hero.id === action.payload);
  }

}
