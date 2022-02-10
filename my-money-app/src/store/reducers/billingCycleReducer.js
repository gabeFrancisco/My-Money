const INITIAL_STATE = {list: []}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = INITIAL_STATE, action){
  switch(action.type){
    case 'BILLING_CYCLES_FETCHED':
      return{...state, list: action.payload}
    default:
      return state
  }
}