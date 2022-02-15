const INITIAL_STATE = { isEdit: false, isRemove: false };

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case "EDIT_MODAL":
      return { ...state, isEdit: action.payload };
    case "REMOVE_MODAL":
      return { ...state, isRemove: action.payload };
    default:
      return state;
  }
}
