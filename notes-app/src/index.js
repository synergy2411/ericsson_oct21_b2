import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
// import reducerFn from "./store/reducers/rootReducer";
import counterReducer from "./store/reducers/counterReducer";
import resultReducer from "./store/reducers/resultReducer";

const store = createStore(combineReducers({
  ctr : counterReducer,
  res : resultReducer
}));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
reportWebVitals();
