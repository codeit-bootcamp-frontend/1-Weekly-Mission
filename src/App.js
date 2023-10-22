import "styles/globalStyles.css";

import { useEffect, useState } from "react";
import { getUser } from "api/api";

import Header from "components/units/Header";
import Main from "components/units/Main";
import Footer from "components/units/Footer";

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
      <Main />
      <Footer />
    </div>
  );
}

export default App;
