import React from 'react'

import './Tabs.css'

function Tabs(props){
  return(
    <div className="Tabs shadow-lg">
      {props.children}
    </div>
  )
}

export default Tabs