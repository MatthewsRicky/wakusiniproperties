"use client";

import { useState, type FormEvent } from "react";
import {
  contactSchema,
  enquiryTypes,
  type ContactFormValues,
  type EnquiryType,
} from "@/types/contact";
import { submitContact } from "@/actions/submitContact"
import { ChevronDown } from "lucide-react";

type ContactFormProps = {
  initialEnquiryType?: EnquiryType;
};

const inputClasses =
  "w-full border border-[var(--border)] bg-[var(--background)] px-4 py-3.5 text-sm text-[var(--foreground)] outline-none transition-colors placeholder:text-[var(--text-secondary)]/70 focus:border-[var(--olive-dark)] focus:ring-2 focus:ring-[var(--olive)]/15";

export default function ContactForm({
  initialEnquiryType = "other",
}: ContactFormProps) {
  const [values, setValues] = useState<ContactFormValues>({
    name: "",
    email: "",
    phone: "",
    enquiryType: initialEnquiryType,
    message: "",
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof ContactFormValues, string>>
  >({});

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  function handleChange(field: keyof ContactFormValues, value: string) {
    setValues((current) => ({
      ...current,
      [field]: value,
    }));

    setErrors((current) => ({
      ...current,
      [field]: undefined,
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setErrors({});
    setSuccessMessage("");

    const validation = contactSchema.safeParse(values);

    if (!validation.success) {
      const fieldErrors: Partial<Record<keyof ContactFormValues, string>> = {};

      for (const issue of validation.error.issues) {
        const field = issue.path[0] as keyof ContactFormValues;

        if (field && !fieldErrors[field]) {
          fieldErrors[field] = issue.message;
        }
      }

      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await submitContact(validation.data);

      if (!result.success) {
        setErrors(result.errors ?? {});
        setSuccessMessage("");
        setErrors((current) => ({
          ...current,
          ...(result.errors ?? {}),
        }));

        if (!result.errors) {
          setSuccessMessage("");
          alert(result.message);
        }

        return;
      }

      setSuccessMessage(result.message);
      setValues({
        name: "",
        email: "",
        phone: "",
        enquiryType: initialEnquiryType,
        message: "",
      });
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (successMessage) {
    return (
      <div
        className="flex min-h-[420px] flex-col items-center justify-center bg-[var(--surface)] px-6 py-16 text-center"
        role="status"
        aria-live="polite"
      >
        <span className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--surface-muted)] text-2xl text-[var(--olive-dark)]">
          ✓
        </span>

        <p className="eyebrow mb-4">Enquiry received</p>

        <h3 className="font-display text-3xl text-[var(--foreground)]">
          Thank you for reaching out.
        </h3>

        <p className="mt-4 max-w-md text-sm leading-7 text-[var(--text-secondary)]">
          {successMessage}
        </p>

        <button
          type="button"
          onClick={() => setSuccessMessage("")}
          className="mt-8 text-sm font-medium text-[var(--olive-dark)] underline underline-offset-4 transition-colors hover:text-[var(--foreground)]"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-7">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-[var(--foreground)]"
          >
            Full name <span aria-hidden="true">*</span>
          </label>

          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your full name"
            value={values.name}
            onChange={(event) => handleChange("name", event.target.value)}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={inputClasses}
          />

          {errors.name && (
            <p id="name-error" className="mt-2 text-xs text-red-700">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-[var(--foreground)]"
          >
            Email address <span aria-hidden="true">*</span>
          </label>

          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={values.email}
            onChange={(event) => handleChange("email", event.target.value)}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={inputClasses}
          />

          {errors.email && (
            <p id="email-error" className="mt-2 text-xs text-red-700">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-sm font-medium text-[var(--foreground)]"
          >
            Phone number{" "}
            <span className="font-normal text-[var(--text-secondary)]">
              (optional)
            </span>
          </label>

          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+254 7XX XXX XXX"
            value={values.phone}
            onChange={(event) => handleChange("phone", event.target.value)}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={inputClasses}
          />

          {errors.phone && (
            <p id="phone-error" className="mt-2 text-xs text-red-700">
              {errors.phone}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="enquiryType"
            className="mb-2 block text-sm font-medium text-[var(--foreground)]"
          >
            What can we help you with? <span aria-hidden="true">*</span>
          </label>
          
          <div className="relative">
            <select
              id="enquiryType"
              name="enquiryType"
              value={values.enquiryType}
              onChange={(e) => handleChange("enquiryType", e.target.value)}
              className={`${inputClasses} w-full appearance-none pr-12`}
            >
              {enquiryTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>

            <ChevronDown
              size={18}
              strokeWidth={1.5}
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]"
              aria-hidden="true"
            />
          </div>

          {errors.enquiryType && (
            <p id="enquiryType-error" className="mt-2 text-xs text-red-700">
              {errors.enquiryType}
            </p>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-[var(--foreground)]"
        >
          Tell us about your project <span aria-hidden="true">*</span>
        </label>

        <textarea
          id="message"
          name="message"
          rows={6}
          placeholder="Share a few details about what you have in mind..."
          value={values.message}
          onChange={(event) => handleChange("message", event.target.value)}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`${inputClasses} resize-y`}
        />

        {errors.message && (
          <p id="message-error" className="mt-2 text-xs text-red-700">
            {errors.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-4 border-t border-[var(--border)] pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xs text-xs leading-6 text-[var(--text-secondary)]">
          Fields marked with * are required. Your details will only be used to
          respond to your enquiry.
        </p>

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex min-h-14 items-center justify-center gap-3 bg-[var(--foreground)] px-8 py-4 text-sm font-medium text-[var(--text-light)] transition-colors hover:bg-[var(--olive-dark)] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "Sending enquiry..." : "Send enquiry"}

          {!isSubmitting && <span aria-hidden="true">→</span>}
        </button>
      </div>
    </form>
  );
}
