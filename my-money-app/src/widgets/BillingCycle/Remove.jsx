import React from "react";
import SectionTitle from "../../components/SectionTitle";

import { connect } from "react-redux";
import { setRemove } from "../../store/actions/modalActions";
import { remove } from "../../store/actions/billingCycleActions";
import { addNotification } from "../../store/actions/notificationActions";

function Remove(props) {
  function handleSubmit() {
    props.removeBillingCycle(props.billingCycle.id);
    console.log(props.billingCycle)
    props.setNotification({
      message: {
        alert: "Danger",
        title: "Ciclo removido",
        message: `O ciclo ${props.billingCycle.name} de ${props.billingCycle.month}/${props.billingCycle.year} foi removido!`,
        icon: 'trash'
      },
    });

    props.setRemoveModal(false)
  }

  return (
    <div>
      <SectionTitle
        title="Remover ciclo"
        subtitle="Tem certeza que deseja remover este ciclo?"
      />
      <div className="form-row d-flex d-inline justify-content-center mt-4">
        <button
          className="btn btn-outline-dark pl-5 pr-5 mr-3"
          type="button"
          onClick={() => props.setRemoveModal(false)}
        >
          Cancelar
        </button>
        <button
          className="btn btn-danger pl-5 pr-5"
          type="submit"
          onClick={() => handleSubmit()}
        >
          Remover ciclo!
        </button>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    billingCycle: state.billingCycles.billingCycle,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setRemoveModal(value) {
      dispatch(setRemove(value));
    },
    removeBillingCycle(id) {
      dispatch(remove(id));
    },
    setNotification(message) {
      dispatch(addNotification(message));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Remove);
