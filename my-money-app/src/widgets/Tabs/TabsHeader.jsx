import React from 'react'

import './TabsHeader.css'

function TabsHeader(props){
  return(
    <ul className="TabsHeader">
      {props.children}
    </ul>
  )
}

export default TabsHeader