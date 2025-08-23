using System.ComponentModel.DataAnnotations;

namespace backend.Services.EmailService.Models
{
    public sealed class ContactForm
    {
        [Required, MaxLength(120)]
        public string Name { get; set; } = default!;

        [MaxLength(200)]
        public string? Phone { get; set; }

        [Required, EmailAddress, MaxLength(200)]
        public string Email { get; set; } = default!;

        [Required, MaxLength(5000)]
        public string Enquiry { get; set; } = default!;
    }
}
