import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import dashboardReducer from "./reducers/dashboardReducer";

import thunk from "redux-thunk";

const reducers = combineReducers({
  dashboard: dashboardReducer,
});

function storeConfig() {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
}

export default storeConfig;
