import type { AppProps } from "next/app";

import { ObserverProvider } from "@/contexts/ObserverContext";
import { UserProvider } from "@/contexts/UserContext";
import useLoading from "@/hooks/useLoading";

import "@/assets/styles/colors.css";
import "@/assets/styles/reset.css";
import "@/assets/styles/loadingSpinner.css";

declare global {
  interface Window {
    Kakao: any;
  }
}

export default function App({ Component, pageProps }: AppProps) {
  const isLoading = useLoading();

  return (
    <UserProvider>
      <ObserverProvider>
        {isLoading ? (
          <div className="loading">
            <div className="spinner"></div>
          </div>
        ) : null}
        <Component {...pageProps} />
      </ObserverProvider>
    </UserProvider>
  );
}
