import { SET_BALANCE, DEPOSIT, WITHDRAW } from "./constants";
import { setBalance, deposit, withdraw } from "./balanceActions";

describe("Balance Actions", () => {
  it("creates an action to set the balance", () => {
    const amount = 0;
    const expectedAction = { type: SET_BALANCE, payload: amount };
    expect(setBalance(amount)).toEqual(expectedAction);
  });
  it("creates an action to deposit into the balance", () => {
    const amount = 20;
    const expectedAction = { type: DEPOSIT, payload: amount };
    expect(deposit(amount)).toEqual(expectedAction);
  });
  it("creates an action to withdraw from the balance", () => {
    const amount = 20;
    const expectedAction = { type: WITHDRAW, payload: amount };
    expect(withdraw(amount)).toEqual(expectedAction);
  });
});
