import SectionTitle from "../components/SectionTitle";
import TabContent from "../widgets/Tabs/TabContent";
import TabHeader from "../widgets/Tabs/TabHeader";
import Tabs from "../widgets/Tabs/Tabs";
import TabsContent from "../widgets/Tabs/TabsContent";
import TabsHeader from "../widgets/Tabs/TabsHeader";
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
import { setEdit, setRemove } from "../store/actions/modalActions";

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
        <Tabs>
          <TabsHeader>
            <TabHeader title="Listar" icon="fas fa-list" target={1}></TabHeader>
            <TabHeader
              title="Incluir"
              icon="fas fa-plus"
              target={2}
            ></TabHeader>
          </TabsHeader>
          <TabsContent>
            <TabContent target={1}>
              {props.isEdit && (
                <Rodal visible={props.isEdit} onClose={() => props.setEditModal(false)} width={600} height={400}>
                  <Edit />
                </Rodal>
              )}
              {props.isRemove && (
                <Rodal visible={props.isRemove} onClose={() => props.setRemoveModal(false)} width={600} height={210}>
                  <Remove/>
                </Rodal>
              )}
              <List />
            </TabContent>
            <TabContent target={2}>
              <Create />
            </TabContent>
          </TabsContent>
        </Tabs>
      </Column>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    list: state.billingCycles.list,
    isEdit: state.modal.isEdit,
    isRemove: state.modal.isRemove
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData() {
      dispatch(getList());
    },
    setEditModal(value) {
      dispatch(setEdit(value));
    },
    setRemoveModal(value){
      dispatch(setRemove(value))
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycle);
