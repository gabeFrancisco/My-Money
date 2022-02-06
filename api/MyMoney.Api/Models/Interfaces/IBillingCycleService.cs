using System.Collections.Generic;
using System.Threading.Tasks;

namespace MyMoney.Api.Models.Interfaces
{
    public interface IBillingCycleService
    {
         Task<IEnumerable<BillingCycle>> GetAll();
         Task<BillingCycle> Create(BillingCycle billingCycle);
         Task<BillingCycle> Read(int id);
         Task<BillingCycle> Update(BillingCycle billingCycle);
         Task<bool> Delete(int id);
         Task<int> Count();
         Task<Summary> Summary(int billingCycleId);
    }
}