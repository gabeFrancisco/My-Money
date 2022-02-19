import "./CreditField.css";

import FormValidation from "../Validation/FormValidation";
import * as Yup from "yup";

import { connect } from "react-redux";
import { addCredit } from "../../store/actions/billingCycleActions";
import { useFormik } from "formik";

function CreditField(props) {
  const formik = useFormik({
    initialValues: {
      name: props.credit ? props.credit.name : '',
      value: props.credit ? props.credit.value : ''
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(50, "Máximo de 50 caracteres")
        .required("Nome é obrigatório!"),
      value: Yup.number().required("Valor é obrigatório"),
    }),
    onSubmit: (data) => {
      props.addBCCredit(data);
      console.log("Credit added!");
    },
    enableReinitialize: true,
  });

  return (
    <form className="Field">
      <div className="row align-items-xl-end">
        <p>{props.name}</p>
        <div className="col">
          {/* <label>Nome</label> */}
          <input
            className="form-control form-control-sm"
            type="text"
            placeholder="Nome"
            readOnly={props.readOnly}
            value={formik.values.name}
            onChange={formik.handleChange}
            name="name"
          />
          {formik.errors.name && (
            <FormValidation message={formik.errors.name} />
          )}
        </div>
        <div className="col">
          {/* <label>Valor</label> */}
          <input
            placeholder="Valor"
            className="form-control form-control-sm"
            type="text"
            readOnly={props.readOnly}
            value={formik.values.value}
            onChange={formik.handleChange}
            name="value"
          />
          {formik.errors.value && (
            <FormValidation message={formik.errors.value} />
          )}
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
            <button
              className="cd-row btn btn-sm btn-success"
              type="button"
              onClick={formik.handleSubmit}
            >
              <i className="fas fa-plus"></i>
            </button>
          )}
        </div>
      </div>
    </form>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    addBCCredit(credit) {
      dispatch(addCredit(credit));
    },
  };
}

export default connect(null, mapDispatchToProps)(CreditField);
