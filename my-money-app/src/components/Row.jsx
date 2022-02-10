import React from 'react'

import './Row.css'

function Row(props){
  return(
    <div className="Row mt-3">
      {props.children}
    </div>
  )
}

export default Row