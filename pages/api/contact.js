// pages/api/contact.js
import sendgrid from "@sendgrid/mail";

// 1.1 Log the key so we know it’s set
console.log("⚙️  SENDGRID_API_KEY =", process.env.SENDGRID_API_KEY);

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Only POST allowed" });
  }

  const { name, email, message } = req.body;
  console.log("📨  Received form:", { name, email, message });

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const result = await sendgrid.send({
      to: "yogesh@batein.com",       // your inbox
      from: "yogesh@batein.com",     // must be a verified sender
      subject: `New message from ${name}`,
      text: message,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong><br/>${message}</p>`,
    });
    console.log("✅  SendGrid result:", result);
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("❌  SendGrid error:", error.response?.body || error);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
