import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import useAsync from "./hooks/useAsync";

import { getUser, getFolder } from "../src/api/api";
import "./App.style.css";

const INITIAL_USER = {
  userName: "",
  userEmail: "",
  userProfileImage: "",
};

function App() {
  const [userValues, setUserValues] = useState(INITIAL_USER);

  const [isUserLoading, userLoadingError, getUserAsync] = useAsync(getUser);
  useAsync(getFolder);

  const loadUser = async () => {
    const userResult = await getUserAsync();
    if (!userResult) return;

    const {
      name: userName = "",
      email = "",
      profileImageSource = "",
    } = userResult;
    setUserValues((prevValues) => {
      const newValues = {
        userName: userName,
        userEmail: email,
        userProfileImage: profileImageSource,
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

      <section className="section">
        <Outlet />
      </section>

      <Footer />
    </>
  );
}

export default App;
