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

import { connect } from "react-redux";
import { getList } from "../store/actions/billingCycleActions";
import { useEffect } from "react";
import { setEdit } from "../store/actions/editTabActions";

function BillingCycle(props) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    props.fetchData();
  }, []);

  useEffect(
    () => props.setEditTab && console.log(props.isEdit),
    [props.isEdit]
  );

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
              {props.isEdit === true && <Edit />}
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
    isEdit: state.editTab.isEdited,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData() {
      dispatch(getList());
    },
    setEditTab() {
      dispatch(setEdit(true));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycle);
