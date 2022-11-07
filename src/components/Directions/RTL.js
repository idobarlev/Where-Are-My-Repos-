import { prefixer } from "stylis";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";

export const RTL = ({ children }) => {
  const cacheRtl = createCache({
    prepend: true,
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });

  return <CacheProvider value={cacheRtl}>{children}</CacheProvider>;
};
