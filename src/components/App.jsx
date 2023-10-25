import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Navigator, Footer } from "components";
import { getUsers } from "utils/api";
import "./App.css";

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    imageSource: "",
  });

  const handleUserProfile = async () => {
    try {
      let userProfile = await getUsers();
      const valuesProfile = Object.values(userProfile);
      if (!userProfile || valuesProfile.length < 4) return;
      setIsLogin(true);
      const { email, profileImageSource } = userProfile;
      setUserData((prevData) => ({
        ...prevData,
        email,
        imageSource: profileImageSource,
      }));
    } catch (err) {
      setIsLogin(false);
    }
  };

  useEffect(() => {
    handleUserProfile();
  }, []);

  return (
    <>
      <Navigator
        className={["nav", "gnb", "logo", "cta", "cta-short"]}
        isLogin={isLogin}
        data={userData}
      />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
