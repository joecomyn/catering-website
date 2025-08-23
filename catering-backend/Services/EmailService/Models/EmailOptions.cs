namespace backend.Services.EmailService.Models;

public sealed class EmailOptions
{
    public string FromName { get; set; } = "Website";
    public string FromAddress { get; set; } = default!;
    public string ToAddress { get; set; } = default!;
    public SmtpOptions Smtp { get; set; } = new();

    public sealed class SmtpOptions
    {
        public string Host { get; set; } = default!;
        public int Port { get; set; } = 587;
        public bool UseStartTls { get; set; } = true;
        public string? User { get; set; }
        public string? Password { get; set; }
    }
}
