import { defineTool } from "@lovable.dev/mcp-js";
import { SITE } from "@/lib/site";

export default defineTool({
  name: "get_company_info",
  title: "Get Moblicode company info",
  description:
    "Get an overview of Moblicode: pitch, founder, contact details, years in business, and the App Store categories they build for.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const info = {
      name: SITE.name,
      pitch: SITE.pitch,
      shortPitch: SITE.shortPitch,
      tagline: SITE.tagline,
      url: SITE.url,
      email: SITE.email,
      phone: SITE.phoneDisplay,
      founded: SITE.founded,
      yearsInBusiness: SITE.yearsInBusiness,
      founder: {
        name: SITE.founderName,
        title: SITE.founderTitle,
        bio: SITE.founderBio,
        linkedIn: SITE.founderLinkedIn,
      },
      categories: SITE.categories,
    };
    return {
      content: [{ type: "text", text: JSON.stringify(info, null, 2) }],
      structuredContent: info,
    };
  },
});
