import React, { useState } from "react";
import axios from "axios";

export default function ContactForm() {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  });
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    });
    if (ok) {
      form.reset();
    }
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: "post",
      url: "https://formspree.io/xgenolyj",
      data: new FormData(form),
    })
      .then((r) => {
        handleServerResponse(true, "Thanks!", form);
      })
      .catch((r) => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };
  return (
    <div className="contact-form">
      <h1>Shoot A Message</h1>
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="name" />
        <input id="name" type="name" name="name" placeholder="NAME" required />
        <label htmlFor="email" />
        <input
          id="email"
          type="email"
          name="email"
          placeholder="EMAIL"
          required
        />
        <label htmlFor="subject" />
        <input
          id="subject"
          type="subject"
          name="subject"
          placeholder="SUBJECT"
        />
        <label htmlFor="message" />
        <textarea id="message" name="message" placeholder="MESSAGE"></textarea>
        <button type="submit" disabled={serverState.submitting}>
          *pew pew*
        </button>
        {serverState.status && (
          <p className={!serverState.status.ok ? "errorMsg" : ""}>
            {serverState.status.msg}
          </p>
        )}
      </form>
    </div>
  );
}
