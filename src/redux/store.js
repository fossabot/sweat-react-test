import { applyMiddleware, compose, createStore } from "redux";
import { createBrowserHistory } from "history";
import createSagaMiddleware from "redux-saga";
import { routerMiddleware } from "connected-react-router";
import rootSaga from "./sagas";
import createRootReducer from "./reducers";

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configuredStore = (preloadState) => {
  const store = createStore(
    createRootReducer(history),
    preloadState,
    composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware)),
  );
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configuredStore;
