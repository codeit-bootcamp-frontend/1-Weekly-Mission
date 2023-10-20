import Navigator from "./NavigationBar";
import { getUsers } from "../api";
import { useState, useEffect } from "react";
import "../style/App.css";

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userImage, setUserImage] = useState("");

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
    setUserEmail(email);
    setUserImage(profileImageSource);
  };

  useEffect(() => {
    handleUserProfile();
  }, []);

  return (
    <>
      <Navigator
        className={["nav", "gnb", "logo", "cta", "cta-short"]}
        isLogin={isLogin}
        data={[userEmail, userImage]}
      />
    </>
  );
};

export default App;
