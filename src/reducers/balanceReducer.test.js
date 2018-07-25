import balanceReducer from "./balanceReducer";
import { SET_BALANCE, DEPOSIT, WITHDRAW } from "../actions/constants";

describe("Balance reducer", () => {
  it("sets a balance", () => {
    const amount = 10;
    const action = { type: SET_BALANCE, payload: amount };
    expect(balanceReducer(undefined, action)).toEqual(amount);
  });

  it("deposits into balance", () => {
    const initial_state = 5;
    const amount = 10;
    const action = { type: DEPOSIT, payload: amount };
    expect(balanceReducer(initial_state, action)).toEqual(initial_state + amount);
  });

  it("withdraws from balance", () => {
    const initial_state = 20;
    const amount = 10;
    const action = { type: WITHDRAW, payload: amount };
    expect(balanceReducer(initial_state, action)).toEqual(initial_state - amount);
  });
});
