import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect } from "react";

import appCss from "../styles.css?url";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { SITE, orgSchema } from "@/lib/site";
import { initAnalytics, trackPageview } from "@/lib/analytics";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <div className="eyebrow">Error 404</div>
        <h1 className="mt-3">Page not found</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          The page you're looking for has moved or never existed. Let's get you back to something that ships.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground"
          >
            Back to Moblicode
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-2xl">Something didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Try again, or reach out and we'll fix it on our side.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="inline-flex items-center justify-center rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground"
          >
            Try again
          </button>
          <a href="/" className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Moblicode — iOS & Android app development for every category" },
      { name: "description", content: SITE.pitch },
      { name: "author", content: SITE.name },
      { name: "theme-color", content: "#f7f4ee" },
      { property: "og:site_name", content: SITE.name },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Moblicode — iOS & Android app development for every category" },
      { property: "og:description", content: SITE.pitch },
      { property: "og:image", content: "/og-image.jpg" },
      { property: "og:image:width", content: "1280" },
      { property: "og:image:height", content: "704" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/og-image.jpg" },
      { name: "twitter:title", content: "Moblicode — iOS & Android app development for every category" },
      { name: "description", content: "Generates app development prompts for Moblicode, a service that builds iOS and Android apps for all categories." },
      { property: "og:description", content: "Generates app development prompts for Moblicode, a service that builds iOS and Android apps for all categories." },
      { name: "twitter:description", content: "Generates app development prompts for Moblicode, a service that builds iOS and Android apps for all categories." },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(orgSchema()),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function AnalyticsBoot() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  useEffect(() => { initAnalytics(); }, []);
  useEffect(() => { trackPageview(path); }, [path]);
  return null;
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <AnalyticsBoot />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
