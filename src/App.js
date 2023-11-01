import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

import "commons/styles/reset.css";
import { Nav, Footer } from "commons/components/index";
import useAsync from "apis/useAsync";
import { getUser } from "apis/api";

const INITIAL_USER = {
  userId: "",
  userCreatedAt: "",
  userName: "",
  userProfileImage: "",
  userEmail: "",
  userAuthId: "",
};

function App() {
  const [userValues, setUserValues] = useState(INITIAL_USER);
  const [isUserLoading, userLoadingError, getUserAsync] = useAsync(getUser);

  const loadUser = async () => {
    const userResult = await getUserAsync();
    if (!userResult) return;
    const {
      id,
      created_at,
      name: userName,
      image_source,
      email,
      auth_id,
    } = userResult.data[0];

    setUserValues((prevValues) => {
      const newValues = {
        userId: id,
        userCreatedAt: created_at,
        userAuthId: auth_id,
        userName: userName,
        userEmail: email,
        userProfileImage: image_source,
      };
      return { ...prevValues, ...newValues };
    });
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <>
      <Nav
        userEmail={userValues.userEmail}
        userProfile={userValues.userProfileImage}
      />
      {isUserLoading && <p> 로그인 중...</p>}
      {userLoadingError?.message && <span>{userLoadingError.message}</span>}
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
