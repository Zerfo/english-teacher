import { composeWithDevTools } from "redux-devtools-extension";
import { createEpicMiddleware } from "redux-observable";
import { createStore, applyMiddleware } from "redux";

import rootEpic from "store/config/root-epic";
import rootReducer from "store/config/root-reducer";

export default function (initialState = {}) {
  const composeEnhancers = composeWithDevTools({});
  const epicMiddleware = createEpicMiddleware();

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(epicMiddleware)),
  );

  epicMiddleware.run(rootEpic);

  return store;
}
