const initialState = {tabIndex: 1}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action){
  switch(action.type){
    case 'TAB_SETTED':
      return{...state, tabIndex: action.payload}
    default:
      return state
  }
}