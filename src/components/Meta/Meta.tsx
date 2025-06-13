import Head from "next/head";
import { useCanonicalUrl } from "@/hooks/useCanonicalUrl";

interface MetaProps {
  pageTitle: string;
  pageDescription: string;
  keyWords: string;
  ogImage?: string;
}

const Meta: React.FC<MetaProps> = ({
  pageTitle,
  pageDescription,
  keyWords,
  ogImage,
}) => {
  const canonicalUrl = useCanonicalUrl();

  return (
    <Head>
      <title>{pageTitle}</title>
      <link rel="canonical" href={canonicalUrl} />
      <meta name="description" content={pageDescription} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta name="keywords" content={keyWords} />
      <meta name="author" content="Gynoveda" />
      <meta name="publisher" content="Gynoveda" />
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta name="twitter:site" content="@#" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
    </Head>
  );
};

export default Meta;
