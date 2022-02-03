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

        public BillingCycleService(AppDbContext context) => _context = context;

        /// <summary>
        /// Return the total number of billing cycles
        /// </summary>
        /// <returns></returns>
        public async Task<int> Count() => await _context.BillingCycles.CountAsync();

        /// <summary>
        /// Creates a new billing cycle in the database
        /// </summary>
        /// <param name="billingCycle"></param>
        /// <returns>Created BillingCycle object</returns>
        public async Task<BillingCycle> Create(BillingCycle billingCycle)
        {
            if(billingCycle == null)
                return null;
            
            await _context.BillingCycles.AddAsync(billingCycle);
            return billingCycle;
        }

        /// <summary>
        /// Removes a billing cycle that matches the given id
        /// </summary>
        /// <param name="id">BillingCycle id</param>
        /// <returns></returns>
        public async Task<bool> Delete(int id)
        {
            var result = await _context.BillingCycles
                .SingleOrDefaultAsync(x => x.Id == id);
            
            if(result == null)
                return false;

             _context.BillingCycles.Remove(result);
             await _context.SaveChangesAsync();
             
             return true;
        }

        /// <summary>
        /// Return all billing cycles from the database
        /// </summary>
        /// <returns>A collection of BillingCycle objects</returns>
        public async Task<IEnumerable<BillingCycle>> GetAll()
        {
            return await _context.BillingCycles
                .Include(x => x.Credits)
                .Include(x => x.Debts)
                .ToListAsync();
        }

        /// <summary>
        /// Reads a billing cycle with a given Id
        /// </summary>
        /// <param name="id">BillingCycle Id</param>
        /// <returns></returns>
        public async Task<BillingCycle> Read(int id)
        {
            return await _context.BillingCycles
                .Where(x => x.Id == id)
                .Include(x => x.Credits)
                .Include(x => x.Debts)
                .SingleOrDefaultAsync();
        }

        /// <summary>
        /// Updates a billing cycle
        /// </summary>
        /// <param name="billingCycle"></param>
        /// <returns>The updated BillingCycle object</returns>
        public async Task<BillingCycle> Update(BillingCycle billingCycle)
        {
            var result = await _context.BillingCycles
                .SingleOrDefaultAsync(x => x.Id == billingCycle.Id);
            
            if(result == null)
                return null;
            
            _context.Entry(result).CurrentValues.SetValues(billingCycle);
            await _context.SaveChangesAsync();

            return billingCycle;
        }
    }
}