import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";

import rootReducer from "./rootReducer";

import rootsagas from "./sagas/saga";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [logger, sagaMiddleware];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

sagaMiddleware.run(rootsagas);

export default store;
