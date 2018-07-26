import React from "react";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import reduxThunk from "redux-thunk";
import { Provider } from "react-redux";
import Wallet from "./Wallet";
import Loot from "./Loot";

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h2>LootCheck</h2>
        <hr />
        <Wallet />
        <hr />
        <Loot />
      </div>
    </Provider>
  );
};

export default App;
