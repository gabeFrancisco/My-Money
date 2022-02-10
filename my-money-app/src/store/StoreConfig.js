import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { reducer as formReducer} from 'redux-form'

import thunk from "redux-thunk";

import dashboardReducer from "./reducers/dashboardReducer";
import tabReducer from "./reducers/tabsReducer";
import billingCycleReducer from "./reducers/billingCycleReducer";

const reducers = combineReducers({
  dashboard: dashboardReducer,
  tabs: tabReducer,
  billingCycles: billingCycleReducer,
  form: formReducer
});


function storeConfig() {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
}

export default storeConfig;
