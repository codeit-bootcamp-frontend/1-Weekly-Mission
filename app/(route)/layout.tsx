import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Providers from "@/components/Providers";
import Modal from "@/components/modals/Modal";
import "./globals.css";

export const metadata: Metadata = {
  title: "Linkbrary",
  description: "Store and Share Your Links.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <Providers>
          <Header />
          {children}
          <Footer />
          <div id="modal">
            <Modal />
          </div>
          <div id="toast" />
        </Providers>
      </body>
    </html>
  );
}
