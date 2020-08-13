import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "./store/index";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

if (process.env.NODE_ENV === "development") {
  require("./mock-endPoints/mocks");
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
