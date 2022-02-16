import React from 'react'

import './Debts.css'

import Field from '../Field/Field'

function Debts(props){
  return(
    <div className="Debts">
      <h5 className="text-danger mt-2">Débitos</h5>
      <Field/>
    </div>
  )
}

export default Debts