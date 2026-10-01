"use client";

import { useState, type FormEvent } from "react";

const CONTACT_EMAIL = "nishant@nishant.top";

export function ContactComposer() {
  const [opened, setOpened] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const subject = String(data.get("subject") ?? "Portfolio conversation").trim();
    const message = String(data.get("message") ?? "").trim();
    const body = [`Hi Nishant,`, "", message, "", `From: ${name}`, `Reply to: ${email}`].join("\n");
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setOpened(true);
    window.location.assign(mailto);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label><span>Name</span><input name="name" type="text" autoComplete="name" required maxLength={80} /></label>
        <label><span>Email</span><input name="email" type="email" autoComplete="email" required maxLength={120} /></label>
      </div>
      <label><span>Subject</span><input name="subject" type="text" required maxLength={120} defaultValue="Portfolio conversation" /></label>
      <label><span>What would you like to discuss?</span><textarea name="message" rows={6} required maxLength={2_000} /></label>
      <div className="contact-form-foot">
        <button className="button button-primary" type="submit">Open email draft <span aria-hidden="true">↗</span></button>
        <p>This opens your email app. The website does not store or transmit the form contents.</p>
      </div>
      {opened ? <p className="speech-status" role="status">Email draft requested. If nothing opened, use the direct email link above.</p> : null}
    </form>
  );
}
