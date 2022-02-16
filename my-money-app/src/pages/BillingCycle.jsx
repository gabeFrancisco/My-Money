import SectionTitle from "../components/SectionTitle";
import List from "../widgets/BillingCycle/List";
import Create from "../widgets/BillingCycle/Create";
import Column from "../components/Column";
import Edit from "../widgets/BillingCycle/Edit";
import Rodal from "rodal";
import Remove from "../widgets/BillingCycle/Remove";

import "rodal/lib/rodal.css";

import { connect } from "react-redux";
import { getList } from "../store/actions/billingCycleActions";
import { useEffect } from "react";
import { setCreate, setEdit, setRemove } from "../store/actions/modalActions";

function BillingCycle(props) {
  useEffect(() => {
    props.fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="fadeIn">
      <SectionTitle
        title="Ciclos de Pagamento"
        subtitle="Gerencie todos os ciclos aquie nesta sessão"
      />
      <Column>
        {props.isCreate && (
          <Rodal
            visible={props.isCreate}
            onClose={() => props.setCreateModal(false)}
            customStyles={{
              width: "80vw",
              height: "85vh",
              backgroundColor: "#f7f7f7",
              borderRadius: '10px'
            }}
          >
            <Create />
          </Rodal>
        )}
        {props.isEdit && (
          <Rodal
            visible={props.isEdit}
            onClose={() => props.setEditModal(false)}
            customStyles={{
              width: "80vw",
              height: "85vh",
              backgroundColor: "#f7f7f7",
              borderRadius: '10px'
            }}
          >
            <Edit />
          </Rodal>
        )}
        {props.isRemove && (
          <Rodal
            visible={props.isRemove}
            onClose={() => props.setRemoveModal(false)}
            customStyles={{
              width: '80vw',
              height: '70vh',
            }}
          >
            <Remove />
          </Rodal>
        )}
        <List />
      </Column>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    list: state.billingCycles.list,
    isCreate: state.modal.isCreate,
    isEdit: state.modal.isEdit,
    isRemove: state.modal.isRemove,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData() {
      dispatch(getList());
    },
    setCreateModal(value) {
      dispatch(setCreate(value));
    },
    setEditModal(value) {
      dispatch(setEdit(value));
    },
    setRemoveModal(value) {
      dispatch(setRemove(value));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycle);
