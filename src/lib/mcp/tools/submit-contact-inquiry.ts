import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

export default defineTool({
  name: "submit_contact_inquiry",
  title: "Submit a contact inquiry to Moblicode",
  description:
    "Send a project inquiry to the Moblicode team. The submission is emailed to Moblicode's shared support inbox — the same destination as the website contact form.",
  inputSchema: {
    name: z.string().trim().min(1).max(100).describe("Full name of the person submitting."),
    email: z.string().trim().email().max(255).describe("Reply-to email address."),
    message: z
      .string()
      .trim()
      .min(1)
      .max(5000)
      .describe("Description of the project or question."),
    phone: z.string().trim().max(30).optional().describe("Optional phone number."),
    company: z.string().trim().max(120).optional().describe("Optional company name."),
    service: z
      .string()
      .trim()
      .max(40)
      .optional()
      .describe("Optional service of interest (e.g. ios, android, submission)."),
    budget: z
      .string()
      .trim()
      .max(60)
      .optional()
      .describe("Optional budget range (e.g. '$25k–$50k')."),
  },
  annotations: { readOnlyHint: false, destructiveHint: false, openWorldHint: true },
  handler: async (input) => {
    const { handleContactRequest } = await import("@/lib/contact-email.server");
    const request = new Request("https://moblicode.com/api/public/contact", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(input),
    });
    const response = await handleContactRequest(request);
    const data = (await response.json().catch(() => ({}))) as Record<string, unknown>;
    if (!response.ok) {
      return {
        content: [
          {
            type: "text",
            text: `Failed to submit inquiry: ${String(data.error ?? response.statusText)}`,
          },
        ],
        isError: true,
      };
    }
    return {
      content: [
        {
          type: "text",
          text: "Inquiry sent to the Moblicode team. They typically reply within one business day.",
        },
      ],
      structuredContent: { success: true },
    };
  },
});
