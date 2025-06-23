import type { Metadata } from "next";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import { Footer, Layout, Navbar } from "nextra-theme-docs";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/600.css";
import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/600.css";
import "./global.css";

export const metadata: Metadata = {
  icons: {
    icon: [
      { url: "/images/favicon.png", type: "image/png" },
      { url: "/images/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/images/apple-touch-icon.png",
  },
  openGraph: {
    images: [
      {
        url: "https://tstyche.org/images/og.png",
        width: 800,
        height: 600,
      },
    ],
  },
  robots: { index: true, follow: true },
  title: {
    template: "%s — TSTyche",
    default: "TSTyche — Everything You Need for Type Testing",
  },
};

const navbar = (
  <Navbar
    chatLink="https://discord.gg/gCSasd3QJq"
    logo={
      <svg
        fill="none"
        height="32"
        role="img"
        aria-label="TSTyche"
        viewBox="0 0 146 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M69.69 9.85h-4.37v-2.1h11.11v2.1h-4.37v12.56h-2.37V9.85Zm7.96 10.33 1.64-1.53c1.03 1.26 2.25 1.91 3.84 1.91 1.87 0 2.83-.92 2.83-2.33 0-1.13-.59-1.79-2.29-2.12l-1.3-.23c-2.83-.52-4.28-1.85-4.28-4.18 0-2.6 2.02-4.2 5.12-4.2 2.2 0 3.82.8 4.96 2.25l-1.66 1.47c-.76-.99-1.81-1.62-3.42-1.62s-2.65.69-2.65 1.97.76 1.74 2.33 2.06l1.3.27c2.92.57 4.24 1.87 4.24 4.2 0 2.73-1.95 4.56-5.31 4.56-2.46 0-4.14-.97-5.35-2.48ZM93.99 9.85h-4.37v-2.1h11.11v2.1h-4.37v12.56h-2.37V9.85Zm14.93 1.64h2.21l-4.6 13.08c-.52 1.47-1.18 2.04-2.88 2.04h-1.32v-1.87h1.85l.63-1.85-3.97-11.4h2.29l2.18 6.42.63 2.37h.11l.69-2.37 2.18-6.42Zm3.23 5.46c0-3.49 1.81-5.71 4.96-5.71 2.18 0 3.57 1.07 4.22 2.69l-1.89.88c-.32-1.01-1.09-1.66-2.33-1.66-1.68 0-2.54 1.15-2.54 2.83v1.95c0 1.68.86 2.83 2.54 2.83 1.32 0 2.1-.71 2.56-1.81l1.74.92c-.71 1.79-2.21 2.77-4.3 2.77-3.15 0-4.96-2.23-4.96-5.71ZM123.6 6.87h2.29v6.42h.1c.46-1.18 1.39-2.06 3.07-2.06 2.23 0 3.55 1.55 3.55 4.24v6.93h-2.29v-6.66c0-1.68-.65-2.54-2.06-2.54-1.2 0-2.37.61-2.37 1.87v7.33h-2.29V6.87Zm11.44 10.08c0-3.49 1.91-5.71 5.02-5.71s4.85 2.41 4.85 5.44v.86h-7.5v.36c0 1.68 1.03 2.88 2.88 2.88 1.34 0 2.25-.63 2.88-1.64l1.34 1.32c-.82 1.32-2.42 2.2-4.45 2.2-3.11 0-5.02-2.23-5.02-5.71Zm2.37-1.07v.15h5.08v-.21c0-1.68-.92-2.79-2.44-2.79s-2.65 1.18-2.65 2.86ZM6.94 31.65 0 15.84l10.6-3.2.64 2.1-8.23 2.49 5.94 13.53-2.01.89zm31.32-5.04-2.16-.41 4.52-24h-3.39l-.47 3.98H29.9l-.64-3.98h-3.03l-.63 3.98h-6.86l-.47-3.98h-3.39l4.52 24-2.17.41-5-26.61h8l.46 3.98h3.04L24.36 0h6.78l.63 3.98h3.03L35.27 0h8l-5.01 26.61zm10.3 5.04-2.02-.89 5.95-13.53-8.23-2.49.63-2.1 10.61 3.2-6.94 15.81z"
          fill="currentColor"
        />
      </svg>
    }
    projectLink="https://github.com/tstyche/tstyche"
  />
);

const footer = <Footer>Copyright © {new Date().getFullYear()} TSTyche</Footer>;

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head color={{ hue: { dark: 206, light: 216 } }} />
      <body>
        <Layout
          docsRepositoryBase="https://github.com/tstyche/tstyche.org/tree/main"
          feedback={{ content: null }}
          footer={footer}
          navbar={navbar}
          pageMap={await getPageMap()}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
