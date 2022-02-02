using System.ComponentModel.DataAnnotations;
using MyMoney.Api.Models.Enums;

namespace MyMoney.Api.Models
{
    public class Debt
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        [DataType(DataType.Currency)]
        public decimal Value { get; set; }

        public PaymentStatus Status { get; set; }
    }
}