namespace backend.Controllers.Emails;

using backend.Services.EmailService.Models;
using backend.Services.EmailService.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public sealed class ContactController : ControllerBase
{
    private readonly IEmailSender _email;

    public ContactController(IEmailSender email) => _email = email;

    // Accept multipart/form-data and x-www-form-urlencoded
    [HttpPost]
    [Consumes("multipart/form-data", "application/x-www-form-urlencoded")]
    [ProducesResponseType(typeof(object), StatusCodes.Status200OK)]
    [ProducesResponseType(typeof(ProblemDetails), StatusCodes.Status400BadRequest)]
    public async Task<IActionResult> Post([FromForm] ContactForm form, CancellationToken ct)
    {
        if (!ModelState.IsValid) return ValidationProblem(ModelState);

        var subject = $"Enquiry from {form.Name} {DateTimeOffset.Now:yyyy-MM-dd}";

        var html = $@"
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> {System.Net.WebUtility.HtmlEncode(form.Name)}</p>
            <p><strong>Email:</strong> {System.Net.WebUtility.HtmlEncode(form.Email)}</p>
            <p><strong>Subject:</strong> {System.Net.WebUtility.HtmlEncode(subject)}</p>
            <p><strong>Message:</strong><br/>{System.Net.WebUtility.HtmlEncode(form.Enquiry).Replace("\n", "<br/>")}</p>
            <p><em>Sent {DateTimeOffset.UtcNow:yyyy-MM-dd HH:mm} UTC</em></p>";

        await _email.SendAsync(subject, html, null, ct);
        return Ok(new { ok = true });
    }
}

