"use client";

import { useActionState } from "react";

import { submitContact, type ContactState } from "@/app/actions";

const initialState: ContactState = { status: "idle", message: "" };

const projectTypes = [
  "Full bathroom remodel",
  "Shower remodel",
  "Tub-to-shower conversion",
  "Walk-in shower",
  "Not sure yet",
];

export function ContactForm({
  presetProjectType,
}: {
  presetProjectType?: string;
}) {
  const [state, formAction, pending] = useActionState(
    submitContact,
    initialState
  );

  if (state.status === "success") {
    return (
      <div
        role="status"
        className="rounded-[var(--radius-card)] border border-forest/30 bg-sage-light p-7 text-charcoal"
      >
        <p className="font-display text-xl text-soft-black">
          Thanks — we got it.
        </p>
        <p className="mt-3 text-sm leading-6 text-muted">
          We'll review the details and follow up within one business day to
          schedule your free consultation. If you'd like to talk sooner, give
          us a call any time.
        </p>
      </div>
    );
  }

  return (
    <form
      action={formAction}
      className="space-y-4 rounded-[var(--radius-card)] border border-line/80 bg-cream p-6 shadow-soft sm:p-8"
      noValidate
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" name="name" required autoComplete="name" />
        <Field
          label="Phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
        />
        <Field
          label="Email"
          name="email"
          type="email"
          required
          autoComplete="email"
        />
        <Field label="City" name="city" autoComplete="address-level2" />
      </div>
      <div className="space-y-1">
        <label
          htmlFor="projectType"
          className="text-xs font-medium uppercase tracking-[0.16em] text-muted"
        >
          Project type
        </label>
        <select
          id="projectType"
          name="projectType"
          defaultValue={presetProjectType ?? ""}
          required
          className="block w-full rounded-md border border-line bg-cream px-3 py-3 text-sm text-charcoal focus:border-forest focus:outline-none focus:ring-1 focus:ring-forest"
        >
          <option value="" disabled>
            Select a project type
          </option>
          {projectTypes.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </div>
      <div className="space-y-1">
        <label
          htmlFor="message"
          className="text-xs font-medium uppercase tracking-[0.16em] text-muted"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us a little about your space, finish preferences, and timing."
          className="block w-full rounded-md border border-line bg-cream px-3 py-3 text-sm text-charcoal placeholder:text-muted/70 focus:border-forest focus:outline-none focus:ring-1 focus:ring-forest"
        />
      </div>
      {/* Honeypot — hidden from real users */}
      <div className="absolute -left-[9999px]" aria-hidden>
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {state.status === "error" ? (
        <p
          role="alert"
          aria-live="polite"
          className="rounded-md border border-red-300 bg-red-50 px-3 py-2 text-sm text-red-700"
        >
          {state.message}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={pending}
        className="inline-flex w-full items-center justify-center rounded-full bg-forest px-7 py-3 text-sm font-medium text-cream shadow-soft hover:bg-forest-dark disabled:opacity-70 sm:w-auto"
      >
        {pending ? "Sending…" : "Request Free Quote"}
      </button>
      <p className="text-xs leading-5 text-muted">
        By submitting, you agree to be contacted about your remodel project.
        We never share your details.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div className="space-y-1">
      <label
        htmlFor={name}
        className="text-xs font-medium uppercase tracking-[0.16em] text-muted"
      >
        {label}
        {required ? <span className="text-forest"> *</span> : null}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="block w-full rounded-md border border-line bg-cream px-3 py-3 text-sm text-charcoal placeholder:text-muted/70 focus:border-forest focus:outline-none focus:ring-1 focus:ring-forest"
      />
    </div>
  );
}
