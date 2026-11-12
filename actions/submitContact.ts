"use server";

import { Resend } from "resend";
import {
  contactSchema,
  enquiryTypes,
  type ContactFormValues,
} from "@/types/contact";

export type ContactActionResult =
  | {
      success: true;
      message: string;
    }
  | {
      success: false;
      message: string;
      errors?: Partial<Record<keyof ContactFormValues, string>>;
    };

export async function submitContact(
  input: unknown,
): Promise<ContactActionResult> {
  // Validate submitted data on the server.
  const validation = contactSchema.safeParse(input);

  if (!validation.success) {
    const errors: Partial<Record<keyof ContactFormValues, string>> = {};

    for (const issue of validation.error.issues) {
      const field = issue.path[0] as keyof ContactFormValues | undefined;

      if (field && !errors[field]) {
        errors[field] = issue.message;
      }
    }

    return {
      success: false,
      message: "Please check the form and correct the highlighted fields.",
      errors,
    };
  }

  const { name, email, phone, enquiryType, message } = validation.data;

  // Check required environment variables.
  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.CONTACT_EMAIL;
  const sender = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !recipient || !sender) {
    console.error("Contact form configuration is incomplete.");

    return {
      success: false,
      message:
        "We're unable to process your enquiry right now. Please try again later.",
    };
  }

  const enquiryLabel =
    enquiryTypes.find((type) => type.value === enquiryType)?.label ??
    "General Enquiry";

  try {
    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: sender,
      to: recipient,
      replyTo: email,
      subject: `New ${enquiryLabel} enquiry from ${name}`,
      text: [
        "NEW WEBSITE ENQUIRY",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "Not provided"}`,
        `Enquiry type: ${enquiryLabel}`,
        "",
        "MESSAGE",
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend email error:", error);

      return {
        success: false,
        message: "We couldn't send your enquiry. Please try again shortly.",
      };
    }

    return {
      success: true,
      message:
        "Thank you for contacting Wakusini. Your enquiry has been sent successfully.",
    };
  } catch (error) {
    console.error("Contact form submission error:", error);

    return {
      success: false,
      message:
        "Something went wrong while sending your enquiry. Please try again.",
    };
  }
}
