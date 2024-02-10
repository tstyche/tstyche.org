import { useRouter } from "next/router";
import { DocsThemeConfig } from "nextra-theme-docs";
import { Code } from "@/components/Code";
import { TSTyche } from "@/components/TSTyche";

const config: DocsThemeConfig = {
  components: { code: Code },

  chat: { link: "https://discord.gg/gCSasd3QJq" },
  docsRepositoryBase: "https://github.com/tstyche/tstyche.org/tree/main",
  feedback: { content: null },
  footer: { text: `Copyright © ${new Date().getFullYear()} TSTyche` },
  logo: TSTyche,
  primaryHue: { dark: 206, light: 216 },
  project: { link: "https://github.com/tstyche/tstyche" },
  sidebar: { toggleButton: true },

  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath === "/") {
      return {
        title: "TSTyche — The Essential Type Testing Tool",
      };
    }
    return {
      titleTemplate: "%s — TSTyche",
    };
  },
};

export default config;
