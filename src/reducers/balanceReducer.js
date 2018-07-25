import { SET_BALANCE, DEPOSIT, WITHDRAW } from "../actions/constants";

const INITIAL_STATE = 0;

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_BALANCE:
      return action.payload;
    case DEPOSIT:
      return state + action.payload;
    case WITHDRAW:
      return state - action.payload;
    default:
      return state;
  }
};
