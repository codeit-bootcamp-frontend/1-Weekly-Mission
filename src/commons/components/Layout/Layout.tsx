import { useEffect, useState, ReactNode } from "react";

import "../../styles/reset.css";
import { Nav, Footer } from "../index";
import { getUser } from "../../../apis/getUser";
// import { getUser } from "@/apis/getUser";

const INITIAL_USER = {
  id: "",
  created_at: "",
  name: "",
  image_source: "",
  email: "",
  auth_d: "",
};

interface Props {
  children: ReactNode;
  isSticky?: boolean;
}

function Layout({ children, isSticky = true }: Props) {
  const [userValues, setUserValues] = useState(INITIAL_USER);

  const loadUser = async () => {
    const { data } = await getUser();

    if (!data) return;
    setUserValues((prevValues) => {
      return { ...prevValues, ...data[0] };
    });
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <>
      <Nav profile={userValues} isSticky={isSticky} />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
