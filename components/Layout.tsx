import { useState, ReactNode } from "react";
import { Navigator, Footer } from "@/components";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  const [userData, setUserData] = useState({
    email: "",
    imageSource: "",
  });

  return (
    <>
      <Navigator data={userData} setUserData={setUserData} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
