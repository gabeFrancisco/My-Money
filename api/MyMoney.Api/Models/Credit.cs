using System.ComponentModel.DataAnnotations;

namespace MyMoney.Api.Models
{
    public class Credit
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public decimal Value { get; set; }
    }
}