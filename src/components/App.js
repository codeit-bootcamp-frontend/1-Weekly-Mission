import GlobalNav from "./globalNav/GlobalNav";
import { Outlet } from "react-router-dom";
import { UserProvider } from "../utils/UserContext";
import Footer from "./footer/Footer";

function App() {
  return (
    <UserProvider>
      <GlobalNav />
      <Outlet />
      <Footer />
    </UserProvider>
  );
}

export default App;
