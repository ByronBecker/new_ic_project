import * as React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import loggerMiddleware from "redux-logger";
import App from "./App";
import applicationStore from "./reducers/rootReducer";

const appStore = createStore(
  applicationStore,
  applyMiddleware(loggerMiddleware)
);

function AppWrapper() {
  return (
    <Provider store={appStore}>
      <App />
    </Provider>
  );
}

export default AppWrapper;
