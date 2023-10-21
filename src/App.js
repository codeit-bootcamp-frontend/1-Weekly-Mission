import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { getUser } from "./api";

function App() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userProfileImage, setUserProfileImage] = useState("");
  const loadUser = async () => {
    const { name, email, profileImageSource } = await getUser();
    setUserName(name);
    setUserEmail(email);
    setUserProfileImage(profileImageSource);
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <>
      <Nav userEmail={userEmail} userProfile={userProfileImage} />
      <Header userName={userName} userProfile={userProfileImage} />
      <div></div>
      <Footer />
    </>
  );
}

export default App;
