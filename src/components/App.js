import React, { Component } from "react";
import { createStore } from "redux";
import rootReducer from "../reducers";
import { Provider } from "react-redux";

const store = createStore(rootReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div />
      </Provider>
    );
  }
}

export default App;
