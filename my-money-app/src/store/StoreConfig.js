import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import dashboardReducer from "./reducers/dashboardReducer";

import thunk from "redux-thunk";
import tabReducer from "./reducers/tabsReducer";

const reducers = combineReducers({
  dashboard: dashboardReducer,
  tabs: tabReducer
});


function storeConfig() {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
}

export default storeConfig;
