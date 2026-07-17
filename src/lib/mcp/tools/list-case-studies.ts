import { defineTool } from "@lovable.dev/mcp-js";
import { CASE_STUDIES, SITE } from "@/lib/site";

export default defineTool({
  name: "list_case_studies",
  title: "List Moblicode case studies",
  description:
    "List Moblicode's published case studies (the same ones rendered on the /examples page): name, platform, category, and the descriptive blurb shown on the site.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const studies = CASE_STUDIES.map((c) => ({
      name: c.name,
      platform: c.platform,
      category: c.category,
      blurb: c.blurb,
    }));
    return {
      content: [{ type: "text", text: JSON.stringify(studies, null, 2) }],
      structuredContent: {
        case_studies: studies,
        source_url: `${SITE.url}/examples`,
      },
    };
  },
});
