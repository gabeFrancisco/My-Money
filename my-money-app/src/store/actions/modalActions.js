export function setEdit(isEdit){
  return{
    type: 'EDIT_MODAL',
    payload: isEdit
  }
}

export function setRemove(isRemove){
  return{
    type: 'REMOVE_MODAL',
    payload: isRemove
  }
}