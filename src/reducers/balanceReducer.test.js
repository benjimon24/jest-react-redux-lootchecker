import balanceReducer from "./balanceReducer";
import { SET_BALANCE } from "../actions/constants";

describe("Balance reducer", () => {
  it("sets a balance", () => {
    const balance = 10;
    const action = { type: SET_BALANCE, payload: balance };
    expect(balanceReducer(undefined, action)).toEqual(balance);
  });
});
