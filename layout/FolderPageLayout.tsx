import React from "react";
import FooterProvider from "@/contexts/provider/FooterProvider";
import HeaderProvider from "@/contexts/provider/HeaderProvider";
import SearchProvider from "@/contexts/provider/SearchProvider";

export default function FolderPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeaderProvider>
        <FooterProvider>
          <SearchProvider>{children}</SearchProvider>
        </FooterProvider>
      </HeaderProvider>
    </>
  );
}
