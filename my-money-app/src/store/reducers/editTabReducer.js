const INITIAL_STATE = ({isEdited: false})

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = INITIAL_STATE, action){
  switch(action.type){
    case 'EDIT_TAB':
      return{...state, isEdited: action.payload}
    default:
      return state
  }
}