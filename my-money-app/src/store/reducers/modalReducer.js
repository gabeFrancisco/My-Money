const INITIAL_STATE = {
  isCreate: false,
  isEdit: false,
  isRemove: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case "CREATE_MODAL":
      return { ...state, isCreate: action.payload };
    case "EDIT_MODAL":
      return { ...state, isEdit: action.payload };
    case "REMOVE_MODAL":
      return { ...state, isRemove: action.payload };
    default:
      return state;
  }
}
