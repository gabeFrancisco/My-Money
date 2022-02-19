import CreditField from "./CreditField";

import { connect, useDispatch } from "react-redux";

import "./Credits.css";
import { useEffect } from "react";
import { returnState } from "../../store/actions/billingCycleActions";

function Credits(props) {
  const dispatch = useDispatch();
  useEffect(() => dispatch(returnState()), [props, props.credits]);

  return (
    <div className="Credits">
      <h5 className="text-success mt-2">Creditos</h5>
      {props.credits &&
        props.credits.map((el) => {
          return <CreditField credit={el} readOnly={true} fetched={true} />;
        })}
      <CreditField />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    credits: state.billingCycles.credits,
  };
}

export default connect(mapStateToProps)(Credits);
