import nextra from "nextra";

const withNextra = nextra({
  defaultShowCopyCode: true,
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

export default withNextra({});
