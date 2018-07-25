import { SET_BALANCE, DEPOSIT, WITHDRAW } from "./constants";

export const setBalance = payload => {
  return {
    type: SET_BALANCE,
    payload
  };
};

export const deposit = payload => {
  return {
    type: DEPOSIT,
    payload
  };
};

export const withdraw = payload => {
  return {
    type: WITHDRAW,
    payload
  };
};
