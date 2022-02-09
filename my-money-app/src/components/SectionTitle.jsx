import React from 'react'

import './SectionTitle.css'

function SectionTitle(props){
  return (
    <div className="SectionTitle">
      <h3>{props.title}</h3>
      <hr/>
      <h6>{props.subtitle}</h6>
    </div>
  )
}

export default SectionTitle