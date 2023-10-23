import "styles/globalStyles.css";

import { getUser } from "api/api";

import Header from "components/common/header/Header";
import Footer from "components/common/footer/Footer";
import SharedPage from "pages/shareFolder";

import useFetch from "components/common/hooks/useFetch";

function App() {
  const user = useFetch(getUser());

  return (
    <div>
      <Header user={user} />
      <SharedPage />
      <Footer />
    </div>
  );
}

export default App;
