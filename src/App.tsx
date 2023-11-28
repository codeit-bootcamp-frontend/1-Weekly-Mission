import { Outlet } from "react-router";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
