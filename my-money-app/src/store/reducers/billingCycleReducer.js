const INITIAL_STATE = { list: [], billingCycle: {} };

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case "BILLING_CYCLES_FETCHED":
      return { ...state, list: action.payload };
    case "BILLING_CYCLES_CREATED":
      return { ...state };
    case "BILLING_CYCLES_READED":
      return { ...state, billingCycle: action.payload };
    case "BILLING_CYCLES_UPDATED":
      return{...state}
    default:
      return state;
  }
}
