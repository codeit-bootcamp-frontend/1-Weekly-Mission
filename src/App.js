import { useEffect, useState } from "react";
import useFetch from "components/common/hooks/useFetch";

import "styles/globalStyles.css";
import { getUser } from "api/api";

import Header from "components/common/header/Header";
import Footer from "components/common/footer/Footer";
import SharedPage from "pages/shareFolder";

function App() {
  const [userData, setUserData] = useState(null);
  const { isLoading, error, wrappedFunction: getUserAsyncFunc } = useFetch(getUser);

  const handleUserData = async () => {
    const result = await getUserAsyncFunc();
    // if (error) console.log(error);
    if (!result) return;

    setUserData(result);
  };

  if (error) console.log(error);

  useEffect(() => {
    handleUserData();
  }, []);

  return (
    <div>
      <Header isLoading={isLoading} user={userData} />
      <SharedPage />
      <Footer />
    </div>
  );
}

export default App;
