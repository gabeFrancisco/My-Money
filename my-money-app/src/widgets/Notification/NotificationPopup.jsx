import React from 'react'

import './NotificationPopup.css'

function NotificationPopup(props){
  return(
    <div className={`NotificationPopup NotificationPopup-${props.alert}`}>
      <h5>{props.title}</h5>
      <p>{props.message}</p>
    </div>
  )
}

export default NotificationPopup