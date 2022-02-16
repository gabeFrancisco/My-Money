import FormValidation from "../Validation/FormValidation";
import SectionTitle from "../../components/SectionTitle";
import Credits from "../Credits/Credits";
import Debts from "../Debts/Debts";

import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { setEdit } from "../../store/actions/modalActions";
import { useEffect, useMemo } from "react";
import { update } from "../../store/actions/billingCycleActions";
import { addNotification } from "../../store/actions/notificationActions";

function Edit(props) {
  let billingCycle = props.billingCycle;

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: useMemo(() => {
      return props.billingCycle;
    }, [props]),
  });

  useEffect(() => {
    reset(props.billingCycle);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.billingCycle]);

  const onSubmit = (data) => {
    props.updateBillingCycle(data);

    props.setNotification({
      message: {
        alert: "Info",
        title: "Ciclo atualizado",
        message: `O ciclo ${data.name} de ${data.month}/${data.year} foi atualizado!`,
        icon: "pen",
      },
    });

    props.setEditModal(false);
  };

  if (props.billingCycle) {
    return (
      <div className="fadeIn" id="edit">
        <SectionTitle title="Atualizar Ciclo" />
        <form className="p-2" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-row">
            <div className="col">
              <label>Nome do ciclo</label>
              <input
                name="name"
                type="text"
                className="form-control"
                placeholder="Janeiro"
                {...register("name", {
                  required: true,
                  value: billingCycle.name,
                })}
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
                {...register("month", {
                  required: true,
                })}
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
                {...register("year", {
                  required: true,
                })}
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
              onClick={() => props.setEditModal(false)}
              className="btn btn-outline-dark pl-5 pr-5 mr-3"
              type="button"
            >
              Cancelar
            </button>
            <button className="btn btn-primary pl-5 pr-5" type="submit">
              Atualizar ciclo!
            </button>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    billingCycle: state.billingCycles.billingCycle,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setEditModal(value) {
      dispatch(setEdit(value));
    },
    updateBillingCycle(billingCycle) {
      dispatch(update(billingCycle));
    },
    setNotification(message) {
      dispatch(addNotification(message));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
