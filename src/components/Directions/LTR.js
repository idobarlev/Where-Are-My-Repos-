import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

export const LTR = ({ children }) => {
  const cacheLtr = createCache({
    key: "ltr",
    stylisPlugins: [prefixer],
  });
  return <CacheProvider value={cacheLtr}>{children}</CacheProvider>;
};
