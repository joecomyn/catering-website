using backend.Services.EmailService.Models;
using backend.Services.EmailService.Services;
using backend.Services.EmailService.Services.Interfaces;
using Microsoft.AspNetCore.HttpOverrides;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddOptions<EmailOptions>()
    .Bind(builder.Configuration.GetSection("Email"))
    .ValidateDataAnnotations()
    .ValidateOnStart();
builder.Services.AddScoped<IEmailSender, EmailSender>();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend", policy =>
    {
        policy.WithOrigins(
            "https://norfolkcatering.co.uk",
            "https://www.norfolkcatering.co.uk",
            "http://localhost:5173"
        )
        .AllowAnyHeader()
        .AllowAnyMethod();
    });

    options.AddPolicy("VercelPreviews", p =>
        p.SetIsOriginAllowed(origin =>
        {
            try { return new Uri(origin).Host.EndsWith(".vercel.app", StringComparison.OrdinalIgnoreCase); }
            catch { return false; }
        })
        .AllowAnyHeader()
        .AllowAnyMethod()
    );
});

var app = builder.Build();

app.UseForwardedHeaders(new ForwardedHeadersOptions
{
    ForwardedHeaders = ForwardedHeaders.XForwardedFor | ForwardedHeaders.XForwardedProto
});

app.UseCors("AllowFrontend");
app.UseCors("VercelPreviews");

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
}

app.MapGet("/healthz", () => Results.Ok("ok"));

app.MapControllers();
app.Run();