import React, { useState } from 'react';
import api from '../../services/utils/api';
import './ContactForm.css';

type Status = 'idle' | 'sending' | 'success' | 'error';

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    enquiry: '',
    // Honeypot (bots will fill; humans won't)
    company: '',
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // basic client validation
    if (!form.name.trim() || !form.email.trim() || !form.enquiry.trim()) {
      setErrorMsg('Please fill in Name, Email and Enquiry.');
      setStatus('error');
      return;
    }

    if (form.company) {
      setStatus('success');
      return;
    }

    setStatus('sending');
    setErrorMsg('');

    try {
      const payload = {
        name: form.name.trim(),
        phone: form.phone.trim() || undefined,
        email: form.email.trim(),
        enquiry: form.enquiry.trim(),
      };

      await api.post('/contact', payload);

      setStatus('success');
      setForm({ name: '', phone: '', email: '', enquiry: '', company: '' });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      const msg =
        err?.response?.data?.message ||
        err?.message ||
        'Failed to send your message.';
      setErrorMsg(msg);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return <p className="success-message">Thanks for reaching out! We’ll be in touch soon.</p>;
  }

  return (
    <section className="contact-us-section" id="contact">
      <h2 className="policy-grid-title">Contact Us</h2>

      <form className="contact-form" onSubmit={onSubmit} noValidate>
        {/* Honeypot (hidden from users) */}
        <label className="hp" aria-hidden="true">
          Company
          <input
            type="text"
            name="company"
            value={form.company}
            onChange={onChange}
            autoComplete="off"
            tabIndex={-1}
          />
        </label>

        <label htmlFor="name">
          Name*
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your full name"
            value={form.name}
            onChange={onChange}
            required
          />
        </label>

        <label htmlFor="phone">
          Phone
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Your phone number"
            value={form.phone}
            onChange={onChange}
          />
        </label>

        <label htmlFor="email">
          Email*
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={onChange}
            required
          />
        </label>

        <label htmlFor="enquiry">
          Enquiry*
          <textarea
            id="enquiry"
            name="enquiry"
            placeholder="How can we help you?"
            rows={4}
            value={form.enquiry}
            onChange={onChange}
            required
          />
        </label>

        {status === 'error' && <p className="error">{errorMsg}</p>}

        <button type="submit" className="submit-button" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : 'Submit'}
        </button>
      </form>
    </section>
  );
};

export default ContactForm;