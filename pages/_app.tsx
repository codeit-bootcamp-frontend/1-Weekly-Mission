import "@/styles/globals.css";

import type { AppProps } from "next/app";
import Layout from "@/components/layout/Layout";
import { FolderContextProvider } from "@/context/FolderContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <FolderContextProvider>
        <Component {...pageProps} />
      </FolderContextProvider>
    </Layout>
  );
}
