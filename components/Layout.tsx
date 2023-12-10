import { ReactNode } from "react";
import { Navigator, Footer } from "@/components";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Navigator />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
