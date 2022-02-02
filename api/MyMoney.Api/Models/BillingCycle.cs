using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace MyMoney.Api.Models
{
    public class BillingCycle
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public int Month { get; set; }

        [Required]
        public int Year { get; set; }

        public virtual ICollection<Credit> Credits { get; set; }
        public virtual ICollection<Debt> Debts { get; set; }

    }
}