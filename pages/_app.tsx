import "styles/globals.css";

import type { AppProps } from "next/app";
import { FolderContextProvider } from "@/context/FolderContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <FolderContextProvider>
      <Component {...pageProps} />
    </FolderContextProvider>
  );
}
