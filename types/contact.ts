import { z } from "zod";

export const enquiryTypes = [
  {
    value: "architecture-design",
    label: "Architecture & Design",
  },
  {
    value: "land-acquisition",
    label: "Land Acquisition",
  },
  {
    value: "construction",
    label: "Construction & Building",
  },
  {
    value: "villa-management",
    label: "Villa Management",
  },
  {
    value: "development",
    label: "Property Development",
  },
  {
    value: "other",
    label: "General Enquiry",
  },
] as const;

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your full name.")
    .max(100, "Your name is too long."),

  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .max(254, "Email address is too long."),

  phone: z
    .string()
    .trim()
    .max(30, "Please enter a valid phone number.")
    .optional()
    .default(""),

  enquiryType: z.enum(
    [
      "architecture-design",
      "land-acquisition",
      "construction",
      "villa-management",
      "development",
      "other",
    ],
    {
      error: "Please select an enquiry type.",
    },
  ),

  message: z
    .string()
    .trim()
    .min(10, "Please provide a little more detail.")
    .max(3000, "Your message is too long."),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

export type EnquiryType = ContactFormValues["enquiryType"];
