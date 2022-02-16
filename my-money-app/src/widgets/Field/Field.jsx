import React from 'react'

import './Field.css'

function Field(){
  return(
    <form className="Field">
      <div className="row m-2 align-items-xl-end">
        <div className="col">
          <label>Nome</label>
          <input className="form-control form-control-sm" type="text"/>
        </div>
        <div className="col">
          <label>Valor</label>
          <input className="form-control form-control-sm" type="text"/>
        </div>
        <div className="form-row align-items-center col-sm-1 col-auto">
          <button className="btn btn-sm btn-success">
            <i className="fas fa-plus"></i>
          </button>
        </div>
      </div>
    </form>
  )
}

export default Field