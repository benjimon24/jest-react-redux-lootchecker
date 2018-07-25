import React from "react";
import { shallow } from "enzyme";
import { Wallet } from "./Wallet";

describe("Wallet", () => {
  const props = { balance: 20 };
  const wallet = shallow(<Wallet {...props} />);
  describe("Initialization", () => {
    it("renders properly", () => {
      expect(wallet).toMatchSnapshot();
    });
  });

  describe("Display", () => {
    it("displays the balance from props", () => {
      expect(wallet.find(".balance").text()).toEqual("Wallet Balance: 20");
    });
    it("contains an input to deposit into or withdraw from the wallet", () => {
      expect(wallet.find(".input-wallet").exists()).toBe(true);
    });
  });

  describe("User types into input", () => {
    const userBalance = "25";
    beforeEach(() => {
      wallet.find(".input-wallet").simulate("change", { target: { value: userBalance } });
    });

    it("updates the local wallet balance in the state and converts it to a number", () => {
      expect(wallet.state().balance).toEqual(parseInt(userBalance));
    });
  });
});
