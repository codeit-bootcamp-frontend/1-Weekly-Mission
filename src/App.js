import { Outlet } from "react-router-dom";
import Footer from "./components/js/Footer";
import Header from "./components/js/Header";

function App() {
  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
