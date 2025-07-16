export default function Contact() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-4">Contact</h1>
      <p className="text-lg text-gray-700">Coming soon…</p>
    </div>
  );
}
// pages/contact.js
import React, { useState } from "react";

export default function Contact() {
  // 2.1 State for form and status
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus]     = useState(null); // 'sending' | 'success' | 'error'

  // 2.2 Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Network response was not ok");
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen p-8 bg-blue-600 text-white">
      <h1 className="text-4xl font-bold mb-6">Get In Touch</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1">Name</label>
          <input
            id="name" name="name" type="text" required
            value={formData.name}
            onChange={e => setFormData({ ...formData, name: e.target.value })}
            placeholder="Your name"
            className="w-full p-3 rounded bg-white/20 placeholder-white/70"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1">Email</label>
          <input
            id="email" name="email" type="email" required
            value={formData.email}
            onChange={e => setFormData({ ...formData, email: e.target.value })}
            placeholder="Your email"
            className="w-full p-3 rounded bg-white/20 placeholder-white/70"
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-1">Message</label>
          <textarea
            id="message" name="message" rows="4" required
            value={formData.message}
            onChange={e => setFormData({ ...formData, message: e.target.value })}
            placeholder="Your message"
            className="w-full p-3 rounded bg-white/20 placeholder-white/70"
          />
        </div>
        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full bg-white text-blue-600 p-3 rounded font-medium"
        >
          {status === "sending" ? "Sending…" : "Send Message"}
        </button>

        {status === "success" && (
          <p className="mt-4 text-green-300">Thank you! I will get back to you soon.</p>
        )}
        {status === "error" && (
          <p className="mt-4 text-red-300">Oops! Something went wrong. Please try again.</p>
        )}
      </form>
    </div>
  );
}
