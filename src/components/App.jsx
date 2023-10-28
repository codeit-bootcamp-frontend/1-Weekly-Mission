import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Navigator, Footer } from "components";
import { getUsers } from "utils/api";
import { StyledGlobal } from "style/StyledGlobal";

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    imageSource: "",
  });

  const handleUserProfile = async () => {
    try {
      const userProfile = await getUsers();
      setIsLogin(true);
      const {
        data: [{ email, image_source }],
      } = userProfile;
      setUserData((prevData) => ({
        ...prevData,
        email,
        imageSource: image_source,
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
      <StyledGlobal />
      <Navigator isLogin={isLogin} data={userData} />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
