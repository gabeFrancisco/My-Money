const INITIAL_STATE = { list: [], billingCycle: {}, credits: [], debts: []};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case "BILLING_CYCLES_FETCHED":
      return { ...state, list: action.payload };
    case "BILLING_CYCLES_CREATED":
      return { ...state, billingCycle: action.payload };
    case "BILLING_CYCLES_READED":
      return { ...state, billingCycle: action.billingCycle, credits: action.credits, debts: action.debts};
    case "BILLING_CYCLES_UPDATED":
      return { ...state };
    case "BILLING_CYCLES_REMOVED":
      return { ...state };
    case "CREDIT_ADDED":
      return { ...state, credits: state.credits.concat(action.payload)};
    case "DEBT_ADDED":
      return { ...state, debts: state.debts.concat(action.payload) };
    case "RETURN_STATE":
      return { ...state };
    default:
      return state;
  }
}
