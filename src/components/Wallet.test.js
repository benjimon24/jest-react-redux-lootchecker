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
  });
});
