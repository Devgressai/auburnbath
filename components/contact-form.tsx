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
        className="rounded-[var(--radius-card)] border border-forest/30 bg-sage-light p-8 text-charcoal"
      >
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-forest text-cream">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-5 w-5"
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 12.75 6 6 9-13.5"
            />
          </svg>
        </span>
        <p className="mt-4 font-display text-2xl text-soft-black">
          Thanks — we got it.
        </p>
        <p className="mt-3 text-sm leading-7 text-muted">
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
      className="card p-6 sm:p-8 space-y-5"
      noValidate
    >
      <div>
        <span className="eyebrow">Free quote</span>
        <h2 className="mt-2 font-display text-2xl text-soft-black">
          Tell us about your bathroom.
        </h2>
        <p className="mt-2 text-sm leading-6 text-muted">
          Required fields are marked. We'll never share your details.
        </p>
      </div>

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
      <div>
        <label htmlFor="projectType" className="field-label">
          Project type <span className="required">*</span>
        </label>
        <select
          id="projectType"
          name="projectType"
          defaultValue={presetProjectType ?? ""}
          required
          className="field-select"
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
      <div>
        <label htmlFor="message" className="field-label">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us a little about your space, finish preferences, and timing."
          className="field-textarea"
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
          className="rounded-md border border-red-300 bg-red-50 px-3 py-2.5 text-sm text-red-700"
        >
          {state.message}
        </p>
      ) : null}

      <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={pending}
          className="btn btn-primary w-full disabled:opacity-70 sm:w-auto"
        >
          {pending ? "Sending…" : "Request Free Quote"}
          {!pending ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              className="h-3.5 w-3.5"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12l-7.5 7.5M3 12h18"
              />
            </svg>
          ) : null}
        </button>
        <p className="text-xs leading-5 text-muted sm:max-w-[18rem]">
          By submitting, you agree to be contacted about your remodel project.
        </p>
      </div>
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
    <div>
      <label htmlFor={name} className="field-label">
        {label}
        {required ? <span className="required"> *</span> : null}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="field-input"
      />
    </div>
  );
}
