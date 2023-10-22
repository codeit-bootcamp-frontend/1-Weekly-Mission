import "styles/globalStyles.css";

import { useEffect, useState } from "react";
import { getUser } from "api/api";

import Header from "components/common/header/Header";
import Footer from "components/common/footer/Footer";
import SharedPage from "pages/shareFolder";

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    const data = await getUser();
    setUser(data);
  };
  return (
    <div>
      <Header user={user} />
      <SharedPage />
      <Footer />
    </div>
  );
}

export default App;
