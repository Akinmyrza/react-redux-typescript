import { ActionType } from '../action-types/action-types';
import { Dispatch } from 'redux';
import { Action } from '../actions/actions';

export const depositMoney = (amount: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.DEPOSIT,
      payload: amount,
    });
  };
};

export const withdrawMoney = (amount: number) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ActionType.WITHDRAW,
      payload: amount,
    });
  };
};

export const bankruptMoney = () => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ActionType.BANKRUPT,
    });
  };
};
