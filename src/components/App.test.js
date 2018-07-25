import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App", () => {
  const app = shallow(<App />);
  describe("Initialization", () => {
    it("renders properly", () => {
      expect(app).toMatchSnapshot();
    });

    it("contains a wallet component", () => {
      // console.log(app.debug()); contains a connected wallet component
      expect(app.find("Connect(Wallet)").exists()).toBe(true);
    });
  });
});
