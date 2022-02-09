import React from "react";

import SectionTitle from "../components/SectionTitle";
import TabHeader from "../widgets/Tabs/TabHeader";
import Tabs from "../widgets/Tabs/Tabs";
import TabsContent from "../widgets/Tabs/TabsContent";
import TabsHeader from "../widgets/Tabs/TabsHeader";

function BillingCycle() {
  return (
    <div className="fadeIn">
      <SectionTitle
        title="Ciclos de Pagamento"
        subtitle="Gerencie todos os ciclos aquie nesta sessão"
      />

      <div className="column-content mt-3">
        <Tabs>
          <TabsHeader>
            <TabHeader title="Listar" icon="fas fa-list"></TabHeader>
            <TabHeader title="Incluir" icon="fas fa-plus"></TabHeader>
            <TabHeader title="Alterar" icon="fas fa-pen"></TabHeader>
            <TabHeader title="Excluir" icon="fas fa-trash"></TabHeader>
          </TabsHeader>
          <TabsContent></TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default BillingCycle;
