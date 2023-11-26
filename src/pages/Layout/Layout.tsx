import { useEffect, useState, ReactNode, useCallback } from "react";
import "src/commons/styles/reset.css";
import { getUser } from "src/apis/";
import { Nav, Footer } from "src/pages/Layout/components";
import { UserInterface } from "src/types";

interface Props {
  children: ReactNode;
  isSticky?: boolean;
}

function Layout({ children, isSticky = true }: Props) {
  const [userValues, setUserValues] = useState<UserInterface>();

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
