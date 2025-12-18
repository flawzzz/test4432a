"use client";

import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function validate() {
    if (!name.trim() || !email.trim() || !message.trim()) {
      return "Please fill in all fields.";
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      return "Please provide a valid email address.";
    }
    return null;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const v = validate();
    if (v) {
      setError(v);
      return;
    }
    setError(null);
    // For test project we'll just simulate a send
    console.log("Contact submission", { name, email, message });
    setSent(true);
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <div className="mx-auto max-w-2xl py-12 px-6">
      <h2 className="text-2xl font-semibold">Contact Us</h2>
      <p className="mt-2 text-sm text-zinc-600">Send us a message for testing.</p>

      {sent ? (
        <div className="mt-6 rounded-md bg-green-50 p-4 text-green-800">Your message was sent (simulated).</div>
      ) : null}

      <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
        <label className="grid">
          <span className="text-sm">Name</span>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 rounded border px-3 py-2"
            placeholder="Your name"
          />
        </label>

        <label className="grid">
          <span className="text-sm">Email</span>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 rounded border px-3 py-2"
            placeholder="you@example.com"
          />
        </label>

        <label className="grid">
          <span className="text-sm">Message</span>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mt-1 rounded border px-3 py-2"
            rows={6}
            placeholder="Write your message here"
          />
        </label>

        {error ? <div className="text-sm text-red-600">{error}</div> : null}

        <div>
          <button type="submit" className="rounded bg-foreground px-4 py-2 text-background">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
