import React from 'react'

import './ValueBox.css'

function ValueBox(props){
  const style={
    backgroundColor: props.color
  }

  return(
    <div className="ValueBox m-3 shadow-lg" style={style}>
      <div className="Column">
        <h3>R${props.value}</h3>
        <span>{props.description}</span>
      </div>
      <div className="Icon">
        <i className={props.icon}/>
      </div>
    </div>
  )
}

export default ValueBox