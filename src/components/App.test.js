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

    it("contains a loot component", () => {
      expect(app.find("Connect(Loot)").exists()).toBe(true);
    });

    it("contains a link to the coindesk api page", () => {
      expect(app.find("a").props().href).toBe("https://www.coindesk.com/price");
    });
  });
});
