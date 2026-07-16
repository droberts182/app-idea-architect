import { defineTool } from "@lovable.dev/mcp-js";
import { CASE_STUDIES } from "@/lib/site";

export default defineTool({
  name: "list_case_studies",
  title: "List Moblicode case studies",
  description:
    "List Moblicode's published case studies with client, platform, category, blurb, and highlights.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const studies = CASE_STUDIES.map((c) => ({
      slug: c.slug,
      title: c.title,
      client: c.client,
      platform: c.platform,
      year: c.year,
      category: c.category,
      blurb: c.blurb,
      highlights: c.highlights,
      url: `https://moblicode.com/examples#${c.slug}`,
    }));
    return {
      content: [{ type: "text", text: JSON.stringify(studies, null, 2) }],
      structuredContent: { case_studies: studies },
    };
  },
});
