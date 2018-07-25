import balanceReducer from "./balance";
import { SET_BALANCE } from "../actions/constants";

describe("balance reducer", () => {
  it("sets a balance", () => {
    const balance = 10;
    const action = { type: SET_BALANCE, payload: balance };
    expect(balanceReducer(undefined, action)).toEqual(balance);
  });
});
