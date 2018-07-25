import { SET_BALANCE } from "./constants";
import { setBalance } from "./balanceActions";

describe("Balance Actions", () => {
  it("creates an action to set the balance", () => {
    const balance = 0;
    const expectedAction = { type: SET_BALANCE, payload: balance };
    expect(setBalance(balance)).toEqual(expectedAction);
  });
});
