import { useForm } from "react-hook-form";

import { connect } from "react-redux";

import { create } from "../../store/actions/billingCycleActions";
import { addNotification } from "../../store/actions/notificationActions";

import FormValidation from "../Validation/FormValidation";
import SectionTitle from "../../components/SectionTitle";
import Credits from "../Credits/Credits";
import Debts from "../Debts/Debts";
import { setCreate } from "../../store/actions/modalActions";

function Create(props) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
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
  };

  return (
    <div>
      <SectionTitle title="Incluir" />
      <form className="p-2"
        onSubmit={handleSubmit(onSubmit)}
      >
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
            {errors.name && (
              <FormValidation message="Nome não pode estar vazio!" />
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
              {...register("month", { required: true })}
            />
            {errors.month && (
              <FormValidation message="Mês precisa ser entre 1 e 12!" />
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
            {errors.year && (
              <FormValidation message="Ano não pode estar vazio!" />
            )}
          </div>
        </div>
        <div className="cd-row">
          <Credits />
          <Debts />
        </div>
        <div className="form-row d-flex d-inline justify-content-center mt-4">
          <button
            onClick={() => props.setCreateModal(false)}
            className="btn btn-outline-secondary pl-5 pr-5 mr-3"
            type="button"
          >
            Cancelar
          </button>
          <button className="btn btn-success pl-5 pr-5" type="submit">
            Novo ciclo!
          </button>
        </div>
      </form>
    </div>
  );
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

export default connect(null, mapDispatchToProps)(Create);
