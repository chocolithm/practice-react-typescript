import type { Action } from 'redux';

export type State = string;

export type SetErrorMessageAction = Action<'@errorMessage/setErrorMessage'> & {
  payload: string;
};

export type Actions = SetErrorMessageAction;
