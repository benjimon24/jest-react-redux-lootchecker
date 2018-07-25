import balanceReducer from "./balanceReducer";
import balanceReducer2 from "./balanceReducer";
import { SET_BALANCE, DEPOSIT, WITHDRAW } from "../actions/constants";

describe("Balance reducer", () => {
  const amount = 10;

  describe("initialization", () => {
    it("sets a balance", () => {
      const action = { type: SET_BALANCE, payload: amount };
      expect(balanceReducer(undefined, action)).toEqual(amount);
    });

    describe("re-initializing", () => {
      it("reads the balance from cookies", () => {
        expect(balanceReducer2(undefined, {})).toEqual(amount);
      });
    });
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
