const INITIAL_STATE = {summary: {credits: 0, debts: 0}}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = INITIAL_STATE, action){
  switch(action.type){
    case 'BILLING_SUMMARY_FETCHED':
      console.log("Reducer: " + action)
      return{...state, summary: action.payload}
    default:
      return state
  }
}