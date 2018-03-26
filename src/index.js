import React from "react";
import { render } from "react-dom";
import createHistory from "history/createBrowserHistory";
import { Provider } from "react-redux";
import { createLogger } from "redux-logger";
import { routerMiddleware } from "react-router-redux";
import { applyMiddleware, createStore } from "redux";
import registerServiceWorker from './registerServiceWorker';

import './index.css';

import Routes from "./routes";
import reducer from "./reducers";

const history = createHistory();
const logger = createLogger();

const middleware = applyMiddleware(logger, routerMiddleware(history));

// create store
const store = createStore(reducer, middleware);

const AppRoute = () => (
  <Provider store={store}>
    <Routes history={history} />
  </Provider>
);

render(<AppRoute />, document.getElementById("root"));
registerServiceWorker();