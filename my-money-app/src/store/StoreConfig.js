import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import thunk from "redux-thunk";

import dashboardReducer from "./reducers/dashboardReducer";
import tabReducer from "./reducers/tabsReducer";
import billingCycleReducer from "./reducers/billingCycleReducer";
import notificationReducer from "./reducers/notificationReducer";
import editTabReducer from "./reducers/editTabReducer";

const reducers = combineReducers({
  dashboard: dashboardReducer,
  tabs: tabReducer,
  billingCycles: billingCycleReducer,
  notifications: notificationReducer,
  editTab: editTabReducer
});


function storeConfig() {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
}

export default storeConfig;
