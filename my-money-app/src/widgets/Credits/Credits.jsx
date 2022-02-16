import React from "react";
import Field from "../Field/Field";

import { connect } from "react-redux";

import "./Credits.css";

function Credits(props) {
  return (
    <div className="Credits ">
      <h5 className="text-success mt-2">Creditos</h5>
      {props.credits &&
        props.credits.map((el) => <Field name={el.name} value={el.value} readOnly={true} fetched={true} />)}
        <Field/>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    credits: state.billingCycles.billingCycle.credits,
  };
}

export default connect(mapStateToProps)(Credits);
