namespace backend.Services.EmailService.Services.Interfaces;

public interface IEmailSender
{
    Task SendAsync(string subject, string htmlBody, IEnumerable<(string FileName, Stream Content)>? attachments = null, CancellationToken ct = default);
}
