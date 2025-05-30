import { useRouter } from "next/router";
import type { DocsThemeConfig } from "nextra-theme-docs";
import { Code } from "@/components/Code";
import { TSTyche } from "@/components/TSTyche";

const config: DocsThemeConfig = {
  components: { code: Code },

  chat: { link: "https://discord.gg/gCSasd3QJq" },
  docsRepositoryBase: "https://github.com/tstyche/tstyche.org/tree/main",
  feedback: { content: null },
  footer: { text: `Copyright © ${new Date().getFullYear()} TSTyche` },
  head: null, // seems like 'useNextSeoProps()' does all the job
  logo: TSTyche,
  primaryHue: { dark: 206, light: 216 },
  project: { link: "https://github.com/tstyche/tstyche" },
  sidebar: { toggleButton: true },

  useNextSeoProps() {
    const { asPath } = useRouter();

    const additionalLinkTags = [
      { rel: "icon", href: "/images/favicon.png", type: "image/png" },
      { rel: "icon", href: "/images/favicon.svg", type: "image/svg+xml" },
      { rel: "apple-touch-icon", href: "/images/apple-touch-icon.png" },
    ];
    const openGraph = { images: [{ url: "https://tstyche.org/images/og.png" }] };

    if (asPath === "/") {
      return {
        additionalLinkTags,
        openGraph,
        title: "TSTyche — Everything You Need for Type Testing.",
      };
    }

    return {
      additionalLinkTags,
      openGraph,
      titleTemplate: "%s — TSTyche",
    };
  },
};

export default config;
