import { useForm } from "react-hook-form";

import './Create.css'

import { connect } from "react-redux";

import { create } from "../../store/actions/billingCycleActions";
import { setTab } from "../../store/actions/tabsActions";
import { addNotification } from "../../store/actions/notificationActions";

import FormValidation from "../Validation/FormValidation";
import SectionTitle from "../../components/SectionTitle";
import Credits from "../Credits/Credits";
import Debts from "../Credits/Debts";

function Create(props) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    props.createData(data);
    props.selectTab(1);

    props.setNotification({
      message: {
        alert: "Success",
        title: "Ciclo criado",
        message: `O ciclo ${data.name} de ${data.month}/${data.year} foi adicionado!`,
        icon: 'plus'
      },
    });
    console.log(props.getNotificationMessage());
  };

  return (
    <div>
      <SectionTitle title="Incluir" />
      <form className="m-4 border rounded p-4" onSubmit={handleSubmit(onSubmit)}>
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
        <div className="Cd-row">
          <Credits/>
          <Debts/>
        </div>
        <div className="form-row d-flex d-inline justify-content-center mt-4">
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
    selectTab(tab) {
      dispatch(setTab(tab));
    },
    setNotification(notification) {
      dispatch(addNotification(notification));
    },
  };
}

export default connect(null, mapDispatchToProps)(Create);
