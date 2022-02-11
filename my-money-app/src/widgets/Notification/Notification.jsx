import React from 'react'

import './Notification.css'

function Notification(props){
  return(
    <div className={`Notification Notification-${props.alert}`}>
      <h5>{props.title}</h5>
      <p>{props.message}</p>
    </div>
  )
}

export default Notification