import Header from "./Header";
import { useEffect, useState } from "react";
import { isSignIn } from "../api";

function App() {
  const [userInfo, setUserInfo] = useState("");

  const getUser = async () => {
    const info = await isSignIn();
    setUserInfo(info);
  };

  useEffect(() => {
    getUser();
  }, []);
  return <Header userInfo={userInfo} />;
}

export default App;
