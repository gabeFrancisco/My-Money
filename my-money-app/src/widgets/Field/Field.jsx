import React, { useMemo } from "react";

import "./Field.css";

import { useForm } from "react-hook-form";

function Field(props) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: useMemo(() => {
      return props;
    }, [props]),
  });

  const onSubmit = (data) => {};

  return (
    <form className="Field" onSubmit={handleSubmit(onSubmit)}>
      <div className="row m-2 align-items-xl-end">
        <div className="col">
          {/* <label>Nome</label> */}
          <input
            className="form-control form-control-sm"
            type="text"
            placeholder="Nome"
            {...register("name", {
              required: true,
            })}
            readOnly={props.readOnly}
          />
        </div>
        <div className="col">
          {/* <label>Valor</label> */}
          <input
          placeholder="Valor"
            className="form-control form-control-sm"
            type="text"
            {...register("value", {
              required: true,
            })}
            readOnly={props.readOnly}
          />
        </div>
        <div className="form-row col-sm-2 col-auto mr-2">
          {props.fetched ? (
            <div className="cd-row">
              <button className="btn btn-sm btn-warning mr-2">
                <i className="fas fa-pen text-white"></i>
              </button>
              <button className="btn btn-sm btn-danger">
                <i className="fas fa-trash"></i>
              </button>
            </div>
          ) : (
            <button className="cd-row btn btn-sm btn-success">
              <i className="fas fa-plus"></i>
            </button>
          )}
        </div>
      </div>
    </form>
  );
}

export default Field;
