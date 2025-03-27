import { Action } from 'redux';

export type SetTodayAction = Action<'SetToday'> & {
  today: Date;
};

export type Actions = SetTodayAction;
