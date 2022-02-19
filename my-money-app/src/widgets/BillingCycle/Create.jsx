import { connect, useStore } from "react-redux";

import { create } from "../../store/actions/billingCycleActions";
import { addNotification } from "../../store/actions/notificationActions";

import FormValidation from "../Validation/FormValidation";
import SectionTitle from "../../components/SectionTitle";
import Credits from "../Credits/Credits";
import Debts from "../Debts/Debts";
import { setCreate } from "../../store/actions/modalActions";

import { useFormik } from "formik";

import * as Yup from "yup";

function Create(props) {
  const formik = useFormik({
    initialValues: {
      name: "",
      month: 0,
      year: 0,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(50, "Nome não pode passar de 50 caracteres")
        .required("Nome é obrigatório!"),
      month: Yup.number()
        .min(1, "Insira um mês de 1 a 12")
        .max(12, "Insira um mês de 1 a 12")
        .required("Mês é obrigatório"),
      year: Yup.number()
        .min(1960, "Insira um ano entre 1960 e 2099")
        .max(2099, "Insira um ano entre 1960 e 2099")
        .required("Ano é obrigatório"),
    }),
    onSubmit: (data) => {
      data.credits = props.credits
      data.debts = props.debts
      props.createData(data);
      props.setNotification({
        message: {
          alert: "Success",
          title: "Ciclo criado",
          message: `O ciclo ${data.name} de ${data.month}/${data.year} foi adicionado!`,
          icon: "plus",
        },
      });
      props.setCreateModal(false);
    },
  });

  return (
    <div>
      <SectionTitle title="Novo ciclo"  />
      <form className="p-2 input-space">
        <div>
          <div className="form-row">
            <div className="col">
              <label>Nome do ciclo</label>
              <input
                name="name"
                type="text"
                className="form-control"
                placeholder="Janeiro"
                values={formik.values.name}
                onChange={formik.handleChange}
              />
              {formik.errors.name && (
                <FormValidation message={formik.errors.name} />
              )}
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
                values={formik.values.month}
                onChange={formik.handleChange}
              />
              {formik.errors.month && (
                <FormValidation message={formik.errors.month} />
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
                values={formik.values.year}
                onChange={formik.handleChange}
              />
               {formik.errors.year && (
                <FormValidation message={formik.errors.year} />
              )}
            </div>
          </div>
          <div className="cd-row">
            <Credits />
            <Debts />
          </div>
        </div>
        <div>
          <div className="form-row d-flex d-inline justify-content-center mt-4">
            <button
              onClick={() => props.setCreateModal(false)}
              className="btn btn-outline-dark pl-5 pr-5 mr-3"
              type="button"
            >
              Cancelar
            </button>
            <button
              className="btn btn-success pl-5 pr-5"
              type="button"
              onClick={formik.handleSubmit}
            >
              Novo ciclo!
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

function mapStateToProps(state){
  return{
    credits: state.billingCycles.credits,
    debts: state.billingCycles.debts
  }
}

function mapDispatchToProps(dispatch) {
  return {
    createData(data) {
      dispatch(create(data));
    },
    setNotification(notification) {
      dispatch(addNotification(notification));
    },
    setCreateModal(value) {
      dispatch(setCreate(value));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Create);
