import { useState, useEffect } from "react";
import { Navigator, Footer } from "components";
import { getUsers } from "utils/api";
import "./App.css";

const App = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    imageSource: "",
  });

  const handleUserProfile = async () => {
    let userProfile;
    try {
      setIsLogin(true);
      userProfile = await getUsers();
    } catch (err) {
      console.log(err);
      setIsLogin(false);
    }
    const { email, profileImageSource } = userProfile;
    setUserData((prevData) => ({
      ...prevData,
      email,
      imageSource: profileImageSource,
    }));
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
      {children}
      <Footer />
    </>
  );
};

export default App;
