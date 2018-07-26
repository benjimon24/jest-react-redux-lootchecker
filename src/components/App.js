import React, { Component } from "react";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import reduxThunk from "redux-thunk";
import { Provider } from "react-redux";
import Wallet from "./Wallet";

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <h2>LootCheck</h2>
          <hr />
          <Wallet />
        </div>
      </Provider>
    );
  }
}

export default App;
