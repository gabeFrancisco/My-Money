export function addNotification(message){
  return{
    type: 'ADD_NOTIFICATION',
    payload: message
  }
}
