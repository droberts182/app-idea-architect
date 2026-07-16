import { defineMcp } from "@lovable.dev/mcp-js";
import listServicesTool from "./tools/list-services";
import listCaseStudiesTool from "./tools/list-case-studies";
import getCompanyInfoTool from "./tools/get-company-info";
import submitContactInquiryTool from "./tools/submit-contact-inquiry";

export default defineMcp({
  name: "moblicode-mcp",
  title: "Moblicode MCP",
  version: "0.1.0",
  instructions:
    "Public tools for Moblicode, a US-based mobile app development studio. Use these tools to look up Moblicode's services, case studies, and company info, or to submit a project inquiry that reaches the Moblicode team.",
  tools: [
    getCompanyInfoTool,
    listServicesTool,
    listCaseStudiesTool,
    submitContactInquiryTool,
  ],
});
