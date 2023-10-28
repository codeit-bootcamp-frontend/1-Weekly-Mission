import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import useAsync from "./hooks/useAsync";

import { getUser } from "../src/api/api";
import "./App.style.css";

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
    console.log(id);
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

      <section className="main-section">
        <Outlet />
      </section>

      <Footer />
    </>
  );
}

export default App;
