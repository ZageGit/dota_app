import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext} from '@ngxs/store';
import { Alert } from 'src/app/models/alert';
import { AddAlertAction, RemoveAlertAction } from './alert.actions';
import { patch, removeItem } from '@ngxs/store/operators';
import { mockAlerts } from 'src/app/mockData/mockAlerts';



export class AlertStateModel{
    alerts: Alert[] = []
}

@State<AlertStateModel>({
    name: 'alerts',
    defaults:{
        alerts: mockAlerts
    }
  })  

  @Injectable()
  export class AlertState{
    constructor(){}

    @Selector()
    static alerts(state:AlertStateModel): Alert[]{
        return state.alerts
    }

    @Action(AddAlertAction)
    addAlert(ctx: StateContext<AlertStateModel>, action: AddAlertAction):void {
        const state = ctx.getState()
        ctx.setState({
            ...state,
            alerts: [
                ...state.alerts,
                action.payload
            ]
          });
          console.log(ctx.getState())
    }
    
    @Action(RemoveAlertAction)
    removeAlert(ctx: StateContext<AlertStateModel>, action: RemoveAlertAction):void {
        ctx.setState(
            patch({
              alerts: removeItem<Alert>((alert) => alert.id === action.payload),
            })
          );
          console.log(ctx.getState())
    }
  }