using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using MyMoney.Api.Context;
using MyMoney.Api.Models;
using MyMoney.Api.Models.Interfaces;

namespace MyMoney.Api.Services
{
    public class BillingCycleService : IBillingCycleService
    {
        private readonly AppDbContext _context;

        public BillingCycleService(AppDbContext context)
        {
            _context = context;
        }
        public Task<int> Count()
        {
            throw new System.NotImplementedException();
        }

        public Task<BillingCycle> Create(BillingCycle billingCycle)
        {
            throw new System.NotImplementedException();
        }

        public Task<bool> Delete(int id)
        {
            throw new System.NotImplementedException();
        }

        public async Task<IEnumerable<BillingCycle>> GetAll()
        {
            return await _context.BillingCycles
                .Include(x => x.Credits)
                .Include(x => x.Debts)
                .ToListAsync();
        }

        public Task<BillingCycle> Read(int id)
        {
            throw new System.NotImplementedException();
        }

        public Task<BillingCycle> Update(BillingCycle billingCycle)
        {
            throw new System.NotImplementedException();
        }
    }
}