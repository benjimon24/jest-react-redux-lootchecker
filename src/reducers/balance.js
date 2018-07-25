import { SET_BALANCE } from "../actions/constants";

const INITIAL_STATE = 0;

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_BALANCE:
      return action.payload;
    default:
      return state;
  }
};
