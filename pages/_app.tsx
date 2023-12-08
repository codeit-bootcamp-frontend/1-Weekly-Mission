import "styles/globals.css";

import type { AppProps } from "next/app";
import { FolderContextProvider } from "@/context/FolderContext";
import { SWRConfig } from "swr";
import { DOMAIN_URL } from "@/common/constants";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{ fetcher: (url: string) => fetch(`${DOMAIN_URL}${url}`).then((res) => res.json()) }}
    >
      <FolderContextProvider>
        <Component {...pageProps} />
      </FolderContextProvider>
    </SWRConfig>
  );
}
