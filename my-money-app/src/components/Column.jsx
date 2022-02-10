import React from 'react'

import './Column.css'

function Column(props){
  return(
    <div className="Column mt-3">
      {props.children}
    </div>
  )
}

export default Column