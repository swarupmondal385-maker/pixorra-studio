import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      // ─── Structural / global-only ───────────────────────────────────────────
      // These tags cannot conflict with page-level head() because they are
      // unique-by-nature and never redefined in child routes.
      // ALL page-content tags (title, description, og:*, twitter:*) are
      // intentionally absent here — they are owned exclusively by each route.
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#fafaf7", media: "(prefers-color-scheme: light)" },
      { name: "theme-color", content: "#0b1020", media: "(prefers-color-scheme: dark)" },
      { name: "author", content: "Pixorra Studio" },
      // og:site_name is safe here — it never appears in page routes
      { property: "og:site_name", content: "Pixorra Studio" },
      // og:image dimensions are supplementary and don't conflict
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      // twitter:site / creator are account-level, not page-level
      { name: "twitter:site", content: "@pixorrastudio" },
      { name: "twitter:creator", content: "@pixorrastudio" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      // ─── Favicon ──────────────────────────────────────────────────────────
      { rel: "icon", type: "image/png", href: "/pixorra-mark.png" },
      { rel: "apple-touch-icon", href: "/pixorra-mark.png" },
      // ─── Fonts ────────────────────────────────────────────────────────────
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Press+Start+2P&family=Caveat:wght@600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "text/javascript",
        children: `(function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
Cal("init", "15min", {origin:"https://app.cal.com"});
Cal.config = Cal.config || {};
Cal.config.forwardQueryParams = true;
Cal.ns["15min"]("ui", {"theme":"light","cssVarsPerTheme":{"light":{"cal-brand":"#ffffff"}},"hideEventTypeDetails":false,"layout":"month_view"});`,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{var t=localStorage.getItem('pixorra-theme');if(!t){t='light'}document.documentElement.classList.toggle('dark',t==='dark');document.documentElement.style.colorScheme=t}catch(e){}",
          }}
        />
        <HeadContent />
      </head>
      <body suppressHydrationWarning>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
