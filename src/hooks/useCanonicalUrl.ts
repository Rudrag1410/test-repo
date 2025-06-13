import config from "@/config";
import { useRouter } from "next/router";

export const useCanonicalUrl = () => {
  const router = useRouter();

  const buildCanonicalUrl = () => {
    const { asPath } = router;

    const [pathname] = asPath.split("?");

    return `${config.baseUrl}${pathname}`;
  };

  const canonicalUrl = buildCanonicalUrl();
  return canonicalUrl;
};
