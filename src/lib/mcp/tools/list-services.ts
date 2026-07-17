import { defineTool } from "@lovable.dev/mcp-js";
import { SERVICES, SITE } from "@/lib/site";

export default defineTool({
  name: "list_services",
  title: "List Moblicode services",
  description:
    "List the services Moblicode offers, exactly as rendered on the /services page.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const services = SERVICES.map((s) => ({
      title: s.title,
      eyebrow: s.eyebrow,
      description: s.blurb,
      url: `${SITE.url}${s.to}`,
      keywords: s.keywords,
    }));
    return {
      content: [{ type: "text", text: JSON.stringify(services, null, 2) }],
      structuredContent: { services },
    };
  },
});
