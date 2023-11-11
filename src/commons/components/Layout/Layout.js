import { useEffect, useState } from "react";

import "commons/styles/reset.css";
import { Nav, Footer } from "commons/components/index";
import useAsync from "apis/useAsync";
import { getUser } from "apis/getUser";

const INITIAL_USER = {
  id: "",
  created_at: "",
  name: "",
  image_source: "",
  email: "",
  auth_d: "",
};

function Layout({ children, isSticky = true }) {
  const [userValues, setUserValues] = useState(INITIAL_USER);
  const [isUserLoading, userLoadingError, getUserAsync] = useAsync(getUser);

  const loadUser = async () => {
    const { data } = await getUserAsync();

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
