import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './ContactForm.css';

const ContactForm: React.FC = () => {
  const [state, handleSubmit] = useForm("xqalyvqg");
  if (state.succeeded) {
    return <p className="success-message">Thanks for reaching out! We’ll be in touch soon.</p>;
  }

  return (
    <section className="contact-us-section">
        <h2 className="policy-grid-title">Contact Us</h2>
        <form className="contact-form" onSubmit={handleSubmit}>

        {/* Hidden CC field - add any emails comma-separated */}
        <input type="hidden" name="_cc" value="joecomyn@hotmail.com" />

        <label htmlFor="name">
            Name*
            <input
            id="name"
            type="text"
            name="name"
            placeholder="Your full name"
            required
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
        </label>

        <label htmlFor="phone">
            Phone
            <input
            id="phone"
            type="tel"
            name="phone"
            placeholder="Your phone number"
            />
            <ValidationError prefix="Phone" field="phone" errors={state.errors} />
        </label>

        <label htmlFor="email">
            Email*
            <input
            id="email"
            type="email"
            name="email"
            placeholder="you@example.com"
            required
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
        </label>

        <label htmlFor="enquiry">
            Enquiry*
            <textarea
            id="enquiry"
            name="enquiry"
            placeholder="How can we help you?"
            rows={4}
            required
            />
            <ValidationError prefix="Enquiry" field="enquiry" errors={state.errors} />
        </label>

        <button type="submit" disabled={state.submitting} className="submit-button">
            {state.submitting ? 'Sending…' : 'Submit'}
        </button>
        </form>
    </section>
  );
};

export default ContactForm;