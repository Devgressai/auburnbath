"use server";

import { Resend } from "resend";

import { site } from "@/lib/site";

export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
};

const TO_RECIPIENTS = ["info@oakwoodremodel.com", "hello@webvello.com"];

const FROM_DEFAULT = "Auburn Bath <hello@auburnbath.com>";

export async function submitContact(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  // Honeypot — silent reject, look like success.
  if ((formData.get("website") as string)?.length) {
    return { status: "success", message: "" };
  }

  const name = (formData.get("name") as string)?.trim();
  const phone = (formData.get("phone") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const projectType = (formData.get("projectType") as string)?.trim();
  const city = ((formData.get("city") as string) ?? "").trim();
  const message = ((formData.get("message") as string) ?? "").trim();

  if (!name || !phone || !email || !projectType) {
    return {
      status: "error",
      message: "Please fill in your name, phone, email, and project type.",
    };
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    return {
      status: "error",
      message: "That email address doesn't look quite right.",
    };
  }

  const subject = `New ${site.name} quote — ${projectType} — ${name}`;
  const text = renderText({ name, phone, email, city, projectType, message });
  const html = renderHtml({ name, phone, email, city, projectType, message });

  const apiKey = process.env.RESEND_API_KEY;
  if (apiKey) {
    try {
      const resend = new Resend(apiKey);
      const from = process.env.RESEND_FROM ?? FROM_DEFAULT;
      const { error } = await resend.emails.send({
        from,
        to: TO_RECIPIENTS,
        replyTo: email,
        subject,
        text,
        html,
      });
      if (error) {
        console.error("[auburnbath:contact] Resend returned error:", error);
      }
    } catch (err) {
      console.error("[auburnbath:contact] Resend send threw:", err);
    }
  } else {
    // Local / pre-Resend fallback so submissions are at least captured
    // in the server log instead of being silently lost.
    console.info("[auburnbath:contact] (no RESEND_API_KEY set)\n", {
      to: TO_RECIPIENTS,
      subject,
      replyTo: email,
      data: { name, phone, email, city, projectType, message },
    });
  }

  return { status: "success", message: "" };
}

function renderText(d: {
  name: string;
  phone: string;
  email: string;
  city: string;
  projectType: string;
  message: string;
}) {
  return [
    `New quote request from auburnbath.com`,
    ``,
    `Name:         ${d.name}`,
    `Phone:        ${d.phone}`,
    `Email:        ${d.email}`,
    `City:         ${d.city || "(not provided)"}`,
    `Project type: ${d.projectType}`,
    ``,
    `Message:`,
    d.message ? d.message : "(no message left)",
    ``,
    `--`,
    `Submitted to ${site.name} (${site.url})`,
  ].join("\n");
}

function renderHtml(d: {
  name: string;
  phone: string;
  email: string;
  city: string;
  projectType: string;
  message: string;
}) {
  const esc = (s: string) =>
    s
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  return `<!doctype html>
<html>
  <body style="margin:0;padding:0;background:#fafaf7;font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:#252525;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#fafaf7;padding:24px 0;">
      <tr><td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border:1px solid #e6e2da;border-radius:14px;overflow:hidden;">
          <tr>
            <td style="background:#23483e;color:#fafaf7;padding:20px 28px;">
              <div style="font-size:11px;letter-spacing:0.18em;text-transform:uppercase;opacity:0.75;">${esc(site.name)} — new quote request</div>
              <div style="font-size:20px;font-weight:600;margin-top:6px;">${esc(d.name)} · ${esc(d.projectType)}</div>
            </td>
          </tr>
          <tr>
            <td style="padding:24px 28px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;line-height:22px;">
                ${row("Phone", `<a href="tel:${esc(d.phone)}" style="color:#2f5d50;text-decoration:none;">${esc(d.phone)}</a>`)}
                ${row("Email", `<a href="mailto:${esc(d.email)}" style="color:#2f5d50;text-decoration:none;">${esc(d.email)}</a>`)}
                ${row("City", esc(d.city || "(not provided)"))}
                ${row("Project type", esc(d.projectType))}
              </table>
              <div style="margin-top:18px;padding-top:18px;border-top:1px solid #e6e2da;">
                <div style="font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:#666666;">Message</div>
                <div style="margin-top:8px;font-size:14px;line-height:22px;color:#252525;white-space:pre-wrap;">${esc(d.message || "(no message left)")}</div>
              </div>
            </td>
          </tr>
          <tr>
            <td style="padding:14px 28px;background:#f7f4ef;color:#666666;font-size:12px;">
              Submitted from <a href="${site.url}" style="color:#2f5d50;text-decoration:none;">${site.url.replace(/^https?:\/\//, "")}</a>
            </td>
          </tr>
        </table>
      </td></tr>
    </table>
  </body>
</html>`;
}

function row(label: string, value: string) {
  return `<tr>
    <td style="padding:6px 0;width:110px;color:#666666;font-size:12px;letter-spacing:0.12em;text-transform:uppercase;">${label}</td>
    <td style="padding:6px 0;color:#252525;">${value}</td>
  </tr>`;
}
