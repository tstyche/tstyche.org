import { generateStaticParamsFor, importPage } from "nextra/pages";
import { useMDXComponents as getMDXComponents } from "nextra-theme-docs";

export const generateStaticParams = generateStaticParamsFor("mdxPath");

type Props = { params: Promise<{ mdxPath: string[] }> };

export async function generateMetadata({ params }: Props) {
  const { mdxPath } = await params;

  if (mdxPath != null) {
    const { metadata } = await importPage(mdxPath);

    return metadata;
  }

  return { title: { absolute: "TSTyche — Everything You Need for Type Testing" } };
}

const Wrapper = getMDXComponents().wrapper;

export default async function Page(props) {
  const params = await props.params;
  const result = await importPage(params.mdxPath);
  const { default: MDXContent, toc, metadata } = result;
  return (
    <Wrapper toc={toc} metadata={metadata}>
      <MDXContent {...props} params={params} />
    </Wrapper>
  );
}
