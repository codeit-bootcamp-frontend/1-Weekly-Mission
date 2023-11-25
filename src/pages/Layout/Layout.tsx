import { useEffect, useState, ReactNode, useCallback } from "react";
import "src/commons/styles/reset.css";
import { getUser } from "../../apis/getUser";
import { Nav, Footer } from "src/pages/Layout/components";

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

  const loadUser = useCallback(async () => {
    const { data } = await getUser();

    if (!data) return;
    setUserValues((prevValues) => {
      return { ...prevValues, ...data[0] };
    });
  }, []);

  useEffect(() => {
    loadUser();
  }, [loadUser]);

  return (
    <>
      <Nav profile={userValues} isSticky={isSticky} />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
