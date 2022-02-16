import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import thunk from "redux-thunk";

import dashboardReducer from "./reducers/dashboardReducer";
import billingCycleReducer from "./reducers/billingCycleReducer";
import notificationReducer from "./reducers/notificationReducer";
import modalReducer from "./reducers/modalReducer";

const reducers = combineReducers({
  dashboard: dashboardReducer,
  billingCycles: billingCycleReducer,
  notifications: notificationReducer,
  modal: modalReducer
});


function storeConfig() {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
}

export default storeConfig;
