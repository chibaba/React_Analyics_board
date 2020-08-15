import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "./store";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

if (process.env.NODE_ENV === "development") {
  require("./mock-endPoints/mocks");
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
