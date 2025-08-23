using backend.Services.EmailService.Models;
using backend.Services.EmailService.Services.Interfaces;
using MailKit.Net.Smtp;
using MailKit.Security;
using Microsoft.Extensions.Options;
using MimeKit;

namespace backend.Services.EmailService.Services;

public sealed class EmailSender : IEmailSender
{
    private readonly EmailOptions _options;

    public EmailSender(IOptions<EmailOptions> options) => _options = options.Value;

    public async Task SendAsync(string subject, string htmlBody, IEnumerable<(string FileName, Stream Content)>? attachments = null, CancellationToken ct = default)
    {
        var message = new MimeMessage();
        message.From.Add(new MailboxAddress(_options.FromName, _options.FromAddress));
        message.To.Add(new MailboxAddress("", _options.ToAddress));
        message.Subject = subject;

        var builder = new BodyBuilder { HtmlBody = htmlBody };

        message.Body = builder.ToMessageBody();

        using var client = new SmtpClient();

        var secure = _options.Smtp.UseStartTls ? SecureSocketOptions.StartTls : SecureSocketOptions.Auto;
        await client.ConnectAsync(_options.Smtp.Host, _options.Smtp.Port, secure, ct);

        if (!string.IsNullOrWhiteSpace(_options.Smtp.User))
        {
            await client.AuthenticateAsync(_options.Smtp.User, _options.Smtp.Password, ct);
        }

        await client.SendAsync(message, ct);
        await client.DisconnectAsync(true, ct);
    }
}
