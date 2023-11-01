import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer.js";
import Header from "../Header/Header.js";
import Main from "../Main/Main.js";
const App = () => {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};

export default App;
