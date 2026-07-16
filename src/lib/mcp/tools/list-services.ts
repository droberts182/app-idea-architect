import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "list_services",
  title: "List Moblicode services",
  description:
    "List the mobile app development services Moblicode offers (iOS, Android, App Store submission, and related work).",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const services = [
      {
        slug: "ios",
        title: "iOS app development",
        description:
          "Native Swift and SwiftUI applications for iPhone and iPad, built end-to-end and shipped through App Store review.",
        url: "https://moblicode.com/services/ios",
      },
      {
        slug: "android",
        title: "Android app development",
        description:
          "Kotlin and Jetpack Compose applications for the full range of Android phones and tablets, shipped through Google Play review.",
        url: "https://moblicode.com/services/android",
      },
      {
        slug: "app-store-submission",
        title: "App Store submission",
        description:
          "End-to-end submission and review handling for both Apple App Store and Google Play, including rejection remediation.",
        url: "https://moblicode.com/services/app-store-submission",
      },
    ];
    return {
      content: [{ type: "text", text: JSON.stringify(services, null, 2) }],
      structuredContent: { services },
    };
  },
});
