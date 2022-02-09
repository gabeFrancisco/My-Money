import SectionTitle from "../components/SectionTitle";
import TabContent from "../widgets/Tabs/TabContent";
import TabHeader from "../widgets/Tabs/TabHeader";
import Tabs from "../widgets/Tabs/Tabs";
import TabsContent from "../widgets/Tabs/TabsContent";
import TabsHeader from "../widgets/Tabs/TabsHeader";


function BillingCycle(props) {  
  return (
    <div className="fadeIn">
      <SectionTitle
        title="Ciclos de Pagamento"
        subtitle="Gerencie todos os ciclos aquie nesta sessão"
      />

      <div className="column-content mt-3">
        <Tabs>
          <TabsHeader>
            <TabHeader title="Listar" icon="fas fa-list" target={1}></TabHeader>
            <TabHeader title="Incluir" icon="fas fa-plus" target={2}></TabHeader>
            <TabHeader title="Alterar" icon="fas fa-pen" target={3}></TabHeader>
            <TabHeader title="Excluir" icon="fas fa-trash" target={4}></TabHeader>
          </TabsHeader>
          <TabsContent>
            <TabContent content="Listar ciclos!" target={1}></TabContent>
            <TabContent content="Adicionar ciclo" target={2}></TabContent>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default BillingCycle;
