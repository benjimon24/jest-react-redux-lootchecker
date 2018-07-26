import bitcoinReducer from "./bitcoinReducer";
import { FETCH_BITCOIN } from "../actions/constants";

describe("Bitcoin Reducer", () => {
  const bitcoinData = { bpi: "bitcoin price index" };

  it("fetches and sets bitcoin data", () => {
    expect(bitcoinReducer({}, { type: FETCH_BITCOIN, payload: bitcoinData })).toEqual(bitcoinData);
  });
});
