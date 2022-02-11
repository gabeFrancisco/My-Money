const INITIAL_STATE = {messageList: []}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = INITIAL_STATE, action){
  switch(action.type){
    case 'ADD_NOTIFICATION':
      return{...state, messageList: state.messageList.concat(action.payload)}
    default:
      return state
  }
}

