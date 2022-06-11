import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import thunk from "redux-thunk";

import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";


// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const middlewares = applyMiddleware(thunk);

const store = createStore(
  rootReducer,
  // composeEnhancers(middlewares)
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
