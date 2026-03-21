import { NextResponse } from "next/server";
import { Resend } from "resend";

function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  return new Resend(key);
}

/** Escape HTML entities to prevent injection in email body */
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, message } = body;

    // Validate required fields
    if (!name || !phone || !message) {
      return NextResponse.json(
        { error: "Name, phone, and message are required." },
        { status: 400 }
      );
    }

    // Basic length validation
    if (name.length > 200 || phone.length > 50 || message.length > 5000) {
      return NextResponse.json(
        { error: "One or more fields exceed maximum length." },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const safeName = escapeHtml(String(name));
    const safePhone = escapeHtml(String(phone));
    const safeEmail = email ? escapeHtml(String(email)) : "Not provided";
    const safeMessage = escapeHtml(String(message));

    const resend = getResend();
    if (!resend) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json(
        { error: "Email service is not configured. Please call us directly." },
        { status: 503 }
      );
    }

    await resend.emails.send({
      from: "Breeze Roofing Website <noreply@breezeroofingnc.com>",
      to: "Letsgo@breezeroofingnc.com",
      replyTo: email || undefined,
      subject: `New Contact Form Submission from ${safeName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Phone:</strong> ${safePhone}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage.replace(/\n/g, "<br>")}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
