import React from 'react'

import './SectionTitle.css'

function SectionTitle(props){
  return (
    <div className="SectionTitle">
      <h4>{props.title}</h4>
      <hr/>
      <h6>{props.subtitle}</h6>
    </div>
  )
}

export default SectionTitle