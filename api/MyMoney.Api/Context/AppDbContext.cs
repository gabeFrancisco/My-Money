using Microsoft.EntityFrameworkCore;
using MyMoney.Api.Models;

namespace MyMoney.Api.Context
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Credit> Credits { get; set; }
        public DbSet<Debt> Debts { get; set; }
        public DbSet<BillingCycle> BillingCycles { get; set; }
    }
}