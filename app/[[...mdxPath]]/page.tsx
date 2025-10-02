import type { Metadata } from "next";
import { generateStaticParamsFor, importPage } from "nextra/pages";
import { useMDXComponents as getMDXComponents } from "nextra-theme-docs";

export const generateStaticParams = generateStaticParamsFor("mdxPath");

type Props = {
  params: Promise<{ mdxPath: string[] }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { mdxPath } = await params;

  if (mdxPath != null) {
    const { metadata } = await importPage(mdxPath);

    return metadata;
  }

  return { title: { absolute: "TSTyche — Everything You Need for Type Testing" } };
}

const Wrapper = getMDXComponents().wrapper;

export default async function Page(props: Props) {
  const params = await props.params;
  const { default: MDXContent, toc, metadata, sourceCode } = await importPage(params.mdxPath);

  if (params.mdxPath != null) {
    return (
      <Wrapper toc={toc} metadata={metadata} sourceCode={sourceCode}>
        <MDXContent {...props} params={params} />
      </Wrapper>
    );
  }

  // TODO return landing page as JSX
  return (
    <Wrapper toc={toc} metadata={metadata} sourceCode={sourceCode}>
      <MDXContent {...props} params={params} />
    </Wrapper>
  );
}
