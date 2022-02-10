import React from "react";

import { useForm } from "react-hook-form";

import { connect } from "react-redux";
import { create } from "../store/actions/billingCycleActions";
import { setTab } from "../store/actions/tabsActions";

import FormValidation from "./FormValidation";

function BillingCycleForm(props) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    props.createData(data);
    props.selectTab(1)
  };

  return (
    <form className="m-4 border p-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-row">
        <div className="col">
          <label>Nome do ciclo</label>
          <input
            name="name"
            type="text"
            className="form-control"
            placeholder="Janeiro"
            {...register("name", { required: true })}
          />
          {errors.name && <FormValidation message="Name cannot be null!" />}
        </div>
        <div className="col">
          <label>Mês</label>
          <input
            name="month"
            className="form-control"
            type="number"
            min="1"
            max="12"
            placeholder="1"
            {...register("month", { required: true })}
          />
          {errors.month && (
            <FormValidation message="Month cannot be null and needs to be between 1 and 12" />
          )}
        </div>
        <div className="col">
          <label>Ano</label>
          <input
            name="year"
            className="form-control"
            type="number"
            min="1960"
            max="2099"
            placeholder={new Date().getFullYear()}
            {...register("year", { required: true })}
          />
          {errors.year && <FormValidation message="Year cannot be null" />}
        </div>
      </div>
      <div className="form-row d-flex d-inline justify-content-center mt-4">
        <button className="btn btn-success pl-5 pr-5" type="submit">
          Novo ciclo!
        </button>
      </div>
    </form>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    createData(data) {
      dispatch(create(data));
    },
    selectTab(tab) {
      dispatch(setTab(tab));
    },
  };
}

export default connect(null, mapDispatchToProps)(BillingCycleForm);
