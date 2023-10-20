import Nav from "./Nav";
import Profile from "./Profile";
import "../css/index.css";
import { useEffect, useState } from "react";
import { isSignIn } from "../api";

function Header() {
  const [userInfo, setUserInfo] = useState("");

  const getUser = async () => {
    const userInfo = await isSignIn();
    setUserInfo(userInfo);
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <div className="header">
      <Nav userInfo={userInfo} />
      <Profile userInfo={userInfo} />
    </div>
  );
}

export default Header;
